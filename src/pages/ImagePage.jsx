import { useParams } from "react-router-dom";
import { useState } from "react";

export default function ImagePage() {
  const { id } = useParams();
  const [status, setStatus] = useState("loading"); // "loading", "success", "error"
  const imgUrl = `https://cdn.aceimg.com/${id}`;

  return (
    <div className="text-center">
      {status === "loading" && <p className="mb-4 mx-auto">🔍 Memeriksa gambar...</p>}
      {status === "error" && <p className="text-red-400">⚠️ Gambar tidak ditemukan atau gagal dimuat.</p>}
      {status === "success" && (
        <img
          src={imgUrl}
          alt="Gambar"
          className="max-w-full mx-auto max-h-screen rounded-lg shadow-lg"
        />
      )}

      {/* ini digunakan sebagai validator diam-diam */}
      <img
        src={imgUrl}
        alt=""
        style={{ display: "none" }}
        onLoad={() => setStatus("success")}
        onError={() => setStatus("error")}
      />
    </div>
  );
}