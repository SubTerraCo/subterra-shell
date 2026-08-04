# SubTerra Shell

Global Shell for the SubTerra OS polyrepo — **Apps** and **Integrations** marketplaces (1:1 UX).

| | |
|--|--|
| **Repo** | `SubTerraCo/subterra-shell` |
| **APP** | `ST` (admin) · `NX` Nexus reserved |
| **Governance** | sibling `../governance` → `SubTerraCo/subterra-governance` |

## R1 status

Basic chrome + marketplace grid:

- Shared `@subterra/shell-ui` (TopBar, BottomNav with Search → marketplace, 3×4 AppGrid)
- `apps/web` — Next.js admin shell
- `apps/desktop` — Electron + Vite admin shell

Twin SDKs remain R0 scaffolds. App mounting / Nexus split / NFC auth are later.

## Scripts

```bash
pnpm install
pnpm dev:web              # Next.js on :3100
pnpm dev:desktop          # Electron + Vite
pnpm build:web
pnpm build:desktop
pnpm type-check
pnpm validate:governance-link
pnpm release:rollover
```

## Layout

```
shell/
  packages/
    sdk-contract/
    app-sdk/
    integration-sdk/
    shell-ui/          # R1 chrome + marketplace grid
  apps/
    web/               # Next.js
    desktop/           # Electron + Vite
  Docs/Working Docs-Features-Incidents/
```
