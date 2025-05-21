import { useState, useEffect, useCallback } from "react";
import { fetchApi } from "../api/api";
import { IComponent } from "../types/components";

interface IuseComponentDataOptions {
  endpoint?: string;
}

export const useComponentData = <T extends IComponent>(
  options: IuseComponentDataOptions = {}
) => {
  const { endpoint = "/components" } = options;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await fetchApi(endpoint);
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
  }, [endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};
