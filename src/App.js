import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./pages/routes";

function App() {
  return (
    <BrowserRouter>
      <MainRoutes/>
    </BrowserRouter>
  );
}
export default App;