import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Pessoas from "./components/pages/Pessoas/Pessoas";
import Departamentos from "./components/pages/Departamentos/Departamentos";
import Dispositivos from "./components/pages/Dispositivos/Dispositivos";
import Settings from "./components/pages/Settings/Settings";
import Container from "./components/layout/Container/Container";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import Cadastro from "./components/pages/Cadastro/Cadastro";

function AppContent() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/login" && location.pathname !== "/cadastro" && (
        <Navbar />
      )}

      <div className="content">
        <Container customClass="min-height">
          <Routes>
            <Route path="/pessoas" element={<Pessoas />} />
            <Route path="/" element={<Home />} />

            <Route path="/departamentos" element={<Departamentos />} />
            <Route path="/dispositivos" element={<Dispositivos />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </Container>
      </div>

      {/*location.pathname !== "/login" && <Footer />*/}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
