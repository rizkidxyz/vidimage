// src/components/Header.jsx
import {Link} from "react-router-dom"
export default function Header() {
  return (
    <header className="bg-slate-800/70 backdrop-blur-lg text-white w-full sticky top-0 mx-auto py-4">
      <div className="max-w-xs md:max-w-2xl lg:max-w-4xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold">Vidimage.</Link>
        <div className="text-3xl text-gray-100 inline-flex gap-5">
          <a href="mailto:r12ky@proton.me">
          <i className="fa-regular fa-envelope"></i>
          </a>
          <Link to="https://github.com/rizkidxyz/vidimage">
            <i class="fa-brands fa-github"></i>
          </Link>
        </div>
      </div>
    </header>
  );
}