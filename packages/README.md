# `@subterra/*` packages

| Package | Status | Notes |
|---------|--------|-------|
| `sdk-contract` | **R0 scaffold** | Shared contract — single source of truth for twin-SDK parity. Internal, not published |
| `app-sdk` | **R0 scaffold** | `@subterra/app-sdk` — `SDK_ROLE = "app"` |
| `integration-sdk` | **R0 scaffold** | `@subterra/integration-sdk` — `SDK_ROLE = "integration"` |
| `shell-ui` | **R1 scaffold** | TopBar, BottomNav, AppGrid, Powerline tokens — consumed by `apps/web` + `apps/desktop` |
| `sync` / `auth` | R3 | |

## Twin-SDK parity

`app-sdk` and `integration-sdk` must expose an **identical** exported surface (CI_OPS_CONSTITUTION §2). Both re-export `sdk-contract` and differ only in the value of `SDK_ROLE`, so parity is structural instead of hand-maintained.

`SDK_SURFACE` in `sdk-contract` lists the symbol names both twins must provide. Governance workspace QA asserts each twin's runtime export list equals that set.

When changing the SDK surface:

1. Edit `sdk-contract/src/index.ts` and update `SDK_SURFACE`.
2. Mirror any new re-export into **both** twins.
3. Keep the twin `src/index.ts` files identical apart from `SDK_ROLE`.
