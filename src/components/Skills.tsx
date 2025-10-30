const Skills = () => {
  const skillCategories = [
    {
      title: 'Electronics & Hardware',
      skills: [
        'PCB Design',
        'KiCad',
        'Sensors & Instrumentation',
        'Strain Gauge',
        'INA126',
        'Power Electronics',
        'ESP32',
        'Microcontrollers',
        'Soldering & Assembly'
      ]
    },
    {
      title: 'Control & Simulation',
      skills: [
        'MATLAB',
        'Simulink',
        'PI/PID Control',
        'Control Theory',
        'System Modelling',
        'Frequency Domain Design',
        'State-Space',
        'Transfer Functions'
      ]
    },
    {
      title: 'Embedded / IoT',
      skills: [
        'ESP32 Programming',
        'HTTPS API Integration',
        'BNO055 IMU',
        'Serial Communication',
        'I2C/SPI',
        'Embedded C/C++',
        'Real-time Systems',
        'Sensor Fusion'
      ]
    },
    {
      title: 'Tools & Other',
      skills: [
        'LaTeX',
        'IEEE Report Writing',
        'Git & Version Control',
        '3D Printing',
        'CAD Design',
        'Technical Documentation',
        'Data Analysis',
        'Python Scripting'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Skills & Technologies</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A diverse toolkit spanning hardware design, control systems, and embedded development
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
