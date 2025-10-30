import { FileText, ExternalLink, Github } from 'lucide-react';

interface Publication {
  title: string;
  description: string;
  type: string;
  date: string;
  pdfLink?: string;
  githubLink?: string;
}

const Publications = () => {
  const publications: Publication[] = [
    {
      title: 'Wheel Speed Sensor System Design and Implementation',
      description: 'Technical report detailing the design, implementation, and testing of a strain gauge-based wheel speed sensor for automotive applications. Includes circuit design, PCB layout considerations, and experimental validation.',
      type: 'Technical Report',
      date: 'Spring 2024',
      pdfLink: '#',
      githubLink: '#'
    },
    {
      title: 'Model-Based Control Design for Mobile Robots',
      description: 'Comprehensive study of PI/PID controller design using frequency-domain methods in Simulink. Analysis of system dynamics, stability margins, and performance optimization through systematic tuning.',
      type: 'Course Report',
      date: 'Fall 2024',
      pdfLink: '#',
      githubLink: '#'
    },
    {
      title: 'ESP32-Based IoT Star Tracking System',
      description: 'Project documentation covering hardware design, API integration, and control algorithms for an automated celestial tracking system. Includes mechanical design considerations and calibration procedures.',
      type: 'Project Documentation',
      date: 'Summer 2024',
      pdfLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Publications & Reports</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Technical documentation and reports written in LaTeX following IEEE standards
        </p>

        <div className="space-y-6">
          {publications.map((pub, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-blue-600 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <FileText className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {pub.title}
                      </h3>
                      <div className="flex gap-3 mt-1">
                        <span className="text-sm font-medium text-blue-600">{pub.type}</span>
                        <span className="text-sm text-gray-500">{pub.date}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {pub.description}
                  </p>

                  <div className="flex gap-4">
                    {pub.pdfLink && (
                      <a
                        href={pub.pdfLink}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                      >
                        <FileText className="w-4 h-4" />
                        View PDF
                      </a>
                    )}
                    {pub.githubLink && (
                      <a
                        href={pub.githubLink}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Repository
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-xl border-2 border-blue-100">
          <p className="text-gray-700 text-center">
            <span className="font-semibold">Note:</span> All reports are written using LaTeX following IEEE formatting standards,
            ensuring professional technical documentation suitable for academic and industry contexts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Publications;
