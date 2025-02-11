import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import RESUME_URL from "./assets/Rajeev kr. sharma resume.pdf";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

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
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    const navHeight = 80;
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
                className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors"
              >
                Hire Me
              </a>
            </div>

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

          <div
            className={`fixed inset-y-0 right-0 w-[280px] h-[100vh] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } md:hidden z-10`}
          >
            {/* Drawer Content */}
            <div className="h-full flex flex-col">
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-4 border-b"></div>

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

                <div className="px-4 mt-6">
                  <a
                    href="mailto:rajeev_sharma15@outlook.com"
                    className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity font-medium inline-flex items-center justify-center gap-2"
                  >
                    Hire Me
                  </a>
                </div>

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

          <div
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
              isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
      </nav>

      <Hero RESUME_URL={RESUME_URL} />

      <main className="container mx-auto px-4 py-16 space-y-32">
        <About />
        <Skills />
        <Experience />
        <Education />
      </main>

      <Footer />
    </div>
  );
}

export default App;
