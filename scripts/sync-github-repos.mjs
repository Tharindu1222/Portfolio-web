#!/usr/bin/env node
/**
 * Sync public GitHub repos for a user into data/github-repos.json.
 * Prints CHANGED or UNCHANGED to stdout (used by CI).
 * Commit only when repos/username change — synced_at alone does not count.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_PATH = join(ROOT, "data", "github-repos.json");
const USERNAME = process.env.GITHUB_USERNAME || "Tharindu1222";
const MAX_REPOS = 12;
const TOKEN = process.env.GH_PAT || process.env.GITHUB_TOKEN || "";

async function fetchAllRepos(username) {
  const repos = [];
  let page = 1;

  while (true) {
    const url = new URL(`https://api.github.com/users/${username}/repos`);
    url.searchParams.set("per_page", "100");
    url.searchParams.set("page", String(page));
    url.searchParams.set("type", "owner");
    url.searchParams.set("sort", "updated");
    url.searchParams.set("direction", "desc");

    const headers = {
      Accept: "application/vnd.github+json",
      "User-Agent": "Portfolio-web-sync-github-repos",
      "X-GitHub-Api-Version": "2022-11-28",
    };
    if (TOKEN) {
      headers.Authorization = `Bearer ${TOKEN}`;
    }

    const res = await fetch(url, { headers });
    if (!res.ok) {
      const body = await res.text();
      throw new Error(`GitHub API ${res.status}: ${body}`);
    }

    const batch = await res.json();
    if (!Array.isArray(batch) || batch.length === 0) break;
    repos.push(...batch);
    if (batch.length < 100) break;
    page += 1;
  }

  return repos;
}

function toPayload(repos) {
  const filtered = repos
    .filter((r) => r && r.fork === false)
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    .slice(0, MAX_REPOS)
    .map((r) => ({
      name: r.name,
      description: r.description ?? null,
      html_url: r.html_url,
      language: r.language ?? null,
      stargazers_count: r.stargazers_count ?? 0,
      forks_count: r.forks_count ?? 0,
      updated_at: r.updated_at,
      topics: Array.isArray(r.topics) ? r.topics : [],
    }));

  return {
    synced_at: new Date().toISOString(),
    username: USERNAME,
    repos: filtered,
  };
}

function stableKey(data) {
  return JSON.stringify({
    username: data.username,
    repos: data.repos,
  });
}

function readPrevious() {
  if (!existsSync(OUT_PATH)) return null;
  try {
    return JSON.parse(readFileSync(OUT_PATH, "utf8"));
  } catch {
    return null;
  }
}

async function main() {
  const raw = await fetchAllRepos(USERNAME);
  const next = toPayload(raw);
  const prev = readPrevious();
  const changed = !prev || stableKey(prev) !== stableKey(next);

  if (changed) {
    mkdirSync(dirname(OUT_PATH), { recursive: true });
    writeFileSync(OUT_PATH, `${JSON.stringify(next, null, 2)}\n`, "utf8");
  }

  console.log(changed ? "CHANGED" : "UNCHANGED");
  console.error(
    changed
      ? `Wrote ${next.repos.length} repos for ${USERNAME} → ${OUT_PATH}`
      : `No repo changes for ${USERNAME}; left ${OUT_PATH} unchanged`
  );
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
