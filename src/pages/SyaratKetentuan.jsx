import {Link} from "react-router-dom";

export default function SyaratKetentuan() {
  return (
    <div className="py-8 text-gray-300 flex flex-col">
      <span className="text-blue-400 font-bold mb-4 text-base">
        <Link to="/">Home</Link> / Syarat & Ketentuan
      </span>
      <h1 className="text-5xl text-gray-400 font-extrabold">Syarat dan Ketentuan Layanan</h1>
      <p className="my-4">Selamat datang di <Link to="/" className="text-blue-400 italic underline">vidimage.vercel.app</Link> Dengan menggunakan layanan ini, Anda setuju untuk mematuhi semua syarat dan ketentuan di bawah ini. Mohon baca dan pahami dengan seksama.</p>

      {/* --- */}
      <h2 className="text-3xl text-gray-400 font-bold mt-6 mb-2">1. Sifat Konten yang Diunggah</h2>
      <ul className="list-decimal ml-6 italic text-gray-400">
        <li>Semua file yang Anda unggah bersifat publik dan dapat diakses oleh siapa saja.</li>
        <li>Setelah diunggah, file tidak dapat dihapus.</li>
        <li>Kami tidak menyarankan Anda mengunggah media (video, gambar, atau lainnya) yang mengandung data pribadi, baik milik Anda maupun orang lain.</li>
      </ul>
      
      {/* --- */}
      <h2 className="text-3xl text-gray-400 font-bold mt-6 mb-2">2. Batasan Tanggung Jawab</h2>
      <ul className="list-decimal ml-6 italic text-gray-400">
        <li>Anda sepenuhnya bertanggung jawab atas konten yang Anda unggah. Mohon gunakan layanan ini dengan bijak.</li>
        <li>Kami tidak bertanggung jawab atas segala konsekuensi, kerugian, atau masalah hukum yang timbul dari penggunaan layanan ini atau konten yang Anda unggah.</li>
      </ul>
      
      {/* --- */}
      <h2 className="text-3xl text-gray-400 font-bold mt-6 mb-2">3. Penjelasan Layanan Pihak Ketiga</h2>
      <p className="my-4">
        Layanan kami, <Link to="/" className="text-blue-400 italic underline">vidimage.vercel.app</Link>, adalah layanan perantara (pihak ketiga). Kami tidak memiliki server atau infrastruktur penyimpanan (seperti cloud maupun CDN) sendiri.
      </p>
      <p className="my-4">
        Kami hanya meneruskan unggahan Anda ke layanan utama berikut:
        <ul className="list-disc ml-6 mt-2">
            <li>Untuk video: <Link to="https://videy.co" className="text-blue-400 italic underline">videy.co</Link></li>
            <li>Untuk gambar: <Link to="https://aceimg.com" className="text-blue-400 italic underline">aceimg.com</Link></li>
        </ul>
      </p>
      <p className="my-4">
        Setelah media Anda berhasil diunggah ke server layanan utama, kami akan mengambil tautannya dan menampilkannya kembali di halaman kami untuk kemudahan akses dan tanpa iklan. Jika Anda seorang pengembang, Anda bisa memeriksa aktivitas network (fetch XHR) untuk melihat proses ini.
      </p>

      {/* --- */}
      <h2 className="text-3xl text-gray-400 font-bold mt-6 mb-2">4. Kesimpulan</h2>
      <p className="my-4">
        Singkatnya, layanan ini adalah jembatan untuk memudahkan anda dalam mengunggah media ke beberapa platform lainnya hanya melalui satu layanan ini, dan pastinya meningkatkan flesksibilitas pengguna. Semua media yang anda upload bersifat publik, tidak bisa dihapus, dan anda tetap bertanggung jawab atas apa pun yang anda bagikan di sini.
      </p>
    </div>
  );
}