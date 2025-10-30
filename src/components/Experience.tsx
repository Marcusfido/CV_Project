import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  type: 'education' | 'project' | 'work';
  title: string;
  organization: string;
  period: string;
  description: string;
  tags?: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      type: 'education',
      title: 'BSc in Electrical Engineering',
      organization: 'Technical University of Denmark (DTU)',
      period: '2022 - Present',
      description: 'Specializing in control systems, embedded systems, and electronics design. Coursework includes analog/digital circuits, signal processing, microcontroller systems, and advanced control theory.',
      tags: ['Control Theory', 'Electronics', 'Embedded Systems', 'Signal Processing']
    },
    {
      type: 'project',
      title: 'DTU Eco-Car Team',
      organization: 'Student Project',
      period: '2024',
      description: 'Designed and implemented wheel speed sensor system with custom PCB. Collaborated with mechanical and software teams to integrate sensor data into vehicle telemetry system.',
      tags: ['PCB Design', 'Team Collaboration', 'Automotive']
    },
    {
      type: 'project',
      title: 'Control Systems Course Project',
      organization: 'DTU Course 31300',
      period: '2024',
      description: 'Developed and implemented model-based controllers for mobile robots using Simulink. Applied frequency-domain design techniques and validated performance through experimental testing.',
      tags: ['MATLAB', 'Simulink', 'Control Design']
    },
    {
      type: 'project',
      title: 'Independent Hardware Projects',
      organization: 'Personal Development',
      period: '2022 - Present',
      description: 'Continuous development of embedded systems, drone builds, and IoT devices. Focus on practical learning through hands-on projects and thorough documentation.',
      tags: ['Self-Directed Learning', 'Hardware', 'Embedded']
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'education':
        return GraduationCap;
      case 'work':
        return Briefcase;
      default:
        return Calendar;
    }
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Experience & Education</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Academic background and hands-on project experience
        </p>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => {
              const Icon = getIcon(exp.type);
              return (
                <div key={idx} className="relative">
                  <div className="flex gap-6">
                    <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full items-center justify-center shadow-lg z-10">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <div className="flex-1 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                          <p className="text-blue-600 font-medium">{exp.organization}</p>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {exp.tags && (
                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
