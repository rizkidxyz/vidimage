import { useParams } from "react-router-dom";
import { useState } from "react";
import ShareButton from "../components/ShareButton";
import Loader from "../utils/Loader";

export default function VideoPage() {
  const { id } = useParams();
  const [status, setStatus] = useState("loading");
  const videoUrl = `https://cdn.videy.co/${id}.mp4`;

  return (
    <div className="py-10">
      {status === "loading" && (
      <div className="text-center">
        <Loader /> Loading Video...
      </div>
      )}
      {status === "error" && <p className="text-red-500 p-3 bg-red-500/30 rounded font-bold"><i className="fa-solid fa-triangle-exclamation mr-2"></i>Video tidak ditemukan atau Gagal dimuat.</p>}
      {status === "success" && (
        <div>
          <div className="mb-5">
            <ShareButton />
          </div>
          <video
            src={videoUrl}
            controls
            className="w-full h-full rounded-lg shadow-lg p-1 border border-gray-600"
          />
        </div>
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