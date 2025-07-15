import React from 'react';

const Loader = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block"
  >
    <style>{`
      .spinner_bar {
        animation: spinner_wave 0.9s linear infinite;
        animation-delay: -0.9s;
      }
      .delay1 { animation-delay: -0.8s }
      .delay2 { animation-delay: -0.7s }
      .delay3 { animation-delay: -0.6s }
      .delay4 { animation-delay: -0.5s }

      @keyframes spinner_wave {
        0%, 66.66% {
          animation-timing-function: cubic-bezier(0.36, 0.61, 0.3, 0.98);
          y: 6px;
          height: 12px;
        }
        33.33% {
          animation-timing-function: cubic-bezier(0.36, 0.61, 0.3, 0.98);
          y: 1px;
          height: 22px;
        }
      }
    `}</style>

    <rect className="spinner_bar" x="1" y="6" width="2.8" height="12" />
    <rect className="spinner_bar delay1" x="5.8" y="6" width="2.8" height="12" />
    <rect className="spinner_bar delay2" x="10.6" y="6" width="2.8" height="12" />
    <rect className="spinner_bar delay3" x="15.4" y="6" width="2.8" height="12" />
    <rect className="spinner_bar delay4" x="20.2" y="6" width="2.8" height="12" />
  </svg>
);

export default Loader;