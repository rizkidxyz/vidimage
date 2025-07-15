// src/components/Header.jsx
import {Link} from "react-router-dom"
export default function Header() {
  return (
    <header className="bg-slate-800/70 backdrop-blur-lg text-white flex justify-between items-center px-7 py-4 sticky top-0 md:px-20">
      <Link to="/" className="text-2xl font-bold">Vidimage.</Link>
      <a href="mailto:r12ky@proton.me" className="text-3xl text-gray-100 inline-flex">
        <i className="fa-regular fa-envelope"></i>
      </a>
    </header>
  );
}