// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import ImagePage from "./pages/ImagePage";
import VideoPage from "./pages/VideoPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/i/:id" element={<ImagePage />} />
          <Route path="/v/:id" element={<VideoPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">404 - Halaman Tidak Ditemukan</h1>
    </div>
  );
}

export default App;