import { useParams } from "react-router-dom";
import { useState } from "react";

export default function VideoPage() {
  const { id } = useParams();
  const [status, setStatus] = useState("loading");
  const videoUrl = `https://cdn.videy.co/${id}.mp4`;

  return (
    <div className="text-center">
      {status === "loading" && <p className="mb-4">🔍 Memeriksa video...</p>}
      {status === "error" && <p className="text-red-400">⚠️ Video tidak ditemukan atau gagal dimuat.</p>}
      {status === "success" && (
        <video
          src={videoUrl}
          controls
          className="max-w-full mx-auto max-h-screen rounded-lg shadow-lg"
        />
      )}
      <video
        src={videoUrl}
        style={{ display: "none" }}
        onCanPlay={() => setStatus("success")}
        onError={() => setStatus("error")}
      />
    </div>
  );
}