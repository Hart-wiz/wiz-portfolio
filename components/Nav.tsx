"use client";

import React, { useState } from "react";
import { Menu, X, Code2, ArrowUpRight } from "lucide-react";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <div>
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <Code2 size={24} className="text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900 hidden sm:inline">
                Hart Wis
              </span>
            </div>

            <div className="hidden md:flex gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => setActiveNav(link.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeNav === link.id
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="hidden md:block">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-blue-600 to-cyan-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:scale-105"
              >
                Get In Touch <ArrowUpRight size={16} />
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-600 hover:text-gray-900"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 border-t border-gray-100">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setActiveNav(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900 text-sm rounded-lg hover:bg-gray-100"
                >
                  {link.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
