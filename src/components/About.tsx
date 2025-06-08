import {
  Code,
  Smartphone,
  Server,
  Database,
  Calendar,
  Phone,
  MapPin,
  Globe,
  Mail,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Me
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Innovative and deadline-driven Flutter Developer with 3+ years of
            experience building and maintaining user-focused mobile applications
          </p>
        </div>

        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Building the Future of Mobile Apps
            </h3>
            <p className="text-gray-600 leading-relaxed">
              With hands-on experience in cross-platform development, I excel at
              turning ideas into polished, high-performance apps. I'm
              well-versed in building RESTful APIs with Node.js, managing data
              with MongoDB, and integrating backend services like Firebase
              Authentication, Cloud Firestore, and Cloud Functions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My code is clean, maintainable, and optimized for performance
              whether I'm implementing real-time chat, location tracking, secure
              payments, or scalable user management systems. I've had the
              opportunity to work with startups, small businesses, and
              tech-driven teams, helping them bring their ideas to life through
              well-crafted mobile applications.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">3+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <div>
                  <span className="font-medium text-gray-700">Phone:</span>
                  <span className="ml-2 text-gray-600">+233 245 513 607</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <div>
                  <span className="font-medium text-gray-700">Email:</span>
                  <span className="ml-2 text-gray-600">
                    kofiktechgh@gmail.com
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-600" />
                <div>
                  <span className="font-medium text-gray-700">City:</span>
                  <span className="ml-2 text-gray-600">Accra, Ghana</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-blue-600" />
                <div>
                  <span className="font-medium text-gray-700">Language:</span>
                  <span className="ml-2 text-gray-600">English (100%)</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                <div>
                  <span className="font-medium text-gray-700">Degree:</span>
                  <span className="ml-2 text-gray-600">
                    BSc. Information Technology
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Briefcase className="h-5 w-5 text-blue-600" />
                <div>
                  <span className="font-medium text-gray-700">Freelance:</span>
                  <span className="ml-2 text-green-600 font-medium">
                    Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Smartphone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h4 className="font-semibold text-gray-900 mb-2">
              Mobile Development
            </h4>
            <p className="text-sm text-gray-600">Flutter & Dart</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Server className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h4 className="font-semibold text-gray-900 mb-2">
              Backend Development
            </h4>
            <p className="text-sm text-gray-600">Node.js & APIs</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Database className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h4 className="font-semibold text-gray-900 mb-2">
              Database Design
            </h4>
            <p className="text-sm text-gray-600">MongoDB</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Code className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h4 className="font-semibold text-gray-900 mb-2">Cloud Services</h4>
            <p className="text-sm text-gray-600">Firebase</p>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Education
          </h3>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-900">
                    Bachelor of Science in Information Technology
                  </h4>
                  <p className="text-blue-600 font-medium">
                    University of Education Winneba (AAMUSTED-Kumasi)
                  </p>
                  <p className="text-gray-500 text-sm mb-3">2021 - 2024</p>
                  <p className="text-gray-600">
                    Gained hands-on experience in programming, systems analysis,
                    networking, and software engineering. Specialized in mobile
                    development with Flutter and backend development using
                    Node.js, MongoDB, and Firebase.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-900">
                    Senior High School Education (WASSCE)
                  </h4>
                  <p className="text-green-600 font-medium">
                    Central Presec (Nsaba Presbyterian Senior High School)
                  </p>
                  <p className="text-gray-500 text-sm mb-3">2013 - 2015</p>
                  <p className="text-gray-600">
                    Pursued General Science, developing analytical thinking and
                    logical reasoning skills that fueled my passion for
                    technology and software development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Experience */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Professional Experience
          </h3>
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Briefcase className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-900">
                    Flutter Mobile App Developer
                  </h4>
                  <p className="text-purple-600 font-medium">
                    PasChat - Chat Messaging Startup
                  </p>
                  <p className="text-gray-500 text-sm mb-3">2024 - 2025</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>
                      • Developed core real-time chat features using Flutter and
                      Firebase
                    </li>
                    <li>
                      • Integrated Firebase Authentication, Cloud Firestore, and
                      Cloud Functions
                    </li>
                    <li>
                      • Contributed to codebase architecture and performance
                      optimization
                    </li>
                    <li>
                      • Participated in agile sprints and feature planning
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-900">
                    Flutter Mobile App Developer
                  </h4>
                  <p className="text-blue-600 font-medium">404 Solutions</p>
                  <p className="text-gray-500 text-sm mb-3">2023 - 2024</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>
                      • Led design, development, and deployment of
                      cross-platform mobile applications
                    </li>
                    <li>
                      • Collaborated with development teams and conducted code
                      reviews
                    </li>
                    <li>
                      • Engineered backend systems using Node.js, MongoDB, and
                      Firebase
                    </li>
                    <li>
                      • Managed project timelines and budgets ranging from
                      $5,000 – $30,000
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Briefcase className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-900">
                    Web Developer
                  </h4>
                  <p className="text-green-600 font-medium">
                    Angular World Club (Social Organisation)
                  </p>
                  <p className="text-gray-500 text-sm mb-3">2024 - 2025</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>
                      • Designed responsive club website using modern HTML, CSS,
                      and JavaScript
                    </li>
                    <li>
                      • Built secure admin dashboard with role-based access
                      control
                    </li>
                    <li>• Integrated Paystack and Stripe payment gateways</li>
                    <li>
                      • Implemented dynamic forms and automated email
                      confirmations
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
