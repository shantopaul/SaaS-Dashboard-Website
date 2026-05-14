import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/providers";
import { AppRoutes } from "@/routes";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
