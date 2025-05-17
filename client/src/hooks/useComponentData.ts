import { useState, useEffect, useCallback } from "react";
import { fetchApi } from "../api/api";

interface ComponentData {
  id: string;
}

interface IuseComponentDataOptions {
  endpoint?: string;
}

export const useComponentData = (options: IuseComponentDataOptions = {}) => {
  const { endpoint = "/components" } = options;

  const [data, setData] = useState<ComponentData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await fetchApi(endpoint);
      setData(result);
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error("An unknown error occurred")
      );
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};
