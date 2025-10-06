import { GraduationCap, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Education</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-slate-600 transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-white" size={32} />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">National Diploma in Computer Science</h3>
                <p className="text-blue-400 font-semibold mb-2">ISSAT, Sousse</p>
                <p className="text-emerald-400 text-sm font-semibold mb-4">12/2018 - 06/2021</p>

                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="text-blue-400" size={20} />
                    <h4 className="text-white font-semibold">Key Courses</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-emerald-500 mt-1">▸</span>
                      <span>Information Systems & Data Analysis</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-emerald-500 mt-1">▸</span>
                      <span>Programming & Automation</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-emerald-500 mt-1">▸</span>
                      <span>Digital Platforms & System Optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
