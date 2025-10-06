import { Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent mb-2">
              Oussama Boumiza
            </h3>
            <p className="text-gray-400">Digital Operations & Marketing Specialist</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/boumiza-oussema-b04819183/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 group"
            >
              <Linkedin className="text-gray-300 group-hover:text-white" size={24} />
            </a>
            <a
              href="mailto:oussema.boumiza99@gmail.com"
              className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300 group"
            >
              <Mail className="text-gray-300 group-hover:text-white" size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-gray-400">
            © {currentYear} Oussama Boumiza. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
