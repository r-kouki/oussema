import { useState } from 'react';
import { ChevronDown, ChevronUp, Briefcase } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  tasks: string[];
}

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences: ExperienceItem[] = [
    {
      title: 'Country Director',
      company: 'AIESEC in Belgium',
      period: '08/2024 - Present',
      location: 'Brussels, Belgium',
      description: '2024–2025: Managed Marketing & Operations nationally. 2025–2026: Serving as President of AIESEC in Belgium.',
      tasks: [
        'Oversaw national digital operations, including CRM workflows, recruitment automation, and performance dashboards',
        'Directed end-to-end digital strategy execution across marketing, communications, and member management platforms',
        'Implemented data-driven processes to strengthen lead nurturing and optimize campaign results',
        'Led the national leadership team, aligning digital tools, workflows, and strategy to achieve growth'
      ]
    },
    {
      title: 'Global Information Development Chair',
      company: 'AIESEC International',
      period: '06/2024 - 02/2025',
      location: 'Montreal, Quebec (Online)',
      description: 'Led five major global information management projects, driving innovation and digital transformation.',
      tasks: [
        'Developed an AI chatbot for customer support, enhancing responsiveness and engagement',
        'Built a platform for membership and experience enhancement',
        'Designed and implemented data analytics systems to extract insights from organizational platforms',
        'Created an automated global contact list, improving communication efficiency',
        'Developed an auditing platform for internal policies, ensuring compliance and standardization'
      ]
    },
    {
      title: 'National Head of Information Management',
      company: 'AIESEC in Tunisia',
      period: '10/2019 - 07/2024',
      location: 'Sousse, Tunisia',
      description: 'First-ever National Head of IM in AIESEC Tunisia. Won AIESEC Global Award for Best IM Department.',
      tasks: [
        'Designed and implemented national information management strategies, systems, and processes',
        'Oversaw the collection, analysis, and reporting of organizational data',
        'Trained and supported local committees on data management best practices',
        'Ensured data integrity, accuracy, and security across all platforms',
        'Represented the national IM function at regional and global forums'
      ]
    },
    {
      title: 'Marketing Specialist',
      company: 'Envast',
      period: '06/2022 - 06/2023',
      location: 'Sousse, Tunisia',
      description: 'Managed digital marketing operations combining content creation with process optimization.',
      tasks: [
        'Managed digital content operations, optimizing online engagement across platforms',
        'Implemented marketing automation workflows and enhanced campaign delivery',
        'Enhanced data analytics to refine targeting and improve ROI',
        'Supported the integration of digital platforms to enhance customer experience'
      ]
    },
    {
      title: 'International Negotiator',
      company: 'OZEOL',
      period: '01/2022 - 06/2022',
      location: 'Sousse, Tunisia',
      description: 'Facilitated international trade between Chinese manufacturers and French clients.',
      tasks: [
        'Negotiated contracts between Chinese manufacturers and French clients',
        'Utilized CRM systems to track leads, client interactions, and streamline operations',
        'Conducted client prospection, expanding the company\'s international portfolio'
      ]
    },
    {
      title: 'Mobile App Dev Intern',
      company: 'ENOVA Robotics',
      period: '02/2021 - 07/2021',
      location: 'Sousse, Tunisia',
      description: 'Developed mobile application to remotely control medical robots.',
      tasks: [
        'Developed a mobile application to remotely control a medical robot for patient monitoring',
        'Designed user-friendly interfaces and implemented secure communication protocols',
        'Collaborated with engineers and healthcare professionals to align with medical needs'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Professional <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-emerald-500 to-blue-600 hidden md:block"></div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="relative md:ml-16">
                <div className="absolute -left-16 top-6 w-8 h-8 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-full hidden md:flex items-center justify-center border-4 border-slate-800">
                  <Briefcase size={16} className="text-white" />
                </div>

                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all duration-300">
                  <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-emerald-400 text-sm font-semibold">{exp.period}</p>
                      <p className="text-gray-400 text-sm">{exp.location}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  <button
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 font-semibold"
                  >
                    {expandedIndex === index ? (
                      <>
                        <ChevronUp size={20} />
                        Hide Details
                      </>
                    ) : (
                      <>
                        <ChevronDown size={20} />
                        View Details
                      </>
                    )}
                  </button>

                  {expandedIndex === index && (
                    <div className="mt-4 pt-4 border-t border-slate-700 animate-fade-in">
                      <ul className="space-y-2">
                        {exp.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start gap-2 text-gray-300">
                            <span className="text-emerald-500 mt-1">▸</span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
