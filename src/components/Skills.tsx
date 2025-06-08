
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = [
    { name: "Flutter", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "Dart", level: 95, color: "from-blue-600 to-blue-800" },
    { name: "Node.js", level: 88, color: "from-green-500 to-green-700" },
    { name: "MongoDB", level: 85, color: "from-green-600 to-green-800" },
    { name: "Firebase", level: 90, color: "from-orange-500 to-red-500" },
    { name: "JavaScript", level: 85, color: "from-yellow-400 to-orange-500" },
    { name: "TypeScript", level: 80, color: "from-blue-500 to-blue-700" },
    { name: "REST APIs", level: 88, color: "from-purple-500 to-pink-500" },
  ];

  const tools = [
    "VS Code", "Android Studio", "Xcode", "Git", "Docker", 
    "Postman", "Figma", "Jira", "Slack", "Firebase Console"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building exceptional mobile applications and backend systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Core Technologies</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">{skill.name}</span>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out hover:scale-105`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <Badge 
                  key={tool} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm font-medium bg-white border border-gray-200 text-gray-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tool}
                </Badge>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Current Focus</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Advanced Flutter animations and custom widgets
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Microservices architecture with Node.js
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Real-time applications with Firebase
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
