import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, ToastProvider } from "@/providers";
import { AppRoutes } from "@/routes";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
        <ToastProvider />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
