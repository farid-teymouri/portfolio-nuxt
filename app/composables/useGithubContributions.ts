import type { ContributionCalendar } from "~/types/github";

export function useGithubContributions() {
  const calendar = ref<ContributionCalendar | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchContributions = async () => {
    loading.value = true;
    try {
      calendar.value = await $fetch<ContributionCalendar>(
        "/api/github/contributions"
      );
    } catch (e: any) {
      error.value = e.message;
    } finally {
      loading.value = false;
    }
  };

  return {
    calendar,
    loading,
    error,
    fetchContributions,
  };
}
