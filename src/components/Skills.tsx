import { Database, Mail, BarChart3, Globe, Workflow, Users, Target, Lightbulb } from 'lucide-react';

interface Skill {
  name: string;
  icon: any;
  color: string;
}

export default function Skills() {
  const skills: Skill[] = [
    { name: 'CRM Management', icon: Database, color: 'from-blue-600 to-blue-700' },
    { name: 'Email Marketing', icon: Mail, color: 'from-emerald-600 to-emerald-700' },
    { name: 'Data Analytics', icon: BarChart3, color: 'from-blue-600 to-blue-700' },
    { name: 'Digital Platform Management', icon: Globe, color: 'from-emerald-600 to-emerald-700' },
    { name: 'Automation & Workflow Optimization', icon: Workflow, color: 'from-blue-600 to-blue-700' },
    { name: 'Project Management', icon: Target, color: 'from-emerald-600 to-emerald-700' },
    { name: 'Cross-Functional Team Leadership', icon: Users, color: 'from-blue-600 to-blue-700' },
    { name: 'Digital Strategy', icon: Lightbulb, color: 'from-emerald-600 to-emerald-700' }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Core <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>

              <div className="relative z-10">
                <div className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="text-white" size={24} />
                </div>
                <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
            <h3 className="text-white font-bold text-xl mb-4">Additional Competencies</h3>
            <div className="flex flex-wrap gap-3">
              {['Audience Segmentation', 'Reporting Dashboards', 'WordPress', 'UX/UI Basics', 'IT Support', 'Tech Operations Coordination', 'Stakeholder Engagement', 'Analytical Mindset', 'Communication', 'Collaboration'].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-lg text-sm border border-slate-600 hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
