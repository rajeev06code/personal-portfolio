import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-400 mb-8">
                I'm always interested in hearing about new opportunities and
                exciting projects.
              </p>
              <a
                href="mailto:rajeev_sharma15@outlook.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Get in Touch
                <ExternalLink size={18} />
              </a>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex gap-6">
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
          <div className="text-center pt-8 border-t border-gray-800">
            <p className="text-gray-500">
              © {new Date().getFullYear()} Rajeev Kr. Sharma. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
