// src/layout/Layout.jsx
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-50 font-['Nunito']">
      <Header />
      <main className="flex-auto w-full max-w-xs md:max-w-2xl lg:max-w-4xl mx-auto">{children}</main>
      <Footer />
    </div>
  );
}