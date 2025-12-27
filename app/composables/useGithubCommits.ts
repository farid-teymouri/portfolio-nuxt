import type { GithubCommit } from "~/types/github";

export function useGithubCommits(username: string) {
  // Reactive state for commits data
  const commits = ref<GithubCommit[]>([]);

  // Loading state to track API request status
  const loading = ref(false);

  // Error state to store possible errors
  const error = ref<string | null>(null);

  // Fetch commits from the backend API
  const fetchCommits = async () => {
    loading.value = true;
    error.value = null;

    try {
      commits.value = await $fetch<GithubCommit[]>("/api/github/commits", {
        query: { username },
      });
    } catch (err: any) {
      // Handle and normalize error message
      error.value = err?.message || "Failed to load commits";
    } finally {
      loading.value = false;
    }
  };

  // Expose state and actions
  return {
    commits,
    loading,
    error,
    fetchCommits,
  };
}
