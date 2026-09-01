import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import PubPage from "@/pages/pub";
import NewsPage from "@/pages/news";
import EducationPage from "@/pages/education";
import HonorPage from "@/pages/honor";
import ServicesPage from "@/pages/services";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<PubPage />} path="/pub" />
      <Route element={<NewsPage />} path="/news" />
      <Route element={<EducationPage />} path="/education" />
      <Route element={<HonorPage />} path="/honor" />
      <Route element={<ServicesPage />} path="/services" />
    </Routes>
  );
}

export default App;
