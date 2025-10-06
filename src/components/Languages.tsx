export default function Languages() {
  const languages = [
    { name: 'Arabic', level: 'Professional Working Proficiency', percentage: 90, flag: '🇹🇳' },
    { name: 'English', level: 'Full Professional Proficiency', percentage: 95, flag: '🇬🇧' },
    { name: 'French', level: 'Professional Working Proficiency', percentage: 85, flag: '🇫🇷' },
    { name: 'German', level: 'Limited Working Proficiency', percentage: 50, flag: '🇩🇪' }
  ];

  return (
    <section id="languages" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Languages</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{lang.flag}</span>
                  <div>
                    <h3 className="text-white font-bold text-lg">{lang.name}</h3>
                    <p className="text-gray-400 text-sm">{lang.level}</p>
                  </div>
                </div>
                <span className="text-blue-400 font-semibold">{lang.percentage}%</span>
              </div>

              <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${lang.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
