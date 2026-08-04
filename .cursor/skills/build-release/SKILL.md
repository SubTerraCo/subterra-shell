---
name: build-release
description: "/BUILD — Stamp and validate SubTerra Shell release batch."
---

# /BUILD — SubTerra Shell

1. Confirm ROADMAP **Release** matches today (`pnpm release:rollover`).
2. Do not reuse a batch already in `build-log.json`.
3. R0: stamp only. R1+: compile, tests, installer.
