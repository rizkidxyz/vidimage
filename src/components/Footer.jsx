// src/components/Footer.jsx
import {Link} from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center py-3 space-y-1.5 border-t border-gray-400/40">
      <p className="text-gray-400 text-sm">
        © {year} <Link to="/" className="font-semibold text-white">Vidimage</Link> All rights reserved.
      </p>
    </footer>
  );
}