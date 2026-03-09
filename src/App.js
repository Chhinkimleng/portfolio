import React, { useState } from 'react';
import { Mail, Phone, MapPin, Code, GraduationCap, Briefcase, User } from 'lucide-react';
import myImage from "./assets/myImage.jpg";
import wireframedash from "./assets/wireframedash.png";
import dashboardImg from "./assets/dashboard.png";
import finalroomImg from "./assets/finalroom.png";
import deviceImg from "./assets/device.png";
import controlDeviceImg from "./assets/control-device.png";
import applyJobImg from "./assets/apply-job.png";
import jobDashImg from "./assets/job-dash.png";
import jobdetailImg from "./assets/jobdetail.png";
import room from "./assets/room.png";
import control from "./assets/control.png";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');

  const sections = [
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'projects', label: 'Projects', icon: Briefcase }
  ];

  const skills = {
    design: ['Figma', 'Adobe XD'],
    programming: ['C#', 'Java', 'C++', 'React', 'PHP', 'Laravel'],
    web: ['HTML', 'CSS', 'JavaScript'],
    tools: ['Microsoft Office', 'Problem Solving', 'Debugging'],
    soft: ['Teamwork', 'Communication', 'Time Management', 'Fast Learner', 'Logical Thinking']
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full shadow-2xl overflow-hidden">
            <img src={myImage} alt="Chhin Kimleng" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Chhin Kimleng</h1>
          <p className="text-2xl text-purple-300 mb-6">UX/UI Designer</p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            I'm a software engineering student at BELTEI International University who enjoys designing digital products that solve real user problems. My focus is on creating simple, user-friendly, and visually clear interfaces.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-300">
            <a href="mailto:kimlengchhin7@gmail.com" className="flex items-center gap-2 hover:text-purple-400 transition">
              <Mail size={20} /> kimlengchhin7@gmail.com
            </a>
            <a href="tel:+85587367582" className="flex items-center gap-2 hover:text-purple-400 transition">
              <Phone size={20} /> +855 87 367 582
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={20} /> Phnom Penh, Cambodia
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center gap-2 py-4">
            {sections.map(section => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-6 py-2 rounded-lg transition ${activeSection === section.id ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-slate-800'
                    }`}
                >
                  <Icon size={18} />
                  {section.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* About */}
        {activeSection === 'about' && (
          <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-purple-500/20 animate-fadeIn">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <User className="text-purple-400" /> About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 text-gray-300">
                <p className="text-lg leading-relaxed">
                  I’m a UX/UI designer with a Software Engineering background who loves solving problems through design. I’m passionate about creating intuitive, accessible, and visually engaging interfaces that improve user experiences.
                </p>
              </div>
              <div className="bg-slate-700/50 rounded-xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Personal Info</h3>
                <div className="space-y-3 text-gray-300">
                  <div><span className="text-purple-400 font-medium">Nationality:</span> Cambodian</div>
                  <div><span className="text-purple-400 font-medium">DOB:</span> May 20, 2005</div>
                  <div><span className="text-purple-400 font-medium">Location:</span> Prey Chhor, Kompong Cham</div>
                  <div><span className="text-purple-400 font-medium">Languages:</span> Khmer (Native), English (Intermediate)</div>
                  <div><span className="text-purple-400 font-medium">Height:</span> 170 cm</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Skills */}
        {activeSection === 'skills' && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Code className="text-purple-400" /> Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-purple-500/20">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map(skill => (
                      <span key={skill} className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-lg border border-purple-500/30">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Education Section */}
        {activeSection === 'education' && (<div className="space-y-6 animate-fadeIn">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <GraduationCap className="text-purple-400" /> Education </h2>
          <div className="bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-purple-500/20">
            <div className="flex items-start gap-4"> <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0"> <GraduationCap size={32} className="text-white" />
            </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Software Engineering</h3>
                <p className="text-purple-400 text-lg font-medium mb-2">Beltei International University</p>
                <p className="text-gray-400 mb-4">2023 - Present</p>
                <p className="text-gray-300"> Currently pursuing a comprehensive education in software engineering, focusing on modern development practices, algorithms, and industry-standard technologies. </p>
              </div>
            </div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-purple-500/20">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-pink-600 flex items-center justify-center flex-shrink-0"> <GraduationCap size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">High School Diploma</h3>
                <p className="text-pink-400 text-lg font-medium mb-2">Hun Sen Borey 100 Khnang High School</p>
                <p className="text-gray-400 mb-4">2020 - 2023</p>
                <p className="text-gray-300"> Completed comprehensive high school education with strong foundation in mathematics and sciences. </p>
              </div>
            </div>
          </div>
        </div>
        )}
        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Briefcase className="text-purple-400" /> Projects
            </h2>

            {/** Define projects data */}
            {[
              {
                title: "Smart Home App",
                type: ["UX/UI Case Study", "Mobile App"],
                description: "A mobile app for controlling home devices like lights, air conditioning, and security with a simple interface.",
                overview: "Smart Home simplifies home automation. Users manage lights, AC, and security from a single dashboard, reducing app complexity.",
                problem: "Too many apps needed to control devices; existing apps are hard to navigate.",
                goals: ["Turn devices on/off quickly", "Monitor home security", "Control temperature easily"],
                userFlow: ["User opens app", "Select room", "Select device", "Control device", "See device status"],
                wireframes: [
                  { img: wireframedash, alt: "Dashboard Wireframe", label: "Home Dashboard" },
                  { img: control, alt: "Control Wireframe", label: "Device Control" },
                  { img: room, alt: "Room Wireframe", label: "Device Status" },
                ],
                uiImages: [
                  { img: dashboardImg, label: "Dashboard" },
                  { img: finalroomImg, label: "Room" },
                  { img: deviceImg, label: "Device" },
                  { img: controlDeviceImg, label: "Control Device" },
                ],
                tools: ["Figma"],
                role: "UX/UI Designer",
                platform: "Mobile App",
                colors: ['#212326', '#707346', '#A65D43', '#F9F7E8'],
              },
              {
                title: "Job Finder Mobile App",
                type: ["UX/UI Case Study", "Mobile App"],
                description: "A mobile app to help users search and apply for jobs easily.",
                overview: "Job Finder provides a simple, clean interface for job seekers to browse, view details, and apply for jobs.",
                problem: "Existing job apps are complex and time-consuming.",
                goals: ["Quickly browse jobs", "View job details", "Apply with minimal steps"],
                features: [
                  "User registration and login",
                  "Job search with filters",
                  "Job listing and details",
                  "Save jobs and apply",
                  "Resume & cover letter submission",
                  "Notifications for applications"
                ],
                designHighlights: [
                  "Clean modern interface",
                  "Clear job listing cards",
                  "Bottom navigation bar",
                  "Minimal steps for applications"
                ],
                outcome: "Smooth and intuitive experience for job seekers.",
                screens: [
                  { img: jobDashImg, label: "Job Dashboard" },
                  { img: jobdetailImg, label: "Job Detail" },
                  { img: applyJobImg, label: "Apply Job" },
                ],
                tools: ["Figma"],
                role: "UX/UI Designer",
                platform: "Mobile App",
                colors: [],
              },
              {
                title: "Beltei React Project",
                type: ["Web Application"],
                description: "A web application built with React, showcasing modern frontend practices and responsive design.",
                link: "https://react-beltei-l29xolbmv-pro-lengs-projects.vercel.app",
                tools: ["React", "JavaScript", "Vercel"],
                role: "",
                platform: "Web App",
                colors: [],
              }
            ].map((project, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-purple-500/20">
                <div className="flex items-center gap-3 mb-4">
                  {project.type.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-lg text-sm border border-purple-500/30">
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                {project.overview && (
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-cyan-500/20 mb-4">
                    <h5 className="text-cyan-400 font-bold mb-2">📋 Overview</h5>
                    <p className="text-gray-300 text-sm">{project.overview}</p>
                    {project.role && <div className="mt-2 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-green-600/20 text-green-300 rounded text-xs">Role: {project.role}</span>
                      <span className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded text-xs">Tools: {project.tools.join(', ')}</span>
                    </div>}
                  </div>
                )}

                {project.problem && (
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-red-500/20 mb-4">
                    <h5 className="text-red-400 font-bold mb-2">⚠️ Problem</h5>
                    <p className="text-gray-300 text-sm">{project.problem}</p>
                  </div>
                )}

                {project.goals && (
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-green-500/20 mb-4">
                    <h5 className="text-green-400 font-bold mb-2">🎯 Goals</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {project.goals.map((goal, i) => <li key={i}>✅ {goal}</li>)}
                    </ul>
                  </div>
                )}

                {project.features && (
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-purple-500/20 mb-4">
                    <h5 className="text-purple-400 font-bold mb-2">✨ Key Features</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {project.features.map((f, i) => <li key={i}>• {f}</li>)}
                    </ul>
                  </div>
                )}

                {project.designHighlights && (
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-pink-500/20 mb-4">
                    <h5 className="text-pink-400 font-bold mb-2">🎨 Design Highlights</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {project.designHighlights.map((d, i) => <li key={i}>• {d}</li>)}
                    </ul>
                  </div>
                )}

                {project.outcome && (
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-green-500/20 mb-4">
                    <h5 className="text-green-400 font-bold mb-2">📈 Outcome</h5>
                    <p className="text-gray-300 text-sm">{project.outcome}</p>
                  </div>
                )}

                {project.wireframes && (
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-yellow-500/20 mb-4">
                    <h5 className="text-yellow-400 font-bold mb-3">📝 Wireframes</h5>
                    <div className="grid md:grid-cols-3 gap-4">
                      {project.wireframes.map((wf, i) => (
                        <div key={i} className="bg-white rounded-lg overflow-hidden border-2 border-gray-300 shadow-lg">
                          <div className="p-3 bg-white">
                            <img src={wf.img} alt={wf.alt} className="w-full rounded" />
                          </div>
                          <p className="text-center text-gray-400 py-2 text-sm font-medium">{wf.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.uiImages && (
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-pink-500/20 mb-4">
                    <h5 className="text-pink-400 font-bold mb-3">🎨 UI Design Screens</h5>
                    <div className="grid md:grid-cols-4 gap-4 justify-items-center">
                      {project.uiImages.map((imgObj, i) => (
                        <div key={i} className="bg-gray-900 rounded-2xl p-2 border-4 border-gray-700 shadow-2xl w-40">
                          <div className="bg-gray-800 rounded-xl overflow-hidden">
                            <img src={imgObj.img} alt={imgObj.label} className="w-full" />
                          </div>
                          <p className="text-center text-gray-400 py-2 text-sm font-medium">{imgObj.label}</p>
                        </div>
                      ))}
                    </div>

                    {project.colors.length > 0 && (
                      <div className="flex flex-wrap gap-3 mt-4">
                        {project.colors.map((c, i) => (
                          <div key={i} className="w-12 h-12 rounded-lg border-2 border-gray-600" style={{ backgroundColor: c }}></div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition font-medium"
                  >
                    View Live Project →
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-gray-400">
          <p>© 2024 Chhin Kimleng. All rights reserved.</p>
          <p className="text-sm">Built with React & Tailwind CSS</p>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out; }
      `}</style>
    </div>
  );
}