import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Sub-250g Freestyle Drone Build',
      description: 'Custom 3D-printed frame designed for weight optimization while maintaining structural integrity. Integrated JHEMCU AIO flight controller with DJI O4 video system. Complete component selection, assembly, and tuning for optimal flight characteristics.',
      tags: ['Drone', '3D Printing', 'Flight Control', 'Hardware Integration', 'DJI O4'],
      link: '#'
    },
    {
      title: 'Regbot Control Design in Simulink/MATLAB',
      description: 'Model-based control system design using PI/PID controllers. Frequency-domain analysis, system identification, and performance optimization. Implemented and tested on physical robot platform with real-time feedback.',
      tags: ['MATLAB', 'Simulink', 'Control Theory', 'PI/PID', 'Modeling'],
      link: '#',
      github: '#'
    },
    {
      title: 'Wheel Speed Sensor System for DTU Eco-Car',
      description: 'Complete electronics design including custom PCB for wheel speed sensing. Strain gauge integration with INA126 instrumentation amplifier. Full technical documentation and IEEE-format report. Designed for reliability in demanding automotive environment.',
      tags: ['PCB Design', 'KiCad', 'Strain Gauge', 'INA126', 'Automotive', 'Documentation'],
      link: '#',
      github: '#'
    },
    {
      title: 'ESP32 Star Tracker with Astronomy API',
      description: 'IoT device that retrieves celestial object positions via HTTPS API and calculates azimuth/altitude. Dual-axis control using stepper motor and servo for precise pointing. Real-time tracking with BNO055 IMU feedback for stability.',
      tags: ['ESP32', 'HTTPS API', 'BNO055', 'Stepper Control', 'IoT', 'Embedded C++'],
      link: '#',
      github: '#'
    },
    {
      title: 'Balancing Robot Controller',
      description: 'Self-balancing robot implementation with system modeling, state-space control design, and real-time testing. Sensor fusion for angle estimation, PID tuning, and stability analysis. Complete characterization and performance evaluation.',
      tags: ['Control Systems', 'State-Space', 'Sensor Fusion', 'Embedded', 'Robotics'],
      link: '#',
      github: '#'
    },
    {
      title: 'Custom Power Supply PCB',
      description: 'Multi-voltage regulated power supply board for embedded projects. Buck converters, LDOs, protection circuitry, and monitoring. Layout optimization for minimal noise and thermal management.',
      tags: ['PCB Design', 'Power Electronics', 'KiCad', 'Hardware', 'Layout'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Projects</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A selection of hardware and control systems projects showcasing practical engineering solutions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:border-blue-600 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Project Image</span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900 font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
