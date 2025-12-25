import type { GithubRepo } from "~/types/github";

export function useGithub(username: string) {
  const repos = ref<GithubRepo[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchRepos = async () => {
    loading.value = true;
    error.value = null;

    try {
      repos.value = await $fetch<GithubRepo[]>("/api/github/repos", {
        query: { username },
      });
    } catch (err: any) {
      error.value = err?.message || "Failed to load repositories";
    } finally {
      loading.value = false;
    }
  };

  return {
    repos,
    loading,
    error,
    fetchRepos,
  };
}
