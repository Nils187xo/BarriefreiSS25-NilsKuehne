import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/navbar";
import ResourcesPage from "./pages/ResourcePage";
import GaleriePage from "./pages/GaleriePage";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/galerie" element={<GaleriePage />} />
      </Routes>
    </Router>
  );
}

export default App;