import { QueryClient, QueryClientProvider } from "react-query";
import Router from "./shared/Router";
import GlobalStyle from "./styledComponents/Globalstyle";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
      <GlobalStyle />
      <Router />
    </QueryClientProvider>
  );
}
