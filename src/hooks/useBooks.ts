// React Query
import { useQuery } from '@tanstack/react-query';

// Types
import { Book } from '@/types/models';

// API
import { apiClient } from '@/services/api';

// Constants
import { QUERY_KEYS } from '@/constants/queryKeys';
import { API_ROUTES } from '@/constants/endpoint';

export const useBooks = () => {
  const { data, error, isLoading, isError, refetch, ...rest } = useQuery<
    Book[],
    Error
  >({
    queryKey: [QUERY_KEYS.BOOKS],
    queryFn: async () => {
      const response = await apiClient.get<Book[]>(API_ROUTES.BOOKS);
      return response.data;
    },
    retry: 2,
  });

  return {
    ...rest,
    data: data || [],
    error: error?.message || '',
    isLoading,
    isError,
    refetch,
  };
};
