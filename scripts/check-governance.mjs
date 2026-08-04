#!/usr/bin/env node
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const shellRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const required = [
  "../governance/CI_OPS_CONSTITUTION.md",
  "../governance/subterra.manifest.yaml",
  "../governance/codes/APP_REGISTRY.yaml",
  "../governance/packages/ci-ops/src/index.mjs",
];

let ok = true;
for (const rel of required) {
  const p = join(shellRoot, rel);
  if (!existsSync(p)) {
    console.error(`Missing: ${rel}`);
    ok = false;
  }
}
if (!ok) process.exit(1);
console.log("Governance sibling link OK");
