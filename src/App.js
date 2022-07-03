import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainRoutes from "./pages/routes";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
      <Navbar/>
      <MainRoutes/>
    </BrowserRouter>
  );
}
export default App;