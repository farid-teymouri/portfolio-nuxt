import { defineEventHandler } from "h3";

export default defineEventHandler(async () => {
  const query = `
    query {
      viewer {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                contributionLevel
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) {
    throw createError({
      statusCode: res.status,
      statusMessage: "GitHub GraphQL Error",
    });
  }

  const json = await res.json();
  return json.data.viewer.contributionsCollection.contributionCalendar;
});
