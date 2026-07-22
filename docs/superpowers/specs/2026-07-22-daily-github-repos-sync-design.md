# Daily GitHub Repos Sync — Design

**Date:** 2026-07-22  
**Repo:** [Tharindu1222/Portfolio-web](https://github.com/Tharindu1222/Portfolio-web)  
**Status:** Approved in conversation; awaiting final file review

## Problem

The portfolio contribution graph is sparse. Empty “daily commit” bots are undesirable. We want a scheduled automation that writes **useful** data and produces commits attributed to the account owner so they appear on the contribution graph.

## Goal

Once per day, sync public GitHub repositories for `Tharindu1222` into `data/github-repos.json` in this repo. Commit and push only when the file content changes, using a Personal Access Token so commits count for the user (not `github-actions[bot]`).

## Non-goals

- Changing the portfolio UI (`pages/index.tsx`) in this pass
- Fake/empty commits when data is unchanged
- Live client-side GitHub API calls for the contribution graph

## Architecture

```
GitHub Actions (cron)
  → scripts/sync-github-repos.mjs
      → GET /users/Tharindu1222/repos
      → write data/github-repos.json (pretty JSON)
  → if file changed:
      → git commit + push with GH_PAT (user identity)
```

### Components

| Path | Responsibility |
|------|----------------|
| `scripts/sync-github-repos.mjs` | Fetch repos, filter, sort, write JSON |
| `.github/workflows/sync-github-repos.yml` | Schedule, run script, commit/push with PAT |
| `data/github-repos.json` | Generated artifact consumed later by the UI |

### JSON shape

```json
{
  "synced_at": "2026-07-22T00:30:00.000Z",
  "username": "Tharindu1222",
  "repos": [
    {
      "name": "Portfolio-web",
      "description": "...",
      "html_url": "https://github.com/Tharindu1222/Portfolio-web",
      "language": "TypeScript",
      "stargazers_count": 0,
      "forks_count": 0,
      "updated_at": "2025-09-20T11:01:32Z",
      "topics": []
    }
  ]
}
```

### Sync rules

- Source: public repos for user `Tharindu1222`
- Exclude forks (`fork === false`)
- Sort by `updated_at` descending
- Keep at most 12 repos
- Auth for API: `GH_PAT` if present, else unauthenticated (rate-limited); workflow always provides `GH_PAT`
- Commit only when `data/github-repos.json` content differs (compare after normalizing `synced_at` so timestamp-only drift does not force a commit — OR: always rewrite `synced_at` but skip commit if repos array is identical)

**Commit decision (explicit):** Compare the `repos` array (and `username`) to the previous file. Update `synced_at` and commit only when `repos` or `username` changed. Quiet days produce no commit.

## Auth & contribution graph

- Repo secret: `GH_PAT` — classic PAT with `repo` scope (or fine-grained: Contents read/write on this repo + metadata)
- Workflow configures:
  - `git config user.name` → `Tharindu1222`
  - `git config user.email` → GitHub noreply email for the account (e.g. `162180049+Tharindu1222@users.noreply.github.com` or the email from GitHub settings)
- Checkout and push use `GH_PAT`, not default `GITHUB_TOKEN`, so authorship is the user

Without `GH_PAT`, the workflow must fail clearly (do not fall back to bot commits that look successful but do not count).

## Schedule

- Cron: `30 0 * * *` (00:30 UTC daily)
- Also: `workflow_dispatch` for manual runs

## Error handling

- Non-2xx GitHub API → exit non-zero; workflow fails
- Missing `GH_PAT` → fail fast with a clear message
- Empty repo list after filters → still write valid JSON with `repos: []`; commit only if that differs from previous

## Testing

- Run script locally: `node scripts/sync-github-repos.mjs` → inspect JSON
- Manual workflow run after PAT is configured
- Confirm latest commit author on `main` is `Tharindu1222`, not `github-actions[bot]`
- Confirm a day with no repo metadata changes leaves no new commit

## Future (out of scope)

- Read `data/github-repos.json` in the portfolio UI for a “Latest projects” section
