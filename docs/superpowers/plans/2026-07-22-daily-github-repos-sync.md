# Daily GitHub Repos Sync Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Daily GitHub Action syncs public repos into `data/github-repos.json` and commits with the owner's PAT so contributions count on the graph.

**Architecture:** A Node ESM script fetches `/users/Tharindu1222/repos`, filters/sorts, writes JSON. A workflow runs on cron + workflow_dispatch, fails without `GH_PAT`, and commits only when the `repos` payload changed.

**Tech Stack:** Node.js (built-in `fetch`), GitHub Actions, git + PAT

## Global Constraints

- Username fixed: `Tharindu1222`
- Max 12 non-fork repos, sorted by `updated_at` desc
- Commit author email: `162180049+Tharindu1222@users.noreply.github.com`
- No UI changes to `pages/index.tsx`
- Fail if `GH_PAT` missing in CI
- Commit only when `repos`/`username` change (not `synced_at` alone)

---

### Task 1: Sync script

**Files:**
- Create: `scripts/sync-github-repos.mjs`
- Create: `data/github-repos.json` (via running the script)

**Interfaces:**
- Produces: writes `data/github-repos.json` with `{ synced_at, username, repos[] }`
- Env: optional `GH_PAT` / `GITHUB_TOKEN` for API auth; `GITHUB_USERNAME` override (default `Tharindu1222`)

- [ ] **Step 1: Create `scripts/sync-github-repos.mjs`** with fetch, filter forks, sort, keep 12, compare previous `repos`+`username`, write file, exit 0 with stdout `CHANGED` or `UNCHANGED`

- [ ] **Step 2: Run** `node scripts/sync-github-repos.mjs` and confirm `data/github-repos.json` exists with valid shape

---

### Task 2: GitHub Actions workflow

**Files:**
- Create: `.github/workflows/sync-github-repos.yml`

- [ ] **Step 1: Create workflow** — cron `30 0 * * *`, `workflow_dispatch`, checkout with `token: ${{ secrets.GH_PAT }}`, fail if secret empty, run script, if CHANGED then commit/push as Tharindu1222

- [ ] **Step 2: Sanity-check YAML** exists and references `scripts/sync-github-repos.mjs` and `GH_PAT`

---

### Task 3: Document secret setup

**Files:**
- Modify: `README.md` — short section on `GH_PAT` and enabling the workflow

- [ ] **Step 1: Add README section** with PAT steps and manual run link

---

### Task 4: Verify locally

- [ ] **Step 1: Run script twice** — second run should print `UNCHANGED`
- [ ] **Step 2: Confirm JSON has `synced_at`, `username`, `repos` array
