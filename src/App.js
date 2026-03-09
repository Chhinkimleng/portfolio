import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Code, GraduationCap, Briefcase, User } from 'lucide-react';
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
  const [lightsOn, setLightsOn] = useState(false);
  const [temperature, setTemperature] = useState(24);
  const [doorLocked, setDoorLocked] = useState(true);

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
      {/* Header/Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-pink-400 flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
            <img src={myImage} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Chhin Kimleng
          </h1>
          <p className="text-2xl text-purple-300 mb-6">UX/UI Designer</p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            I'm a software engineering student at BELTEI International University who enjoys designing digital products that solve real user problems. My focus is on creating simple, user-friendly, and visually clear interfaces.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-300">
            <a href="mailto:kimlengchhin7@gmail.com" className="flex items-center gap-2 hover:text-purple-400 transition">
              <Mail size={20} />
              <span>kimlengchhin7@gmail.com</span>
            </a>
            <a href="tel:+85587367582" className="flex items-center gap-2 hover:text-purple-400 transition">
              <Phone size={20} />
              <span>+855 87 367 582</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>Phnom Penh, Cambodia</span>
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
                  className={`flex items-center gap-2 px-6 py-2 rounded-lg transition ${
                    activeSection === section.id
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:bg-slate-800'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{section.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* About Section */}
        {activeSection === 'about' && (
          <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-purple-500/20 animate-fadeIn">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <User className="text-purple-400" />
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 text-gray-300">
                <p className="text-lg leading-relaxed">
                  I’m a UX/UI designer with a background in Software Engineering who loves solving problems through design. I’m passionate about creating intuitive, accessible, and visually engaging interfaces that improve the user experience. My technical skills allow me to understand how products are built, helping me design solutions that work well for both users and developers.
                </p>
              </div>
              <div className="bg-slate-700/50 rounded-xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
                <div className="space-y-3 text-gray-300">
                  <div><span className="text-purple-400 font-medium">Nationality:</span> Cambodian</div>
                  <div><span className="text-purple-400 font-medium">Date of Birth:</span> May 20, 2005</div>
                  <div><span className="text-purple-400 font-medium">Location:</span> Prey Chhor District, Kompong Cham Province</div>
                  <div><span className="text-purple-400 font-medium">Languages:</span> Khmer (Native), English (Intermediate)</div>
                  <div><span className="text-purple-400 font-medium">Height:</span> 170 cm</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Code className="text-purple-400" />
              Technical Skills
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Design Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.design.map(skill => (
                    <span key={skill} className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-lg border border-purple-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map(skill => (
                    <span key={skill} className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-lg border border-blue-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Web Development</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.web.map(skill => (
                    <span key={skill} className="px-4 py-2 bg-green-600/20 text-green-300 rounded-lg border border-green-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Tools & Others</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map(skill => (
                    <span key={skill} className="px-4 py-2 bg-pink-600/20 text-pink-300 rounded-lg border border-pink-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 backdrop-blur rounded-xl p-6 border border-purple-500/20 mt-6">
              <h3 className="text-xl font-semibold text-white mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map(skill => (
                  <span key={skill} className="px-4 py-2 bg-white/10 text-white rounded-lg border border-white/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Education Section */}
        {activeSection === 'education' && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <GraduationCap className="text-purple-400" />
              Education
            </h2>

            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-purple-500/20">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Software Engineering</h3>
                  <p className="text-purple-400 text-lg font-medium mb-2">Beltei International University</p>
                  <p className="text-gray-400 mb-4">2023 - Present</p>
                  <p className="text-gray-300">
                    Currently pursuing a comprehensive education in software engineering, focusing on modern development practices, algorithms, and industry-standard technologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-purple-500/20">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-pink-600 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">High School Diploma</h3>
                  <p className="text-pink-400 text-lg font-medium mb-2">Hun Sen Borey 100 Khnang High School</p>
                  <p className="text-gray-400 mb-4">2020 - 2023</p>
                  <p className="text-gray-300">
                    Completed comprehensive high school education with strong foundation in mathematics and sciences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Briefcase className="text-purple-400" />
              Projects
            </h2>

            {/* Smart Home App Case Study */}
            <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur rounded-2xl p-8 border border-cyan-500/20">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-cyan-600/30 text-cyan-300 rounded-lg text-sm border border-cyan-500/30">UX/UI Case Study</span>
                <span className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-lg text-sm border border-blue-500/30">Mobile App</span>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">Project 1 – Smart Home App</h3>
              <p className="text-gray-300 text-lg mb-6">
                A mobile application that allows users to control home devices such as lights, air conditioning, and security systems with a simple and intuitive interface.
              </p>

              {/* Overview */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20 mb-6">
                <h4 className="text-xl font-bold text-cyan-400 mb-3">📋 Overview</h4>
                <p className="text-gray-300">
                  Smart Home is a mobile application designed to simplify home automation control. Users can manage lights, air conditioning, and security systems from a single, easy-to-use dashboard. The app focuses on reducing the complexity often found in smart home applications.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cyan-600/20 text-cyan-300 rounded-lg text-sm border border-cyan-500/30">Role: UX/UI Designer</span>
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-lg text-sm border border-blue-500/30">Tools: Figma</span>
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-lg text-sm border border-purple-500/30">Platform: Mobile App</span>
                </div>
              </div>

              {/* Problem */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-red-500/20 mb-6">
                <h4 className="text-xl font-bold text-red-400 mb-3">⚠️ Problem</h4>
                <p className="text-gray-300">
                  To manage smart devices in the home, users need too many apps to control all the devices. Many smart home apps are difficult to navigate and require too many steps to control devices. Users need a faster and simpler way to control their smart home systems.
                </p>
              </div>

              {/* User Goals */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-green-500/20 mb-6">
                <h4 className="text-xl font-bold text-green-400 mb-3">🎯 User Goals</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>✅ Turn devices on/off quickly</li>
                  <li>✅ Monitor home security</li>
                  <li>✅ Control temperature easily</li>
                </ul>
              </div>

              {/* User Flow */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/20 mb-6">
                <h4 className="text-xl font-bold text-purple-400 mb-4">🔄 User Flow</h4>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <div className="px-4 py-3 bg-purple-600/30 text-purple-300 rounded-lg border border-purple-500/30 text-center min-w-32">
                    <span className="text-2xl">📱</span>
                    <p className="mt-1 font-medium">User opens app</p>
                  </div>
                  <span className="text-pink-400 text-2xl">↓</span>
                  <div className="px-4 py-3 bg-pink-600/30 text-pink-300 rounded-lg border border-purple-500/30 text-center min-w-32">
                    <span className="text-2xl">📲</span>
                    <p className="mt-1 font-medium">User select room</p>
                  </div>
                  <span className="text-purple-400 text-2xl">↓</span>
                  <div className="px-4 py-3 bg-blue-600/30 text-blue-300 rounded-lg border border-blue-500/30 text-center min-w-32">
                    <span className="text-2xl">📲</span>
                    <p className="mt-1 font-medium">Select device</p>
                  </div>
                  <span className="text-blue-400 text-2xl">↓</span>
                  <div className="px-4 py-3 bg-cyan-600/30 text-cyan-300 rounded-lg border border-cyan-500/30 text-center min-w-32">
                    <span className="text-2xl">🎛️</span>
                    <p className="mt-1 font-medium">Control device</p>
                  </div>
                  <span className="text-cyan-400 text-2xl">↓</span>
                  <div className="px-4 py-3 bg-green-600/30 text-green-300 rounded-lg border border-green-500/30 text-center min-w-32">
                    <span className="text-2xl">✅</span>
                    <p className="mt-1 font-medium">See device status</p>
                  </div>
                </div>
              </div>

              {/* Wireframes */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-yellow-500/20 mb-6">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">📝 Wireframes (Low-Fidelity)</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Home Dashboard Wireframe */}
                  <div className="bg-white rounded-lg overflow-hidden border-2 border-gray-300 shadow-lg">
                    <div className="bg-gray-200 px-3 py-2 border-b border-gray-300">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <div className="p-3 bg-white">
                      <img src={wireframedash} alt="Dashboard Wireframe" className="w-full rounded" />
                    </div>
                  </div>
                  {/* <p className="text-center text-gray-400 font-medium -mt-2">Home Dashboard</p> */}

                  {/* Device Control Page Wireframe */}
                  <div className="bg-white rounded-lg overflow-hidden border-2 border-gray-300 shadow-lg">
                    <div className="bg-gray-200 px-3 py-2 border-b border-gray-300">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <div className="p-3 bg-white">
                      <img src={control} alt="Control page Wireframe" className="w-full rounded" />
                    </div>
                  </div>
                  {/* <p className="text-center text-gray-400 font-medium -mt-2">Device Control Page</p> */}

                  {/* Device Status Page Wireframe */}
                  <div className="bg-white rounded-lg overflow-hidden border-2 border-gray-300 shadow-lg">
                    <div className="bg-gray-200 px-3 py-2 border-b border-gray-300">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                   <div className="p-3 bg-white">
                      <img src={room} alt="Room Wireframe" className="w-full rounded" />
                    </div>
                  </div>
                  {/* <p className="text-center text-gray-400 font-medium -mt-2">Device Status Page</p> */}
                </div>
              </div>

              {/* UI Design */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-pink-500/20 mb-6">
                <h4 className="text-xl font-bold text-pink-400 mb-4">🎨 UI Design</h4>
                <p className="text-gray-300 mb-4">Final interface includes:</p>
                <ul className="text-gray-300 space-y-2 mb-4">
                  <li>✨ Simple dashboard</li>
                  <li>✨ Device cards</li>
                  <li>✨ Quick toggle buttons</li>
                  <li>✨ Clean color system</li>
                </ul>
                
                {/* UI Design Images */}
                <div className="grid md:grid-cols-4 gap-6 justify-items-center mb-6">
                  <div className="bg-gray-900 rounded-2xl p-2 border-4 border-gray-700 shadow-2xl w-48">
                    <div className="bg-gray-800 rounded-xl overflow-hidden">
                      <img src={dashboardImg} alt="Dashboard" className="w-full" />
                    </div>
                    <p className="text-center text-gray-400 py-2 text-sm font-medium">Dashboard</p>
                  </div>
                  <div className="bg-gray-900 rounded-2xl p-2 border-4 border-gray-700 shadow-2xl w-48">
                    <div className="bg-gray-800 rounded-xl overflow-hidden">
                      <img src={finalroomImg} alt="Final Room" className="w-full" />
                    </div>
                    <p className="text-center text-gray-400 py-2 text-sm font-medium">Room</p>
                  </div>
                  <div className="bg-gray-900 rounded-2xl p-2 border-4 border-gray-700 shadow-2xl w-48">
                    <div className="bg-gray-800 rounded-xl overflow-hidden">
                      <img src={deviceImg} alt="Device" className="w-full" />
                    </div>
                    <p className="text-center text-gray-400 py-2 text-sm font-medium">Device</p>
                  </div>
                  <div className="bg-gray-900 rounded-2xl p-2 border-4 border-gray-700 shadow-2xl w-48">
                    <div className="bg-gray-800 rounded-xl overflow-hidden">
                      <img src={controlDeviceImg} alt="Control Device" className="w-full" />
                    </div>
                    <p className="text-center text-gray-400 py-2 text-sm font-medium">Control Device</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg border-2 border-gray-600" style={{backgroundColor: '#212326'}}></div>
                  <div className="w-12 h-12 rounded-lg border-2 border-gray-600" style={{backgroundColor: '#707346'}}></div>
                  <div className="w-12 h-12 rounded-lg border-2 border-gray-600" style={{backgroundColor: '#A65D43'}}></div>
                  <div className="w-12 h-12 rounded-lg border-2 border-gray-600" style={{backgroundColor: '#F9F7E8'}}></div>
                </div>
              </div>
            </div>

            {/* Other Projects */}
            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Other Projects</h3>
              <div className="space-y-6">
                {/* Job Finder App Case Study */}
                <div className="bg-gradient-to-br from-green-900/50 to-teal-900/50 backdrop-blur rounded-xl p-6 border border-green-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-green-600/30 text-green-300 rounded-lg text-sm border border-green-500/30">UX/UI Case Study</span>
                    <span className="px-3 py-1 bg-teal-600/30 text-teal-300 rounded-lg text-sm border border-teal-500/30">Mobile App</span>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-3">Job Finder Mobile App</h4>
                  <p className="text-gray-300 mb-4">
                    A mobile application designed to help job seekers easily search for job opportunities and apply directly from their mobile devices.
                  </p>

                  {/* Overview */}
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-green-500/20 mb-4">
                    <h5 className="text-green-400 font-bold mb-2">📋 Overview</h5>
                    <p className="text-gray-300 text-sm">
                      Job Finder is a mobile application designed to help job seekers easily search for job opportunities and apply directly from their mobile devices. The project focuses on creating a simple, clean, and user-friendly interface.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-green-600/20 text-green-300 rounded text-xs">Role: UX/UI Designer</span>
                      <span className="px-2 py-1 bg-teal-600/20 text-teal-300 rounded text-xs">Tools: Figma</span>
                    </div>
                  </div>

                  {/* Problem */}
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-red-500/20 mb-4">
                    <h5 className="text-red-400 font-bold mb-2">⚠️ Problem</h5>
                    <p className="text-gray-300 text-sm">
                      Many job search platforms can be complex and time-consuming, making it difficult for users to quickly find and apply for suitable jobs.
                    </p>
                  </div>

                  {/* Goal */}
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-blue-500/20 mb-4">
                    <h5 className="text-blue-400 font-bold mb-2">🎯 Goal</h5>
                    <p className="text-gray-300 text-sm">
                      The goal was to design a mobile experience that allows users to quickly browse job listings, view detailed job information, and apply for jobs with minimal steps.
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-purple-500/20 mb-4">
                    <h5 className="text-purple-400 font-bold mb-2">✨ Key Features</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• User registration and login system</li>
                      <li>• Job search with category filters</li>
                      <li>• Job listing and detailed job information</li>
                      <li>• Save jobs and apply for positions</li>
                      <li>• Application submission with resume and cover letter</li>
                      <li>• Notification system for application updates</li>
                    </ul>
                  </div>

                  {/* Design Highlights */}
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-pink-500/20 mb-4">
                    <h5 className="text-pink-400 font-bold mb-2">🎨 Design Highlights</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Clean and modern interface</li>
                      <li>• Clear job listing cards for easy browsing</li>
                      <li>• Simple navigation with bottom navigation bar</li>
                      <li>• Minimal steps for submitting job applications</li>
                    </ul>
                  </div>

                  {/* Outcome */}
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-green-500/20 mb-4">
                    <h5 className="text-green-400 font-bold mb-2">📈 Outcome</h5>
                    <p className="text-gray-300 text-sm">
                      The final design provides a smooth and intuitive experience that allows job seekers to search, review, and apply for jobs efficiently through a mobile interface.
                    </p>
                  </div>

                  {/* Screens Included */}
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-cyan-500/20">
                    <h5 className="text-cyan-400 font-bold mb-2">📱 Screens Included</h5>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-gray-600/30 text-gray-300 rounded text-xs">Job Search / Home Screen</span>
                      <span className="px-2 py-1 bg-gray-600/30 text-gray-300 rounded text-xs">Job Details Screen</span>
                      <span className="px-2 py-1 bg-gray-600/30 text-gray-300 rounded text-xs">Apply Job Screen</span>
                    </div>
                    
                    {/* Screen Images */}
                    <div className="grid md:grid-cols-3 gap-4 justify-items-center">
                      <div className="bg-gray-900 rounded-2xl p-2 border-4 border-gray-700 shadow-2xl w-40">
                        <div className="bg-gray-800 rounded-xl overflow-hidden">
                          <img src={jobDashImg} alt="Job Dashboard" className="w-full" />
                        </div>
                        <p className="text-center text-gray-400 py-2 text-sm font-medium">Job Dashboard</p>
                      </div>
                      <div className="bg-gray-900 rounded-2xl p-2 border-4 border-gray-700 shadow-2xl w-40">
                        <div className="bg-gray-800 rounded-xl overflow-hidden">
                          <img src={jobdetailImg} alt="Job Detail" className="w-full" />
                        </div>
                        <p className="text-center text-gray-400 py-2 text-sm font-medium">Job Detail</p>
                      </div>
                      <div className="bg-gray-900 rounded-2xl p-2 border-4 border-gray-700 shadow-2xl w-40">
                        <div className="bg-gray-800 rounded-xl overflow-hidden">
                          <img src={applyJobImg} alt="Apply Job" className="w-full" />
                        </div>
                        <p className="text-center text-gray-400 py-2 text-sm font-medium">Apply Job</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Beltei React Project */}
                <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 backdrop-blur rounded-xl p-6 border border-purple-500/20">
                  <h4 className="text-xl font-bold text-white mb-2">Beltei React Project</h4>
                  <p className="text-gray-300 mb-4">
                    A comprehensive web application built with React, showcasing modern frontend development practices and responsive design.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-lg text-sm border border-blue-500/30">React</span>
                    <span className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-lg text-sm border border-purple-500/30">JavaScript</span>
                    <span className="px-3 py-1 bg-pink-600/30 text-pink-300 rounded-lg text-sm border border-pink-500/30">Vercel</span>
                  </div>
                  <a 
                    href="https://react-beltei-l29xolbmv-pro-lengs-projects.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition font-medium"
                  >
                    View Live Project →
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-gray-400">
          <p className="mb-4">© 2024 Chhin Kimleng. All rights reserved.</p>
          <p className="text-sm">Built with React & Tailwind CSS</p>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}