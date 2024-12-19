import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './pages/App';
import Servicios from './pages/Servicios';
import Clientes from './pages/Clientes';
import Contacto from './pages/Contacto';
import Gestion from './pages/Gestion';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/gestion" element={<Gestion />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;