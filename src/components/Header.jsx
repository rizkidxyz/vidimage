// src/components/Header.jsx
import {Link} from "react-router-dom"
export default function Header() {
  return (
    <header className="bg-slate-800/70 backdrop-blur-lg text-white w-full sticky top-0 mx-auto py-4">
      <div className="max-w-xs md:max-w-2xl lg:max-w-4xl mx-auto flex justify-between">
        <Link to="/" className="text-2xl font-bold">Vidimage.</Link>
        <a href="mailto:r12ky@proton.me" className="text-3xl text-gray-100 inline-flex">
          <i className="fa-regular fa-envelope"></i>
        </a>
      </div>
    </header>
  );
}