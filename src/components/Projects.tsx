import { Award, Lightbulb, Trophy, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  period: string;
  description: string;
  icon: any;
  color: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'OST Program Finalist',
      period: '06/2023 - 02/2024',
      description: 'Selected as a finalist in the Open Startup (OST) Program, an international entrepreneurship and innovation initiative. Collaborated with Columbia Engineering, Columbia Business School, U.S. Embassy Tunis, AfricInvest Group, and AfricaGrow.',
      icon: Award,
      color: 'from-blue-600 to-blue-700'
    },
    {
      title: 'Global Information Management Projects',
      period: '06/2024 - 02/2025',
      description: 'Managed 5 IM projects for AIESEC International including AI chatbot development, membership platform, data analytics systems, automated global contact list, and auditing platform for policy compliance.',
      icon: Lightbulb,
      color: 'from-emerald-600 to-emerald-700'
    },
    {
      title: 'Jellyfish Automatic Detector System',
      period: '02/2017 - 03/2017',
      description: 'Awarded Silver medal (2nd place) in FFEST2 (2017) for this innovative jellyfish detection system. Developed an automated solution for marine life monitoring and beach safety.',
      icon: Trophy,
      color: 'from-blue-600 to-blue-700'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Featured <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <project.icon className="text-white" size={32} />
              </div>

              <p className="text-emerald-400 text-sm font-semibold mb-2">{project.period}</p>
              <h3 className="text-white font-bold text-xl mb-3">{project.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>

              <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 font-semibold">
                <span>Learn More</span>
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
