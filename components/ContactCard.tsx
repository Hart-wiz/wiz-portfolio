"uses client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactCard() {
  return (
    <div>
      <section
        className="py-20 px-4 bg-linear-to-br from-blue-600 to-cyan-600 text-white"
        id="contact"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="md:text-4xl text-3xl font-bold mb-6 ">
            Ready to Work Together?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            I'm always interested in discussing new projects, opportunities, and
            collaborations.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a
              href="mailto:alex@example.com"
              className="max-md:text-xs inline-flex items-center gap-2 md:px-6 px-2  md:py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              <Mail size={20} /> Send Email
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              <Github size={20} /> GitHub
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
