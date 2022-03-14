import { ref } from "vue";

export default function useLoadingHandler() {

  const isLoading = ref(true);
  const loadingFailed = ref(false);

  return {
    isLoading,
    loadingFailed
  };
}
