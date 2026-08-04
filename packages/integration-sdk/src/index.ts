/**
 * SubTerra Integrations SDK.
 *
 * Twin of `@subterra/app-sdk`. The exported surface of the two packages must
 * stay identical (CI_OPS_CONSTITUTION §2) — only `SDK_ROLE` differs.
 * Keep this file and the app twin byte-identical apart from that value.
 */
import { createDefineItem } from "@subterra/sdk-contract";
import type { SubterraRole } from "@subterra/sdk-contract";

export type {
  SubterraAppCode,
  SubterraHostContext,
  SubterraItemDefinition,
  SubterraItemInput,
  SubterraItemLifecycle,
  SubterraItemManifest,
  SubterraMarketplace,
  SubterraRole,
} from "@subterra/sdk-contract";

export {
  SDK_CONTRACT_VERSION,
  SDK_SURFACE,
  marketplaceForRole,
} from "@subterra/sdk-contract";

export const SDK_ROLE: SubterraRole = "integration";

export const defineItem = createDefineItem(SDK_ROLE);
