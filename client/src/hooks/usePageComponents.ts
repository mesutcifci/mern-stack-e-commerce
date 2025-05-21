import { useState, useEffect, useCallback } from "react";
import { fetchApi } from "../api/api";
import { IComponent } from "../types/components";

interface IUsePageComponentsOptions {
  pageName: string;
}

export const usePageComponents = (options: IUsePageComponentsOptions) => {
  const { pageName } = options;

  const [data, setData] = useState<IComponent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchPageComponents = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await fetchApi(`/components/page/${pageName}`);
      if (result && result.data) {
        setData(result.data);
      }
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error("An unknown error occurred")
      );
    } finally {
      setLoading(false);
    }
  }, [pageName]);

  useEffect(() => {
    fetchPageComponents();
  }, [fetchPageComponents]);

  return {
    data,
    loading,
    error,
    refetch: fetchPageComponents,
  };
};
