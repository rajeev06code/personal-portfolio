import { Briefcase } from "lucide-react";

const Skills = () => {
  return (
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
          { name: "Next.js", level: "Intermediate" },
          { name: "TypeScript", level: "Intermediate" },
          { name: "JavaScript (ES6+)", level: "Expert" },
          { name: "Redux Toolkit", level: "Advanced" },
          { name: "Tailwind CSS", level: "Advanced" },
          { name: "Material UI", level: "Advanced" },
          { name: "Shadcn UI", level: "Advanced" },
          { name: "REST APIs", level: "Intermediate" },
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
                <span className="text-gray-800 font-medium">{skill.name}</span>
                <span className="text-xs text-purple-600">{skill.level}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
