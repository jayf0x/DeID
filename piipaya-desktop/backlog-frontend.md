
## FEATURE: add one shot with GLiNER
Add UI support to select GLiNER as a standalone one-shot DeID solution.


## [area: ui] Carbon component integration issues

- **ToggleSwitch remount on prop change** — uses `{#key checked}` to sync controlled state with Carbon Toggle's internal state. Causes brief DOM remount when parent updates `checked`. Investigate `bind:toggled` once Svelte 5 / Carbon interop is stable.
- **Carbon white.css global resets** — overridden with `!important` in `base.css`. Long-term: import only per-component Carbon CSS instead of full white theme.


## [area: ui] AdvancedSettingsModal

- **Consistency slider precision loss** — value scaled ×100 for 0–100 range. Sub-percent precision (e.g. 0.075 → 0.08) lost. Consider 2-decimal display or raw 0–1 range.


## [area: ui] General

- **AskPopover token bar has no label** — percentage or token count not shown alongside progress bar.


## [area: route-architecture] [FRONTEND-019A-extract-settings-orchestration]
type: feature

Problem: Settings/profile/config lifecycle orchestration remains in `src/routes/+page.svelte`.
Why: Settings changes tightly coupled to route rendering, hard to test in isolation.
Done: Settings/profile actions moved to dedicated domain action module with explicit dependencies and typed contracts.


## [area: route-architecture] [FRONTEND-019B-extract-run-and-queue-orchestration]
type: feature

Problem: Run submission, payload selection, queue updates, and completion/error handling remain route-owned.
Why: Processing lifecycle hard to evolve safely due to broad route coupling.
Done: Run/queue lifecycle extracted to dedicated workbench action module consumed by the route.


## [area: route-architecture] [FRONTEND-019C-extract-preview-and-attachment-orchestration]
type: feature

Problem: Preview selection, attachment open/edit/reconvert, and preview save orchestration remain route-owned.
Why: Attachment/preview logic high complexity, hard to reason about mixed with route composition.
Done: Preview/attachment orchestration extracted to dedicated module with typed action APIs used by the route.


## BUG: visible overflow with a lot of attachments
When attaching 50+ files, both the file tags element and conversation status element (when expanded) overflow.
Each should have a fixed max-height and scrollable overflow.


## BUG: Tag IP ADDRESS has no color highlight
Each tag should have a unique color. IP ADDRESS currently unstyled.
Optionally: generic fn converting tag name → refined modern color (not raw unicode-to-hex).


## FEATURE: settings - move profile to separate tab
Move profile-related settings to a dedicated settings tab.


## FEATURE: remove responsive resizing
UI only targets desktop. Resizing causes unexpected layout (sections flex into vertical alignment on smaller screens).
Fix: sections use % of total width, no flex wrap — layout must never go vertical.


## FEATURE: add general clear button in INPUT
Add a "Reset" button (before "Run") that clears all INPUT text and attachments.
