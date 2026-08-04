/**
 * Shared contract for the twin SubTerra SDKs.
 *
 * `@subterra/app-sdk` and `@subterra/integration-sdk` must expose an
 * IDENTICAL exported surface (CI_OPS_CONSTITUTION §2). Both re-export this
 * module and differ only in the value of `SDK_ROLE`, so parity is structural
 * rather than maintained by hand.
 */

/** Which marketplace an item is discovered in. Role, not architecture. */
export type SubterraRole = "app" | "integration";

export type SubterraMarketplace = "apps" | "integrations";

/** Dewey APP segment, e.g. `BK`, `MB`, `AT`. */
export type SubterraAppCode = string;

export interface SubterraItemManifest {
  /** Stable slug matching `subterra.manifest.yaml` `items[].id`. */
  id: string;
  /** Reserved code from governance `codes/APP_REGISTRY.yaml`. */
  appCode: SubterraAppCode;
  name: string;
  role: SubterraRole;
  /** Dewey PP codes, e.g. `["DT", "WB"]`. */
  platforms: string[];
  marketplace: SubterraMarketplace;
}

/** Handles the Shell passes to an item when it mounts. */
export interface SubterraHostContext {
  shellVersion: string;
  role: SubterraRole;
  /** Root node the item renders into, when the host is a DOM surface. */
  container?: unknown;
}

export interface SubterraItemLifecycle {
  mount(context: SubterraHostContext): void | Promise<void>;
  unmount?(): void | Promise<void>;
}

export interface SubterraItemDefinition {
  manifest: SubterraItemManifest;
  lifecycle: SubterraItemLifecycle;
}

/** Input accepted by `defineItem` — `role` is supplied by the SDK twin. */
export type SubterraItemInput = Omit<SubterraItemDefinition, "manifest"> & {
  manifest: Omit<SubterraItemManifest, "role">;
};

export const SDK_CONTRACT_VERSION = "26.8.3" as const;

/**
 * Exported symbol names both twins must provide. The workspace QA parity test
 * asserts each twin's export list equals this set.
 */
export const SDK_SURFACE = [
  "SDK_CONTRACT_VERSION",
  "SDK_ROLE",
  "SDK_SURFACE",
  "defineItem",
  "marketplaceForRole",
] as const;

export function marketplaceForRole(role: SubterraRole): SubterraMarketplace {
  return role === "app" ? "apps" : "integrations";
}

/**
 * Build a definition with the role fixed by the calling SDK twin. Not called
 * directly by products — each twin wraps it as `defineItem`.
 */
export function createDefineItem(role: SubterraRole) {
  return function defineItem(input: SubterraItemInput): SubterraItemDefinition {
    const marketplace = input.manifest.marketplace ?? marketplaceForRole(role);

    if (marketplace !== marketplaceForRole(role)) {
      throw new Error(
        `SubTerra SDK: role "${role}" cannot declare marketplace "${marketplace}"`,
      );
    }

    return {
      manifest: { ...input.manifest, role, marketplace },
      lifecycle: input.lifecycle,
    };
  };
}
