import { QueryClient, QueryClientProvider } from "react-query";
import CustomModal from "./componets/customModal/CustomModal";
import Router from "./shared/Router";
import GlobalStyle from "./styledComponents/Globalstyle";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
      <GlobalStyle />
      <Router />
      <CustomModal />
    </QueryClientProvider>
  );
}
