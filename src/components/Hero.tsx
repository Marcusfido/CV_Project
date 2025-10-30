import { ArrowDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm Marcus <span className="inline-block animate-[wave_0.6s_ease-in-out_2]">👋</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-700 mb-8 font-medium">
            Electrical Engineering student building hardware, control systems, and embedded projects.
          </p>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            I design and build electronics, from PCB design and embedded systems to drone hardware
            and control theory implementations. Always working on something interesting.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={scrollToProjects}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              View Projects
              <ArrowDown className="w-5 h-5" />
            </button>

            <a
              href="#"
              className="px-8 py-3 bg-white text-gray-900 border-2 border-gray-900 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Download CV
              <Download className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Mail className="w-4 h-4" />
            <span className="text-sm">Based in Denmark</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-20deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
