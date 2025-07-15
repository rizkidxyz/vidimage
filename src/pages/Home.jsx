import { useState } from "react";
import {Link} from "react-router-dom"
import toast from "react-hot-toast";
import {linkToRoute, linkToCdn} from "../utils/linkToRoute"
import { uploadFile } from "../utils/uploader";

export default function Home() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [uploadedUrl, setUploadedUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    const sizeMB = selected.size / (1024 * 1024);
    const isImage = selected.type.startsWith("image/");
    const isVideo = selected.type.startsWith("video/");

    if (isImage && sizeMB > 50) {
      toast.error("Ukuran maksimal gambar adalah 50MB!");
      return;
    }
    if (isVideo && sizeMB > 100) {
      toast.error("Ukuran maksimal video adalah 100MB!");
      return;
    }

    setFile(selected);
    setPreviewUrl(URL.createObjectURL(selected));
    setUploadedUrl("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return toast.error("Pilih file terlebih dahulu!");

    uploadFile(
      file,
      () => setIsUploading(true),
      (routeUrl) => {
        setUploadedUrl(routeUrl);
        setIsUploading(false);
      },
      () => setIsUploading(false)
    );
  };

  return (
    <div className="mt-10">
      <form
        className="max-w-2xl w-full p-4 mx-auto"
        onSubmit={handleSubmit}
      >
      <p className="text-gray-300 text-lg leading-relaxed mb-6"><span className="text-white text-3xl font-bold">Vidimage. </span>
          Hosting <span className="text-white font-semibold">video & gambar gratis</span> tanpa login dan akses tanpa iklan dengan Vidimage. Dapatkan url CDN file langsung dan bagikan ke siapapun🚀😎
           Mendukung: <span className="font-mono text-blue-300">.mp4 .jpg .png .gif .jpeg</span>
        </p>
        <div className="mb-6">
          <label
            htmlFor="fileUpload"
            className="block text-center bg-gray-800 hover:bg-gray-700 p-4 rounded-xl border-2 border-dashed border-gray-600 hover:border-blue-400 cursor-pointer transition"
          >
          {file ? (
            <div className="space-y-2">
              <i className="fa-solid fa-repeat text-2xl"></i>
              <p>Ganti File</p>
            </div>
          ) : (
            <div className="space-y-2">
              <i className="fa-solid fa-arrow-up-from-bracket text-2xl"></i>
              <p>Klik disini untuk Pilih File</p>
            </div>
          )}
          </label>
          <input
            id="fileUpload"
            type="file"
            accept="image/*,video/*"
            onChange={handleChange}
            className="hidden"
          />
        </div>

        {previewUrl && (
          <div className="mb-6 flex justify-center">
            <div className="max-w-xs max-h-96 border border-gray-600 rounded-md overflow-hidden">
              {file?.type.startsWith("video/") ? (
                <video
                  src={previewUrl}
                  controls
                  className="w-full h-full object-contain"
                />
              ) : (
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-full h-full object-contain"
                />
              )}
            </div>
          </div>
        )}
        {!uploadedUrl && (
        
        <button
          type="submit"
          disabled={isUploading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          🚀 Upload Sekarang
        </button>
        )}
        {isUploading && (
          <div className="mt-4 text-center text-yellow-400 font-medium">
            <div className="flex items-center justify-center gap-2 animate-pulse">
              <span className="animate-spin text-lg">⌛</span> Uploading...
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Jangan tinggalkan halaman ini selama proses upload.
            </p>
          </div>
        )}
        {uploadedUrl && (
          <div className="mt-6 bg-gray-800 p-6 rounded-xl border border-gray-600 shadow-md space-y-4">
            <p className="text-sm text-green-400 font-semibold flex items-center gap-2">
              <span className="text-lg">✅</span> Link Hasil Upload:
            </p>
        
            <input
              type="text"
              value={`https://vidimage.vercel.app${linkToRoute(uploadedUrl)}`}
              readOnly
              onClick={(e) => e.target.select()}
              className="w-full bg-gray-900 text-white px-4 py-3 rounded-md border border-gray-600 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
        
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(`https://vidimage.vercel.app${linkToRoute(uploadedUrl)}`);
                toast.success("Link disalin!");
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3 rounded-lg transition shadow-md hover:shadow-lg"
            >
              Salin Link
            </button>
        
            <Link
              to={linkToRoute(uploadedUrl)}
              className="block text-center bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3 rounded-lg transition shadow-md hover:shadow-lg"
            >
              Buka Halaman
            </Link>
        
            <p className="text-sm text-gray-300 font-medium">Url Files Langsung</p>
        
            <input
              type="text"
              value={linkToCdn(uploadedUrl)}
              readOnly
              className="w-full bg-gray-900 text-white px-4 py-2 rounded-md border border-gray-600 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              onClick={(e) => e.target.select()}
            />
          </div>
        )}
      </form>
    </div>
  );
}