import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import TuristAsosiyP from "./pages/turist/Asosiy";
import PageCenter from "./PageCenter";
import YordamchiAsosiyP from "./pages/yordamchi/YordamchiAsosiyP";
import ReklamAsosiyP from "./pages/reklama/ReklamAsosiyP";
import XaritaP from "./pages/turist/pages/xaritaP";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageCenter />} />
        <Route path="/turist" element={<TuristAsosiyP />} />
        <Route path="/yordamchi" element={<YordamchiAsosiyP />} />
        <Route path="/reklama" element={<ReklamAsosiyP />} />
        <Route path="/turist/xarita" element={<XaritaP />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
