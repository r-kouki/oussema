import { Users, Zap, Target } from 'lucide-react';

export default function Organizations() {
  const organizations = [
    {
      name: 'AIESEC',
      icon: Target,
      color: 'from-blue-600 to-blue-700',
      roles: [
        'Country Director, AIESEC in Belgium',
        'Global Information Development Chair',
        'National Head of Information Management',
        'Vice President of Marketing & Information Management',
        'Vice President of Marketing Organization Committee',
        'Social Media Manager'
      ]
    },
    {
      name: 'JCI Junior Akouda',
      icon: Users,
      color: 'from-emerald-600 to-emerald-700',
      roles: [
        'Public Relations Vice President (06/2015 - 08/2017)'
      ]
    },
    {
      name: 'ATAST',
      icon: Zap,
      color: 'from-blue-600 to-blue-700',
      roles: [
        'Robotic Coach (06/2015 - 08/2018)',
        'Kids Club Coordinator',
        'Trainer A'
      ]
    }
  ];

  return (
    <section id="organizations" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Organizations & <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Leadership</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {organizations.map((org, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${org.color} rounded-xl flex items-center justify-center mb-4`}>
                <org.icon className="text-white" size={32} />
              </div>

              <h3 className="text-white font-bold text-xl mb-4">{org.name}</h3>

              <ul className="space-y-2">
                {org.roles.map((role, roleIndex) => (
                  <li key={roleIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-emerald-500 mt-1">▸</span>
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
