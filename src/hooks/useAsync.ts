import { useCallback, useEffect, useState } from 'react';

export function useAsync<T>(operation: () => Promise<T>, enabled = true) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(enabled);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      setData(await operation());
    } catch (caught) {
      setError(caught instanceof Error ? caught : new Error('Unexpected error'));
    } finally {
      setLoading(false);
    }
  }, [operation]);

  useEffect(() => {
    if (enabled) void execute();
  }, [enabled, execute]);

  return { data, loading, error, retry: execute };
}
