import { Code2, Brain, Rocket, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: Code2, text: 'Computer Science Graduate', color: 'text-blue-500' },
    { icon: Brain, text: 'Marketing Automation Expert', color: 'text-emerald-500' },
    { icon: Rocket, text: 'Digital Strategy Leader', color: 'text-blue-500' },
    { icon: Users, text: 'Cross-Functional Team Management', color: 'text-emerald-500' }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          About <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-600/20 to-emerald-500/20 backdrop-blur-sm border border-slate-700 flex items-center justify-center overflow-hidden p-4">
              <img
                src="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/490810597_9750578591647975_2569143158556185346_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=hR1WBM0io6gQ7kNvwEcplRD&_nc_oc=AdkjcN0LeiVHHMLn2_0nYNnhxGxQsUeaB1-1nHfj5q9akoN2pSo_7yhRqV59FSBudsY&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=KTQoHY9zoHph2OCZ7z-qfQ&oh=00_AfdbFcpVMOG6pnmWbHRqccZbw7UO9nmLiJb-7yRyO-UCWg&oe=68E9E973"
                alt="Oussama Boumiza"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Computer Science graduate with expertise in <span className="text-blue-400 font-semibold">digital operations</span>, <span className="text-emerald-400 font-semibold">CRM management</span>, and <span className="text-blue-400 font-semibold">marketing automation</span>.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Skilled at optimizing organizational workflows, executing data-driven strategies, and implementing innovative digital solutions to enhance growth. Experienced in managing cross-functional teams and delivering measurable results in digital platform management, lead nurturing, and campaign automation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-slate-600 transition-colors duration-300">
                  <item.icon className={`${item.color} flex-shrink-0 mt-1`} size={24} />
                  <span className="text-gray-300 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
