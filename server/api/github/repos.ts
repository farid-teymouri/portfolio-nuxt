import { defineEventHandler, getQuery } from "h3";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const username = (query.username as string) || "farid-teymouri";

  const res = await fetch(`https://api.github.com/users/${username}/repos`, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });

  if (!res.ok) {
    throw createError({
      statusCode: res.status,
      statusMessage: "GitHub API Error",
    });
  }

  return await res.json();
});
