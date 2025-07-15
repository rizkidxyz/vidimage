import React from 'react';
import { toast } from 'react-hot-toast';

const ShareButton = () => {
  const url = window.location.href;

  const handleShare = () => {
    navigator.clipboard.writeText(url)
      .then(() => {
        toast.success('URL disalin ke clipboard!');
      })
      .catch(() => {
        toast.error('Gagal menyalin URL.');
      });
  };

  return (
    <div className="space-y-1.5">
      <div className="text-sm text-left font-medium text-gray-300">Bagikan ke :</div>
      <div className="flex items-center gap-3 text-3xl">
        <a
          href={`https://wa.me/?text=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300"
          title="Bagikan ke WhatsApp"
        >
          <i className="fa-brands fa-whatsapp" />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300"
          title="Bagikan ke Facebook"
        >
          <i className="fa-brands fa-facebook" />
        </a>
        <button
          onClick={handleShare}
          className="px-2 py-1 flex items-center gap-1.5 bg-gray-700 text-sm rounded"
        >
          <i className="fa-solid fa-copy text-lg" /> Salin URL
        </button>
      </div>
    </div>
  );
};

export default ShareButton;