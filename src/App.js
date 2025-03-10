import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Pessoas from './components/pages/Pessoas/Pessoas';
import Departamentos from './components/pages/Departamentos/Departamentos';
import Dispositivos from './components/pages/Dispositivos/Dispositivos';
import Settings from './components/pages/Settings/Settings';
import Container from './components/layout/Container/Container';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import Home from './components/pages/Home/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <div className="content">
          <Container customClass="min-height">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pessoas" element={<Pessoas />} />
              <Route path="/departamentos" element={<Departamentos />} />
              <Route path="/dispositivos" element={<Dispositivos />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Container>
        </div>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
