import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Award,
  Briefcase,
  GraduationCap,
  ExternalLink,
  Menu,
  X,
  Download,
} from "lucide-react";
import image from "./assets/WhatsApp Image 2025-02-10 at 11.41.37 PM.jpeg";

import RESUME_URL from "./assets/Rajeev kr. sharma resume.pdf"; // Place your resume PDF in the public folder

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false); // Close mobile menu if open
    const element = document.getElementById(sectionId);
    const navHeight = 80; // Height of your navbar
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Name */}
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            >
              RKS
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                    isScrolled ? "text-gray-800" : "text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="mailto:rajeev_sharma15@outlook.com"
                className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors inline-flex items-center gap-2"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X
                  className={`w-6 h-6 ${
                    isScrolled ? "text-gray-800" : "text-white"
                  }`}
                />
              ) : (
                <Menu
                  className={`w-6 h-6 ${
                    isScrolled ? "text-gray-800" : "text-white"
                  }`}
                />
              )}
            </button>
          </div>

          {/* Mobile Drawer Navigation */}
          <div
            className={`fixed inset-y-0 right-0 w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } md:hidden z-10`}
          >
            {/* Drawer Content */}
            <div className="h-full flex flex-col">
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-4 border-b"></div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto py-4">
                <div className="space-y-2 px-4">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left px-4 py-3 text-gray-800 hover:bg-purple-50 rounded-lg transition-colors font-medium"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Call to Action */}
                <div className="px-4 mt-6">
                  <a
                    href="mailto:rajeev_sharma15@outlook.com"
                    className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity font-medium inline-flex items-center justify-center gap-2"
                  >
                    Hire Me
                  </a>
                </div>

                {/* Social Links */}
                <div className="mt-8 px-8">
                  <p className="text-sm text-gray-500 mb-4">Connect with me</p>
                  <div className="flex gap-4">
                    {[
                      {
                        icon: Github,
                        href: "https://github.com/rajeev06code",
                        label: "GitHub",
                      },
                      {
                        icon: Linkedin,
                        href: "https://www.linkedin.com/in/rajeev-kumar-sharma-558500195/",
                        label: "LinkedIn",
                      },
                      {
                        icon: Mail,
                        href: "mailto:rajeev_sharma15@outlook.com",
                        label: "Email",
                      },
                    ].map(({ icon: Icon, href, label }) => (
                      <a
                        key={href}
                        href={href}
                        target="_blank"
                        aria-label={label}
                        className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-colors"
                      >
                        <Icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Overlay */}
          <div
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
              isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
      </nav>

      {/* Hero Section */}
      <header
        id="hero"
        className="relative bg-black text-white overflow-hidden min-h-screen flex items-center py-4 px-4 sm:px-6"
      >
        {/* Enhanced gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600 opacity-85" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-fixed bg-center mix-blend-overlay opacity-30 animate-subtle-zoom" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_100%)]" />

        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto relative pt-20">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8 md:space-y-12">
              <div className="space-y-6 md:space-y-8 text-center">
                {/* Welcome badge */}
                <div className="flex justify-center">
                  <span className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium animate-fade-in-up border border-white/20">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Welcome to my portfolio
                  </span>
                </div>

                {/* Name and title */}
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent animate-gradient-x tracking-tight px-4">
                    Rajeev Kr. Sharma
                  </h1>

                  <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-200 font-light animate-fade-in-up max-w-2xl mx-auto leading-relaxed px-4">
                    Senior Software Engineer specializing in creating beautiful,
                    functional web experiences
                  </h2>
                </div>

                {/* Contact info */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-sm backdrop-blur-sm bg-white/10 p-4 sm:p-6 md:p-8 rounded-2xl animate-fade-in-up-delay border border-white/20 mx-4">
                  {[
                    {
                      icon: Phone,
                      text: "+91 7461824651",
                      href: "tel:+917461824651",
                    },
                    {
                      icon: Mail,
                      text: "rajeev_sharma15@outlook.com",
                      href: "mailto:rajeev_sharma15@outlook.com",
                    },
                    {
                      icon: MapPin,
                      text: "Bengaluru, Karnataka",
                    },
                  ].map((item) => (
                    <div
                      key={item.text}
                      className="flex items-center gap-3 group"
                    >
                      <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-all">
                        <item.icon
                          size={18}
                          className="group-hover:scale-110 transition-transform"
                        />
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="hover:text-blue-200 transition-colors"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span>{item.text}</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* CTA buttons with updated functionality */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-8 animate-fade-in-up-delay px-4">
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
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto space-y-24 sm:space-y-32">
          {/* About Section */}
          <section id="about" className="group" data-aos="fade-up">
            <div className="flex items-center gap-4 mb-8 sm:mb-12">
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
                  development with expertise in React.js, Next.js, and modern
                  web technologies. Passionate about creating beautiful,
                  performant, and accessible web applications that deliver
                  exceptional user experiences.
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

          {/* Skills Section */}
          <section id="skills" className="group" data-aos="fade-up">
            <div className="flex items-center gap-4 mb-12">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-200 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative p-4 rounded-2xl bg-gradient-to-br from-purple-100 to-white text-purple-600 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-8 h-8" />
                </div>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Skills
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "React.js", level: "Expert" },
                { name: "Next.js", level: "Advanced" },
                { name: "TypeScript", level: "Expert" },
                { name: "JavaScript (ES6+)", level: "Expert" },
                { name: "Redux Toolkit", level: "Advanced" },
                { name: "Tailwind CSS", level: "Expert" },
                { name: "Material UI", level: "Advanced" },
                { name: "Shadcn UI", level: "Advanced" },
                { name: "REST APIs", level: "Expert" },
                { name: "Git", level: "Advanced" },
                { name: "Node.js", level: "Intermediate" },
                { name: "MongoDB", level: "Intermediate" },
              ].map((skill, index) => (
                <div
                  key={skill.name}
                  className="group/skill relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-25 group-hover/skill:opacity-75 transition-all" />
                  <div className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                    <div className="flex flex-col gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-600 group-hover/skill:scale-125 transition-transform" />
                      <span className="text-gray-800 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-xs text-purple-600">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="group" data-aos="fade-up">
            <div className="flex items-center gap-4 mb-12">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-200 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative p-4 rounded-2xl bg-gradient-to-br from-purple-100 to-white text-purple-600 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-8 h-8" />
                </div>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Experience
              </h2>
            </div>

            <div className="relative space-y-8 sm:space-y-12">
              <div className="absolute left-8 top-8 bottom-0 w-px bg-gradient-to-b from-purple-600 to-transparent" />

              {/* Trip Store Holidays */}
              <div className="relative group/exp">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl opacity-0 group-hover/exp:opacity-100 transition-all" />
                <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 p-3 sm:p-4 text-white">
                    <Briefcase className="w-full h-full" />
                  </div>
                  <div className="flex-grow space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:items-center">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                          Senior Software Engineer
                        </h3>
                        <p className="text-purple-600 font-medium">
                          Trip Store Holidays, Mumbai
                        </p>
                      </div>
                      <span className="px-3 py-1 sm:px-4 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white whitespace-nowrap">
                        May 2024 - Present
                      </span>
                    </div>
                    <ul className="space-y-3 text-sm sm:text-base">
                      {[
                        "Implemented new features and enhanced user experience for tripstoreholidays.com",
                        "Redesigned homepage with modern UI and integrated new APIs",
                        "Developed self-service booking system and integrated Razorpay payment gateway",
                        "Created advanced filtering system for tours and destinations",
                      ].map((point, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 group/point"
                        >
                          <div className="w-2 h-2 mt-2 rounded-full bg-purple-600 group-hover/point:scale-125 transition-transform" />
                          <span className="text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Faarms Global Tech Ventures */}
              <div className="relative group/exp">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl opacity-0 group-hover/exp:opacity-100 transition-all" />
                <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 p-3 sm:p-4 text-white">
                    <Briefcase className="w-full h-full" />
                  </div>
                  <div className="flex-grow space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:items-center">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                          Software Development Engineer
                        </h3>
                        <p className="text-purple-600">
                          Faarms Global Tech Ventures Pvt Ltd, Bengaluru
                        </p>
                      </div>
                      <span className="px-3 py-1 sm:px-4 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white whitespace-nowrap">
                        March 2022 - April 2024
                      </span>
                    </div>
                    <div className="space-y-6">
                      {/* E-commerce Platform */}
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-gray-800">
                          E-commerce Platform for Farmers
                        </h4>
                        <ul className="space-y-3">
                          {[
                            "Spearheaded the development of a robust e-commerce platform aimed at empowering farmers by providing access to agricultural products and tools",
                            "Created intuitive and mobile-responsive UIs to ensure ease of use for farmers, considering accessibility and simplicity as core design principles",
                            "Integrated APIs for dynamic product listings, search functionality, and secure payment gateways",
                          ].map((point, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-3 group/point"
                            >
                              <div className="w-2 h-2 mt-2 rounded-full bg-purple-600 group-hover/point:scale-125 transition-transform" />
                              <span className="text-gray-600">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Admin Panel */}
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-gray-800">
                          Faarms Admin Panel
                        </h4>
                        <ul className="space-y-3">
                          {[
                            "Designed and developed the frontend UI for the Faarms Admin Panel to facilitate internal operations, inventory management, and order tracking",
                            "Built a highly modular and scalable UI using React.js, ensuring maintainability and easy updates for future requirements",
                            "Enhanced the admin panel's usability by implementing features like advanced search, data visualization, and bulk actions",
                          ].map((point, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-3 group/point"
                            >
                              <div className="w-2 h-2 mt-2 rounded-full bg-purple-600 group-hover/point:scale-125 transition-transform" />
                              <span className="text-gray-600">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Logistics Platform */}
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-gray-800">
                          Frontend Development for Logistics Platform (Leap
                          Supply)
                        </h4>
                        <ul className="space-y-3">
                          {[
                            "Developed and deployed the frontend UI for the logistics platform using React.js to create a seamless user experience",
                            "Built a responsive logistics platform with features like real-time tracking and route optimization",
                            "Collaborated closely with backend teams to ensure smooth integration and synchronization of logistics data",
                            "Implemented BBPS Features for mobile applications, enabling secure utility bill payments",
                          ].map((point, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-3 group/point"
                            >
                              <div className="w-2 h-2 mt-2 rounded-full bg-purple-600 group-hover/point:scale-125 transition-transform" />
                              <span className="text-gray-600">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Efaarms Solutions */}
              <div className="relative group/exp">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl opacity-0 group-hover/exp:opacity-100 transition-all" />
                <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 p-3 sm:p-4 text-white">
                    <Briefcase className="w-full h-full" />
                  </div>
                  <div className="flex-grow space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:items-center">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                          Software Development Engineer
                        </h3>
                        <p className="text-purple-600">
                          Efaarms Solutions Pvt Ltd., Bengaluru
                        </p>
                      </div>
                      <span className="px-3 py-1 sm:px-4 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white whitespace-nowrap">
                        Dec 2021 - March 2022
                      </span>
                    </div>
                    <ul className="space-y-3 text-sm sm:text-base">
                      {[
                        "Built the Seller Web App frontend using React.js, enabling sellers to manage their product listings and track orders",
                        "Delivered a user-friendly interface with intuitive navigation and efficient workflows",
                        "Integrated REST APIs for real-time data updates and improved performance through optimized React components",
                      ].map((point, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 group/point"
                        >
                          <div className="w-2 h-2 mt-2 rounded-full bg-purple-600 group-hover/point:scale-125 transition-transform" />
                          <span className="text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="contact" className="group" data-aos="fade-up">
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
                      Uttar Pradesh Technical University, Lucknow
                    </p>
                  </div>
                  <span className="px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                    2018 - 2022
                  </span>
                </div>
                <p className="mt-4 text-gray-600">
                  Computer Science and Engineering
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
              {/* Connect Section */}
              <div className="text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                  Let's Connect
                </h3>
                <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
                  I'm always interested in hearing about new opportunities and
                  exciting projects.
                </p>
                <a
                  href="mailto:rajeev_sharma15@outlook.com"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors w-full md:w-auto"
                >
                  Get in Touch
                  <ExternalLink size={16} className="sm:size-18" />
                </a>
              </div>

              {/* Social Links */}
              <div className="text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                  Follow Me
                </h3>
                <div className="flex justify-center md:justify-start gap-4 sm:gap-6">
                  {[
                    {
                      icon: Github,
                      href: "https://github.com/rajeev06code",
                      label: "GitHub",
                    },
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com/in/rajeev-kumar-sharma-558500195/",
                      label: "LinkedIn",
                    },
                    {
                      icon: Mail,
                      href: "mailto:rajeev_sharma15@outlook.com",
                      label: "Email",
                    },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      aria-label={label}
                      className="p-3 rounded-xl bg-gray-800 text-gray-400 hover:bg-purple-600 hover:text-white transition-all transform hover:-translate-y-1"
                    >
                      <Icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center pt-6 sm:pt-8 border-t border-gray-800">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Rajeev Kr. Sharma. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
