import { Zap, Cpu, Radio, Wrench } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Zap,
      text: 'Electrical Engineering student at DTU'
    },
    {
      icon: Cpu,
      text: 'Interested in embedded systems, control theory, and PCB design'
    },
    {
      icon: Radio,
      text: 'Building drones, robots, and IoT devices'
    },
    {
      icon: Wrench,
      text: 'Open to collaborations and student projects'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm an Electrical Engineering student passionate about bridging the gap between
              hardware and software. My work spans from low-level microcontroller programming
              to high-level control system design, with a particular focus on practical,
              real-world applications.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Whether it's designing custom PCBs, implementing PID controllers in Simulink,
              or building lightweight drone frames, I love the process of turning ideas into
              working systems. I document my projects thoroughly and enjoy sharing what I learn
              along the way.
            </p>
          </div>

          <div className="space-y-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 pt-2">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-400 text-sm">Profile Picture</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
