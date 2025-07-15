// src/components/Header.jsx
import {Link} from "react-router-dom"
export default function Header() {
  return (
    <header className="bg-slate-800/70 backdrop-blur-lg text-white p-4 sticky top-0">
      <Link to="/" className="text-2xl font-bold">Vidimage.</Link>
    </header>
  );
}