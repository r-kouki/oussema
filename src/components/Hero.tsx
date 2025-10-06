import { Download, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img
              src="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/490810597_9750578591647975_2569143158556185346_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=hR1WBM0io6gQ7kNvwEcplRD&_nc_oc=AdkjcN0LeiVHHMLn2_0nYNnhxGxQsUeaB1-1nHfj5q9akoN2pSo_7yhRqV59FSBudsY&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=KTQoHY9zoHph2OCZ7z-qfQ&oh=00_AfdbFcpVMOG6pnmWbHRqccZbw7UO9nmLiJb-7yRyO-UCWg&oe=68E9E973"
              alt="Oussama Boumiza"
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-blue-600/30 shadow-2xl shadow-blue-600/20"
            />
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Oussama <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Boumiza</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 font-light">
            Digital Operations & Marketing Specialist
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Driving digital transformation through data-driven strategies, CRM optimization, and innovative automation solutions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToContact(); }}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
            >
              <Mail size={20} />
              Contact Me
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
            <a
              href={`${import.meta.env.BASE_URL}oussema-boumiza-cv.pdf`}
              download="Oussema_Boumiza_CV.pdf"
              className="group px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-slate-700/50 transition-all duration-300 flex items-center gap-2 border border-slate-700 hover:border-slate-600"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
