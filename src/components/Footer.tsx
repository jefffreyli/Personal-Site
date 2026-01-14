"use client";

import React from "react";

const Footer = () => {
  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="pb-0 lg:pb-5 bg-gray-100 flex flex-col items-center">
      <button
        aria-label="Back to top"
        onClick={scrollToTop}
        className="mb-2 text-gray-400 hover:text-gray-600 text-2xl focus:outline-none transition-colors"
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        ▲
      </button>
      <div className="text-gray-400 text-sm text-center">
        © 2026 Jeffrey Li. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
