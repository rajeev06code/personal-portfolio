// Education section component

import React from "react";
import { GraduationCap, ExternalLink } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="group" data-aos="fade-up">
      <div className="flex items-center gap-4 mb-12">
        <div className="relative">
          <div className="absolute inset-0 bg-purple-200 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
          <div className="relative p-4 rounded-2xl bg-gradient-to-br from-purple-100 to-white text-purple-600 group-hover:scale-110 transition-transform">
            <GraduationCap className="w-8 h-8" />
          </div>
        </div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          Education
        </h2>
      </div>
      <div className="relative group/edu">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover/edu:opacity-40 transition-all" />
        <div className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Bachelor of Technology
              </h3>
              <p className="text-purple-600">
                Dr. APJ Abdul Kalam University, Lucknow
              </p>
              <a
                href="https://www.narainagroup.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-purple-600 transition-colors mt-2"
              >
                Naraina Group of Institutions
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
          <p className="mt-4 text-gray-600">
            Electrical and Electronics Engineering
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
