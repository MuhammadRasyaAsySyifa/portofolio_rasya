import React, { useState } from 'react';
import { Github, Linkedin, Mail, Twitter, ExternalLink, User, Code, Briefcase, Instagram } from 'lucide-react';
import projects from '../data/projects'; // Impor data projects
import TypewriterEffect from './TypewriterEffect'; // Pastikan jalur ini benar

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false); // State untuk menu responsive
  const skills = [
    "HTML/CSS", "JavaScript", "Bootstrap", "Node.js", "PHP", "Tailwind CSS",
    "Git", "Responsive Design", "UI/UX Design", "Laravel"
  ];

  const CertificatesSection = () => (
    <section id="certificates" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-2 justify-center mb-12">
          <Briefcase className="text-gray-700" size={28} />
          <h2 className="text-3xl font-bold text-center">Certificates</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <img 
                src={project.imageSrc} 
                alt={project.title} 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-700 hover:text-gray-800 transition-colors"
              >
                View Certificate <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 text-white px-0 md:px-20 py-0 md:py-4">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-200">
              Muhammad Rasya Asy-Syifa
            </span>
            <div className="md:hidden relative"> {/* Menampilkan ikon hamburger pada mobile */}
              <button onClick={() => setIsOpen(!isOpen)}>
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
              {/* Menu Navigasi Mobile */}
              <div className={`absolute right-0 flex-col items-start gap-2 mt-2 bg-gray-800 p-4 rounded shadow-md ${isOpen ? 'flex' : 'hidden'} md:flex md:flex-row md:gap-8`}>
                <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
                <a href="#skills" className="hover:text-gray-300 transition-colors">Skills</a>
                <a href="#certificates" className="hover:text-gray-300 transition-colors">Certificate</a>
                <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
              </div>
            </div>
            {/* Menu Navigasi Desktop */}
            <div className="hidden md:flex md:flex-row items-center gap-8">
              <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
              <a href="#skills" className="hover:text-gray-300 transition-colors">Skills</a>
              <a href="#certificates" className="hover:text-gray-300 transition-colors">Certificate</a>
              <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
            </div>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-32">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Hey, <span className="block text-gray-400">I'm Rasya.</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
  <TypewriterEffect 
    text="iIm a web developer who is passionate about creating user-friendly interfaces and efficient backend solutions. Turning ideas into reality through technology and design, one line of code at a time." 
    speed={100} 
  />
</p>


            <div className="flex gap-4">
              <a href="#contact" className="bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
                Get in touch
              </a>
              <a href="#certificates" className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors">
                View Certificates
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 justify-center mb-8">
            <User className="text-gray-700" size={28} />
            <h2 className="text-3xl font-bold text-center text-gray-700">About Me</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-2/5 flex justify-center">
              <img 
                src="/images/rasya.jpg" 
                alt="Profile" 
                className="w-64 h-70 rounded-2xl shadow-2xl border-4 border-gray-700" // Menambahkan border
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                I am a student from SMKN 2 Banjarmasin who has been studying for 2 years with a major in software development expertise. 
                I have a great interest in web development and always strive to improve my skills and knowledge in this field.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg shadow-lg transition-shadow hover:shadow-xl"> {/* Menambahkan bayangan */}
                  <h3 className="font-semibold mb-2 text-gray-700">Education</h3>
                  <p className="text-gray-600">Students of SMKN 2 Banjarmasin, Department of Software Development </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg shadow-lg transition-shadow hover:shadow-xl"> {/* Menambahkan bayangan */}
                  <h3 className="font-semibold mb-2 text-gray-700">Experience</h3>
                  <p className="text-gray-600">2+ Years Website Dev</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 justify-center mb-12">
            <Code className="text-gray-700" size={28} />
            <h2 className="text-3xl font-bold text-center">Skills & Expertise</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <CertificatesSection />

     
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 justify-center mb-12">
            <Mail className="text-gray-600" size={28} />
            <h2 className="text-3xl font-bold text-center">Get in Touch</h2>
          </div>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
            <div className="flex justify-center space-x-8 mb-8">
              <a href="https://github.com/MuhammadRasyaAsySyifa" target='_blank' className="text-gray-600 hover:text-gray-950 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-rasya-asy-syifa-283856282/" target='_blank' className="text-gray-600 hover:text-gray-950 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/rasyassyf" target="_blank"  className="text-gray-600 hover:text-gray-950 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=muhammadrasyaasysyifa@gmail.com" target="_blank" className="text-gray-600 hover:text-gray-950 transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-center text-gray-600">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-300 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Rasya Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};


export default Portfolio;
