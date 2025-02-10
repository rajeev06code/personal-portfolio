import React from "react";
import { Mail, Download, MapPin, Phone } from "lucide-react";

interface HeroProps {
  RESUME_URL: string;
}

const Hero: React.FC<HeroProps> = ({ RESUME_URL }) => {
  return (
    <header
      id="hero"
      className="relative bg-black text-white overflow-hidden min-h-screen flex items-center py-4"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600 opacity-85" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-fixed bg-center mix-blend-overlay opacity-30 animate-subtle-zoom" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_100%)]" />

      <div className="container mx-auto px-4 relative pt-20">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8 md:space-y-12">
            {/* Welcome badge */}
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium animate-fade-in-up border border-white/20">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Welcome to my portfolio
              </span>
            </div>

            {/* Name and title */}
            <div className="space-y-4 text-center">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent animate-gradient-x tracking-tight">
                Rajeev Kr. Sharma
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-200 font-light animate-fade-in-up">
                Senior Software Engineer (Frontend)
              </h2>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 animate-fade-in-up-delay">
              <a
                href="mailto:rajeev_sharma15@outlook.com"
                className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-white text-gray-900 rounded-xl hover:bg-blue-50 transition-all transform hover:-translate-y-1 hover:shadow-lg font-medium text-center inline-flex items-center justify-center gap-2"
              >
                Get in Touch
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={RESUME_URL}
                download="Rajeev_Kumar_Sharma_Resume.pdf"
                className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all transform hover:-translate-y-1 hover:shadow-lg font-medium border border-white/20 text-center inline-flex items-center justify-center gap-2"
              >
                Download Resume
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
