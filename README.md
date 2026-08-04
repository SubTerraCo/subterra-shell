# SubTerra Shell

Global Shell for the SubTerra OS polyrepo — **Apps** and **Integrations** marketplaces (1:1 UX).

| | |
|--|--|
| **Repo** | `PoweredUpLabs/subterra-shell` |
| **APP** | `ST` |
| **Governance** | sibling `../governance` → `PoweredUpLabs/subterra-governance` |

## R0 status

DevOps / CI Ops bootstrap only. Marketplace UI is **R1**. Twin SDKs (`@subterra/app-sdk`, `@subterra/integration-sdk`) are **R2**.

## Scripts

```bash
pnpm release:rollover      # sync ROADMAP to today + stamp package.json batch
pnpm release:next-batch    # print next batch id and append ROADMAP row
pnpm validate:governance-link
```

## Layout (upcoming)

```
shell/
  packages/
    app-sdk/           # R2
    integration-sdk/   # R2
    ui/                # R1
  apps/                # Electron / web / mobile hosts — R1+
  Docs/Working Docs-Features-Incidents/
```
