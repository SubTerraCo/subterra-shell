#!/usr/bin/env node
/**
 * Shell release rollover — uses @subterra/ci-ops from sibling governance checkout.
 */
import { pathToFileURL } from "node:url";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { existsSync } from "node:fs";

const shellRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const ciOpsEntry = join(
  shellRoot,
  "../governance/packages/ci-ops/src/index.mjs",
);

if (!existsSync(ciOpsEntry)) {
  console.error(
    "Missing governance ci-ops at ../governance/packages/ci-ops. Open the meta workspace.",
  );
  process.exit(1);
}

const { runRollover, todayReleaseTag, nextBatchId, parseBatchLogRows, syncRoadmapRelease, ensureBatchLogRow } =
  await import(pathToFileURL(ciOpsEntry).href);

const args = new Set(process.argv.slice(2));
const stamp = args.has("--stamp");
const nextBatch = args.has("--next-batch");

if (nextBatch && !stamp) {
  const { readFileSync, writeFileSync } = await import("node:fs");
  const roadmapPath = join(
    shellRoot,
    "Docs/Working Docs-Features-Incidents/ROADMAP.md",
  );
  let roadmap = readFileSync(roadmapPath, "utf8");
  const releaseTag = todayReleaseTag();
  roadmap = syncRoadmapRelease(roadmap, releaseTag);
  const batchId = nextBatchId(releaseTag, parseBatchLogRows(roadmap));
  roadmap = ensureBatchLogRow(roadmap, batchId, "next-batch");
  writeFileSync(roadmapPath, roadmap, "utf8");
  console.log(batchId);
  process.exit(0);
}

const result = runRollover(shellRoot, { stamp: stamp || !nextBatch, nextBatch: true });
console.log(`Release ${result.releaseTag} · batch ${result.batchId}`);
if (stamp || !nextBatch) {
  console.log(`Stamped package.json (see subterraShellVersion)`);
}
