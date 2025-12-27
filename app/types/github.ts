export interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description?: string;
  stargazers_count?: number;
  language?: string;
}
export interface ContributionDay {
  date: string;
  contributionCount: number;
  contributionLevel:
    | "NONE"
    | "FIRST_QUARTILE"
    | "SECOND_QUARTILE"
    | "THIRD_QUARTILE"
    | "FOURTH_QUARTILE";
}

export interface ContributionCalendar {
  totalContributions: number;
  weeks: {
    contributionDays: ContributionDay[];
  }[];
}

export interface GithubCommit {
  repo: string; // e.g., "farid-teymouri/portfolio-nuxt"
  type: "public" | "private"; // repository visibility
  message: string; // commit message (first line)
  timestamp: string; // ISO format, e.g., "2025-12-25T15:09:09Z"
  sha: string; // commit SHA
  url: string; // direct link to GitHub commit (html_url)
}
