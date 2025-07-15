import { useParams } from "react-router-dom";
import { useState } from "react";
import ShareButton from "../components/ShareButton";
import Loader from "../utils/Loader"

export default function ImagePage() {
  const { id } = useParams();
  const [status, setStatus] = useState("loading"); // "loading", "success", "error"
  const imgUrl = `https://cdn.aceimg.com/${id}`;

  return (
    <div className="text-center">
      {status === "loading" && (
      <div className="mb-4 mx-auto">
        <Loader /> Loading Gambar..
      </div>
      )}
      {status === "error" && <p className="text-red-500 p-3 bg-red-500/30 rounded font-bold"><i className="fa-solid fa-triangle-exclamation mr-2"></i>Gambar tidak ditemukan atau Gagal dimuat.</p>}
      {status === "success" && (
      <div>
        <div className="mb-5">
          <ShareButton />
        </div>
        <img
          src={imgUrl}
          alt="Gambar"
          className="max-w-full mx-auto max-h-screen rounded-lg shadow-lg border border-gray-600 p-1"
        />
      </div>
      )}
      <img
        src={imgUrl}
        alt=""
        style={{ display: "none" }}
        onLoad={() => setStatus("success")}
        onError={() => setStatus("error")}
        className="border-2 border-gray-200"
      />
    </div>
  );
}