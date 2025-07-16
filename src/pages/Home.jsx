import { useState } from "react";
import {Link} from "react-router-dom"
import toast from "react-hot-toast";
import {linkToRoute, linkToCdn} from "../utils/linkToRoute"
import { uploadFile } from "../utils/uploader";
import Loader from "../utils/Loader"

export default function Home() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [uploadedUrl, setUploadedUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (e) => {
    const selected = e.target.files[0];
    e.target.value = "";
  
    if (!selected) return;
    const sizeMB = selected.size / (1024 * 1024);
    const isImage = selected.type.startsWith("image/");
    const isVideo = selected.type.startsWith("video/");
  
    if (isImage && sizeMB > 50) {
      toast.error("Ukuran maksimal gambar adalah 50MB!", { duration: 3000 });
      return;
    }
    if (isVideo && sizeMB > 100) {
      toast.error("Ukuran maksimal video adalah 100MB!", { duration: 3000 });
      return;
    }
  
    setFile(selected);
    setPreviewUrl(URL.createObjectURL(selected));
    setUploadedUrl("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return toast.error("Pilih file terlebih dahulu!",{duration:2000});

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
      <p className="text-gray-300 text-lg leading-relaxed mb-6"><span className="text-white text-3xl font-bold">Vidimage </span>
          Hosting atau Upload <span className="text-white font-semibold">video & gambar</span> secara gratis, tanpa login akun, serta akses tanpa iklan. Upload dan Bagikan ke siapapun sekarang juga! 🚀😎
        </p>
        {!isUploading && (
          <div className="mb-6">
            <label
              htmlFor="fileUpload"
              className="block text-center bg-gray-800 hover:bg-gray-700 p-4 rounded-md border-2 border-dashed border-gray-600 hover:border-blue-400 cursor-pointer transition"
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
                <p className="text-xs font-medium italic text-gray-500">
                  .mp4 max(100mb) .png .jpg .jpeg .gif
                </p>
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
        )}
        
        {previewUrl && (
          <div className="mb-6">
            <div className="w-full h-auto border border-gray-600 rounded-md overflow-hidden p-1">
              {file?.type.startsWith("video/") ? (
                <video
                  src={previewUrl}
                  controls
                  className="w-full h-full object-contain rounded"
                />
              ) : (
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-full h-full object-contain rounded"
                />
              )}
            </div>
          </div>
        )}
        {!uploadedUrl && !isUploading && (
        
        <button
          type="submit"
          disabled={isUploading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ✨ Upload Sekarang
        </button>
        )}
        {isUploading && (
          <div className="mt-4 text-center text-yellow-400 font-medium">
            <div className="flex items-center justify-center gap-2 font-semibold">
              <Loader size={20} />
              Uploading...
            </div>
            <p className="text-base text-gray-400 mt-1">
              <span className="text-red-500 font-bold">Jangan</span> tinggalkan halaman ini selama proses upload.
            </p>
          </div>
        )}
        {uploadedUrl && (
          <div className="mt-6 bg-gray-800 p-4 rounded-md border border-gray-600 shadow-md space-y-4">
            <p className="text-sm text-green-400 font-semibold flex items-center gap-2">
              <i className="fa-solid fa-circle-check text-lg" /> Upload Berhasil
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
                toast.success("Url disalin!");
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3 rounded-lg transition shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-copy" /> Salin Url
            </button>
        
            <Link
              to={linkToRoute(uploadedUrl)}
              className="block text-center bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3 rounded-lg transition shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-arrow-up-right-from-square" /> Buka Halaman
            </Link>
        
            <p className="text-sm text-gray-300 font-medium">URL Files CDN Langsung</p>
            <div className="flex gap-2">
              <input
                type="text"
                value={linkToCdn(uploadedUrl)}
                readOnly
                onClick={(e) => e.target.select()}
                className="w-full bg-gray-900 text-white px-4 py-3 rounded-md border border-gray-600 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(linkToCdn(uploadedUrl));
                  toast.success("Berhasil Salin URL file CDN!");
                }}
                className="bg-gray-700 hover:bg-gray-600 active:bg-gray-500 transition rounded w-14 flex items-center justify-center"
                title="Salin URL File"
              >
                <i className="fa-solid fa-copy text-lg text-white" />
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}