export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "What's In My Fridge?",
      description:
        "A full-stack app (in progress) to track fridge inventory and suggest AI-generated recipes based on available ingredients.",
      technologies: [
        "React",
        "TailwindCSS",
        "Node.js",
        "MongoDB",
        "OpenCV",
        "TensorFlow",
        "Google Maps API",
        "Barcode Scanning",
      ],
      emoji: "🍽️",
      status: "In Progress",
      highlights: [
        "Computer vision feature to scan and identify fridge items using OpenCV and TensorFlow",
        "AI-generated recipe suggestions based on inventory",
        "Responsive frontend with React and Tailwind CSS",
        "Backend services with Node.js and MongoDB",
        "Planned integration with Google API for nearby grocery stores",
        "Barcode scanning for easy item entry",
      ],
      github: "https://github.com/judyphantx/whats_in_my_fridge",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing my projects and skills, built with React and styled with Tailwind CSS.",
      technologies: ["React", "Vite", "TailwindCSS"],
      emoji: "💼",
      status: "Completed",
      highlights: ["Responsive design", "Modern animations", "Clean UI/UX"],
      github: "https://github.com/judyphantx/judy-portfolio",
    },
  ];

  const hackathons = [
    {
      id: 1,
      name: "AI Hackathon",
      date: "June 2025",
      location: "The University of California at Berkeley",
      projectTitle: "Guardian-Real-Time AI Voice Assistant for Personal Safety",
      achievement: "Participant",
      technologies: [
        "Typescript",
        "Vapi",
        "Expo.io",
        "Express.js",
        "Google Maps API",
        "MongoDB",
        "React",
        "React-Native",
      ],
      devpost: "https://devpost.com/software/guardian-lw1gmt",
    },
    {
      id: 2,
      name: "WeHack",
      date: "March 2025",
      location: "The University of Texas at Dallas",
      projectTitle: "VibeCheck - AI Stock Analysis",
      achievement: "Participant",
      technologies: ["Python", "Flask", "Gemini API", "Figma", "HTML"],
      devpost: "https://devpost.com/software/vibecheck-bhcoyf",
    },
    {
      id: 3,
      name: "CodeQuantum",
      date: "March 2025",
      location: "The University of Texas at San Antonio",
      projectTitle: "Mad Dash to Wonderland",
      achievement: "Best in Theme",
      technologies: ["Python", "Pygame"],
      devpost: "https://devpost.com/software/mad-dash-to-wonderland",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 pt-24"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700 hover:-translate-y-1 transition-all duration-300 hover:border-blue-500/40 touch-manipulation"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left section - Header and description */}
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl sm:text-4xl">
                      {project.emoji}
                    </span>
                    <div>
                      <h3 className="font-semibold text-white text-xl sm:text-2xl">
                        {project.title}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          project.status === "Completed"
                            ? "bg-green-500/20 text-green-300"
                            : "bg-blue-500/20 text-blue-300"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-base mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Middle section - Highlights */}
                <div className="lg:w-1/3">
                  <h4 className="text-white font-medium mb-3">Key Features:</h4>
                  <div className="space-y-2 mb-4">
                    {project.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-blue-400 text-sm mt-1">▶</span>
                        <p className="text-gray-300 text-sm">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right section - Technologies */}
                <div className="lg:w-1/3">
                  <h4 className="text-white font-medium mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* GitHub button centered at bottom */}
              <div className="flex justify-center mt-6 pt-4 border-t border-gray-700/50">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white py-3 px-6 rounded-lg text-sm transition-all border border-gray-600/50 hover:border-gray-500 active:scale-95 touch-manipulation select-none"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Hackathons Section */}
        <div className="mt-10">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent text-center">
            Hackathons & Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {hackathons.map((hackathon) => (
              <div
                key={hackathon.id}
                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-purple-500/20 hover:-translate-y-1 transition-all duration-300 hover:border-purple-500/40 touch-manipulation"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div>
                      <h3 className="font-semibold text-white text-sm">
                        {hackathon.name}
                      </h3>
                      <p className="text-purple-400 text-xs">
                        {hackathon.date}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      hackathon.achievement.includes("Winner") ||
                      hackathon.achievement.includes("Best") ||
                      hackathon.achievement.includes("Top")
                        ? "bg-yellow-500/20 text-yellow-300"
                        : "bg-purple-500/20 text-purple-300"
                    }`}
                  >
                    {hackathon.achievement}
                  </span>
                </div>

                <h4 className="text-white text-sm font-medium mb-1">
                  {hackathon.projectTitle}
                </h4>
                <p className="text-gray-400 text-xs mb-2">
                  📍 {hackathon.location}
                </p>

                <div className="flex flex-wrap gap-1 mb-2">
                  {hackathon.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-500/10 text-purple-400 py-0.5 px-1.5 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center">
                  <a
                    href={hackathon.devpost}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 hover:text-blue-300 py-1 px-3 rounded text-xs transition-all border border-blue-500/30 hover:border-blue-500/50"
                  >
                    View on Devpost
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
