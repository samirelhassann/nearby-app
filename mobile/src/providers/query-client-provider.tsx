import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface QueryClientProviderProps {
  children: React.ReactNode;
}

export default function CustomQueryClientProvider({
  children,
}: QueryClientProviderProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
