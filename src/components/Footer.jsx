// src/components/Footer.jsx
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center py-3 space-y-1.5">
      Powered By
      <div className="flex items-center justify-center gap-2 flex-wrap px-3 mb-10">
        <a
          href="https://chat.openai.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-green-400 transition"
        >
          <img
            src="https://chat.openai.com/favicon.ico"
            alt="ChatGPT"
            className="w-10 h-10"
          />
          ChatGPT
        </a>
        <a
          href="https://videy.co"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-400 transition"
        >
          <img
            src="https://videy.co/favicon.ico"
            alt="Videy"
            className="w-10 h-10 rounded"
          />
          Videy
        </a>
        <a
          href="https://aceimg.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-pink-400 transition"
        >
          <img
            src="https://videy.co/favicon.ico"
            alt="Aceimg"
            className="w-10 h-10 rounded rotate-180"
          />
          Aceimg
        </a>
      </div>

      <p className="text-gray-400 text-xs sm:text-sm">
        © {year} <span className="font-semibold text-white">Vidimage</span>. All rights reserved.
      </p>
    </footer>
  );
}