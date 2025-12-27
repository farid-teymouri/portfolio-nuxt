import { defineEventHandler, getQuery, createError } from "h3";
import type { GithubCommit } from "~/types/github";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const username = (query.username as string) || "farid-teymouri";

  const headers = {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, // Required for private repos
  };

  // Step 1: Fetch all repositories
  const reposRes = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`,
    { headers }
  );

  if (!reposRes.ok)
    throw createError({
      statusCode: reposRes.status,
      statusMessage: "GitHub Repos API Error",
    });

  const repos: any[] = await reposRes.json();
  const allCommits: GithubCommit[] = [];

  // Step 2: Fetch latest commits from each repo (max 10 for performance)
  for (const repo of repos) {
    const commitsRes = await fetch(
      `https://api.github.com/repos/${repo.full_name}/commits?per_page=10`,
      { headers }
    );

    if (!commitsRes.ok) continue; // skip errors (e.g., empty repo)

    const commits: any[] = await commitsRes.json();

    commits.forEach((commit) => {
      allCommits.push({
        repo: repo.full_name,
        type: repo.private ? "private" : "public",
        message: commit.commit.message.split("\n")[0] || "No message",
        timestamp: commit.commit.committer.date,
        sha: commit.sha, // Commit SHA
        url: commit.html_url, // Direct link to GitHub commit
      });
    });
  }

  // Step 3: Sort by date and take the 5 most recent
  allCommits.sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return allCommits.slice(0, 12);
});
