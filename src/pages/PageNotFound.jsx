import {Link} from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="py-10 text-gray-300 flex flex-col justify-center items-center text-center">
      <h1 className="text-9xl text-gray-500 font-extrabold">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Halaman Tidak Ditemukan</h2>
      <p className="text-base mt-2 text-gray-500">
        Maaf, halaman yang Anda cari tidak ada.
      </p>
      <Link className="mt-6 py-3 px-6 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg text-lg font-semibold" to="/">
        <i className="fa-solid fa-house"></i> Kembali ke Halaman Utama
      </Link>
    </div>
  );
}