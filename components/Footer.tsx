"use client";

import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="border-t border-gray-200 py-8 px-4 text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Hart.</p>
      </footer>
    </div>
  );
}
