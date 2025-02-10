// About section component

import React from "react";
import { Award, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="group" data-aos="fade-up">
      <div className="flex items-center gap-4 mb-12">
        <div className="relative">
          <div className="absolute inset-0 bg-purple-200 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
          <div className="relative p-4 rounded-2xl bg-gradient-to-br from-purple-100 to-white text-purple-600 group-hover:scale-110 transition-transform">
            <Award className="w-8 h-8" />
          </div>
        </div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          About
        </h2>
      </div>
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-all" />
        <div className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all">
          <p className="text-gray-600 text-lg leading-relaxed">
            Experienced Senior Software Engineer specializing in frontend
            development with expertise in React.js, Next.js, and modern web
            technologies. Passionate about creating beautiful, performant, and
            accessible web applications that deliver exceptional user
            experiences.
          </p>
          <div className="mt-8 flex gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Award size={16} />
              <span>3+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Briefcase size={16} />
              <span>7+ Projects Delivered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
