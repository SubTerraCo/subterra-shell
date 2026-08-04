# SubTerra Shell Roadmap

> **Release:** v26.08.04  
> **Last Updated:** 2026-08-04  
> **Status:** Sprint 1 — R1 basic chrome + marketplace grid  
> **APP code:** ST  
> **Governance:** [../governance/CI_OPS_CONSTITUTION.md](../../../governance/CI_OPS_CONSTITUTION.md) (sibling checkout)

> **Source of truth** for ST N-#### / batch log. Cross-repo bugs/features: `ST/N-####`.

---

## Documentation map

| Need | Doc |
|------|-----|
| Feature codes | [FEATURE_REGISTRY.md](./FEATURE_REGISTRY.md) |
| Bugs | [INCIDENTS.md](./INCIDENTS.md) |
| Process | governance `CI_OPS_CONSTITUTION.md` |
| Catalog | governance `subterra.manifest.yaml` |
| Dual-shell design | governance `Docs/DESIGN_RECORDS/GV-0002-nexus-dual-shell.md` |

---

## Active sprint 1 (v26.08.04)

- [x] R0 — repo scaffold, CI Ops docs, rollover stamp
- [x] R1 — TopBar + BottomNav (Search opens marketplace) + 3×4 AppGrid placeholders
- [x] R1 — `apps/web` (Next.js) + `apps/desktop` (Electron)
- [ ] R2 — Twin SDK host / mount real apps; Blocks default-open
- [ ] R3 — Nexus (`apps/nexus`) customer shell (GV-0002)

### N-0001 — Dual marketplace shell chrome

**Address:** `ST.DT.MK.01.001.010` · `ST.DT.UI.00.001.010`  
**Status:** Partially delivered — chrome cloned; Apps vs Integrations tabs deferred  
**Acceptance (remaining):** Separate Apps + Integrations marketplace tabs

### N-0002 — Marketplace 3×4 app grid

**Address:** `ST.DT.MK.01.003.010` · `ST.WB.MK.01.003.010`  
**Status:** Delivered (placeholders)  
**Acceptance:** Search (bottom-left) opens marketplace; 3×4 grid shows planned catalog tiles (BK, MB, BB, TK, AT, WL + empty slots); reserved tiles show Coming soon

---

## On hold (PM)

- Subtoken consolidation / revival
- Blocks mount into shell
- Workspace QA browser journeys (until Shell hosts are stable)

---

## Batch log

| Batch | Status | Notes |
|-------|--------|-------|
| v26.08.04b1 | 🧪 QA | R1 chrome + marketplace grid + web/desktop hosts |
| v26.08.03b4 | 🧪 QA | session batch |
| v26.08.03b1 | 🧪 QA | R0 scaffold |
| v26.08.03b2 | 🧪 QA | release:rollover --stamp verified |
| v26.08.03b3 | 🧪 QA | release:next-batch insert verified |
