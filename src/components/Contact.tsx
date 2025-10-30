import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Get In Touch</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Open to student collaborations, project supervision, and hardware/control projects.
          Let's build something interesting together!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>

            <div className="space-y-4">
              <a
                href="mailto:marcus@example.com"
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-900 font-medium">marcus@example.com</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <p className="text-gray-900 font-medium">/in/marcus-engineering</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">GitHub</p>
                  <p className="text-gray-900 font-medium">/marcus-engineering</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Message</h3>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Based in Denmark • Available for collaborations and consultations
          </p>
        </div>
      </div>

      <footer className="mt-16 pt-8 border-t border-gray-200 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Marcus. Built with React & TypeScript.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
