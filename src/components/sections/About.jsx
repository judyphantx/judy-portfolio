export const About = () => {
  const frontendSkills = [
    "JavaScript",
    "HTML/CSS",
    "React",
    "Tailwind CSS",
  ];

  const backendSkills = [
    "Python",
    "Java",
    "C++",
    "C",
    "MATLAB",
    "TensorFlow",
    "OpenCV",
    "Pygame",
    "Flask",
    "Git",
    "GitHub",
    "VSCode",
    "Postman",
    "Gemini API",
    "Google Maps API",
    "MongoDB",
    "SQL",
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            I'm an aspiring full-stack software developer with a passion for
            turning complex ideas into clean, impactful code. I love working
            across the stack, building intuitive user experiences, and exploring
            emerging technologies like AI and machine learning. When I'm not
            coding, you'll find me at hackathons, learning as much as I can
            while transitioning into tech and growing through hands-on,
            collaborative projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech) => (
                  <span
                    key={tech}
                    className="bg-purple-500/10 text-purple-400 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(168,85,247,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6 mt-8">
          <div className="p-6 rounded-xl border border-gray-700 bg-gray-900/30 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-500/10 to-violet-600/10 p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🦇</span>
                  <div>
                    <h4 className="font-semibold text-white text-lg">
                      Computer Science Coursework
                    </h4>
                    <p className="text-purple-400 text-sm">
                      Austin Community College
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">January 2024 - May 2025</span>
                  <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                    Completed
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-xs">
                    4.0 GPA
                  </span>
                  <span className="bg-amber-500/20 text-amber-300 px-2 py-1 rounded-full text-xs">
                    Chancellor's Honor Roll
                  </span>
                </div>
                <p className="text-gray-300 text-xs mt-2 leading-relaxed">
                  Relevant Coursework: Programming I, Programming II (OOP in C++), Data Structures & Algorithms, Computer Organization/Machine Language
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-500/10 to-emerald-600/10 p-4 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🌈</span>
                  <div>
                    <h4 className="font-semibold text-white text-lg">
                      B.S. in Mechanical Engineering
                    </h4>
                    <p className="text-green-400 text-sm">
                      The University of Hawaii at Manoa
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">August 2016 - December 2020</span>
                  <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs">
                    Completed
                  </span>
                </div>
                <p className="text-gray-300 text-xs mt-2 leading-relaxed">
                  Relevant Coursework: Programming for Engineers, Computational Physics, Senior Design Project: Autonomous Surface Vehicle
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-gray-700 bg-gray-900/30 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-500/10 to-blue-600/10 p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl mt-1">🤖</span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-lg mb-1">
                      AI Fellow
                    </h4>
                    <p className="text-purple-400 text-sm mb-2">
                      Handshake AI
                    </p>
                    <p className="text-purple-400 text-sm mb-2">
                      December 2025 – Present • Remote
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                        Currently Employed
                      </span>
                      <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs">
                        AI/ML
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  Labeled training data and evaluated model outputs across audio, visual, and text tasks to improve dataset quality for computer vision and multimodal AI models.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 text-xs mt-1">▶</span>
                    <p className="text-gray-300 text-xs">
                      <span className="text-blue-400 font-semibold">
                        Designed and tested prompt-engineering strategies
                      </span>{" "}
                      during technical sprints to guide model behavior and improve response accuracy
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                    AI Training Data
                  </span>
                  <span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                    Prompt Engineering
                  </span>
                  <span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                    Model Evaluation
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/10 to-emerald-600/10 p-4 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl mt-1">🎨</span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-lg mb-1">
                      Volunteer Web Designer
                    </h4>
                    <p className="text-green-400 text-sm mb-2">
                      Develop for Good – Ohana Village Foundation
                    </p>
                    <p className="text-green-400 text-sm mb-2">
                      October 2025 – Present • Remote
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs">
                        Currently Employed
                      </span>
                      <span className="bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded-full text-xs">
                        Design
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  Designed and built a GoDaddy website for a nonprofit connecting aging Japanese community members with care programs, focusing on accessible UX/UI.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 text-xs mt-1">▶</span>
                    <p className="text-gray-300 text-xs">
                      <span className="text-green-400 font-semibold">
                        Collaborated with cross-functional team
                      </span>{" "}
                      in weekly client and team meetings to align on design decisions and deliverables
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                    Web Design
                  </span>
                  <span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                    UX/UI
                  </span>
                  <span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                    GoDaddy
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-500/10 to-amber-600/10 p-4 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl mt-1">🏢</span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-lg mb-1">
                      Property Condition & Evaluation Lead
                    </h4>
                    <p className="text-orange-400 text-sm mb-2">
                      CBRE, INC.
                    </p>
                    <p className="text-orange-400 text-sm mb-2">
                      July 2023 – Present • Remote
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded-full text-xs">
                        Currently Employed
                      </span>
                      <span className="bg-orange-600/20 text-orange-300 px-2 py-1 rounded-full text-xs">
                        Engineering
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  Built and automated survey forms using Python and Survey123, then transitioned to QA role: reporting bugs, suggesting features, and testing app updates resulting in 25% increased efficiency.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 text-xs mt-1">▶</span>
                    <p className="text-gray-300 text-xs">
                      <span className="text-green-400 font-semibold">
                        Led HVAC asset data collection surveys
                      </span>{" "}
                      across 200+ commercial properties with 95% data accuracy for Fortune 500 clients
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                    Python
                  </span>
                  <span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                    Survey123
                  </span>
                  <span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                    QA Testing
                  </span>
                  <span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                    Data Collection
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-500/10 to-violet-600/10 p-4 rounded-lg border border-indigo-500/20 hover:border-indigo-500/40 transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl mt-1">🎓</span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-lg mb-1">
                      Computer Science Grader
                    </h4>
                    <p className="text-indigo-400 text-sm mb-2">
                      UT Dallas
                    </p>
                    <p className="text-indigo-400 text-sm mb-2">
                      September – December 2025 • Richardson, TX
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full text-xs">
                        Completed
                      </span>
                      <span className="bg-violet-500/20 text-violet-300 px-2 py-1 rounded-full text-xs">
                        Education
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  Graded weekly assignments for 140 students in CS3377: C/C++ Programming in a UNIX Environment and hosted twice-weekly office hours covering UNIX, file I/O, and dynamic memory management.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                    C/C++
                  </span>
                  <span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                    UNIX
                  </span>
                  <span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                    Teaching
                  </span>
                  <span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                    Mentoring
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
