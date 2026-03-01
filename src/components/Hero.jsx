import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, ExternalLink, Code2, MapPin, GraduationCap, Briefcase } from 'lucide-react';
// Use public image paths for responsive srcSet (place images in public/)

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [profileSrc, setProfileSrc] = useState('/profile.jpg');

  const roles = useMemo(() => [
    'Full Stack Developer',
    'AI-driven SaaS Developer',
    'MERN Stack Developer',
    'React.js Developer',
    'Node.js Developer'
  ], []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = roles[currentIndex];
      
      if (!isDeleting) {
        if (currentText !== current) {
          setCurrentText(current.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText !== '') {
          setCurrentText(current.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 120);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, roles]);

  // Prefer high-res image for HiDPI displays if available
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const dpr = window.devicePixelRatio || 1;
    if (dpr >= 1.5) {
      fetch('/profile@2x.jpg', { method: 'HEAD' })
        .then((res) => {
          if (res.ok) setProfileSrc('/profile@2x.jpg');
        })
        .catch(() => {
          // ignore, keep default
        });
    }
  }, []);

  const scrollToNext = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Custom Social Icons
  const GitHubIcon = ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );

  const LinkedInIcon = ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065a2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
        
        {/* Animated Dots */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-20 right-20 w-20 h-20 border border-blue-400/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-16 h-16 border border-purple-400/20 rotate-45"
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-300 text-sm font-medium">Available for Opportunities</span>
                </div>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-400 text-lg font-medium"
                >
                  Hello, I'm
                </motion.p>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
                >
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    Rohit Patidar
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-xl sm:text-2xl text-gray-300 h-8"
                >
                  <span>{currentText}</span>
                  <span className="animate-pulse text-blue-400">|</span>
                </motion.div>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="text-gray-300 text-lg leading-relaxed max-w-lg"
              >
                BCA-MCA student passionate about building AI-driven SaaS platforms and modern web applications. 
                Currently developing innovative solutions with the MERN stack.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Code2 size={18} />
                  View My Work
                </motion.a>

                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm hover:bg-gray-800/50"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail size={18} />
                  Get in Touch
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="flex items-center gap-4"
              >
                <span className="text-gray-400 text-sm">Connect with me:</span>
                <div className="flex items-center gap-3">
                  <motion.a
                    href="https://github.com/techRohitZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800/50 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -1 }}
                  >
                    <GitHubIcon className="text-gray-400 hover:text-white" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/rohit-patidar-4ab366259"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800/50 hover:bg-blue-600/20 border border-gray-700 hover:border-blue-600 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -1 }}
                  >
                    <LinkedInIcon className="text-gray-400 hover:text-blue-400" />
                  </motion.a>
                  <motion.a
                    href="mailto:patidarrohit586@gmail.com"
                    className="p-2 bg-gray-800/50 hover:bg-green-600/20 border border-gray-700 hover:border-green-600 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -1 }}
                  >
                    <Mail size={20} className="text-gray-400 hover:text-green-400" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Profile Card */}
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-2xl"
                >
                  {/* Profile Avatar */}
                  <div className="text-center mb-6">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      className="w-32 h-32 bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 rounded-full mx-auto overflow-hidden shadow-xl flex items-center justify-center text-white text-4xl font-bold"
                    >
                      {!imgError ? (
                        <img
                          src={profileSrc}
                          srcSet="/profile.jpg 1x, /profile@2x.jpg 2x"
                          alt="Rohit Patidar"
                          loading="lazy"
                          onError={(e) => {
                            if (profileSrc !== '/profile.jpg') {
                              setProfileSrc('/profile.jpg');
                            } else {
                              setImgError(true);
                            }
                          }}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">RP</div>
                      )}
                    </motion.div>
                  </div>

                  {/* Profile Info */}
                  <div className="space-y-4">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-2">Rohit Patidar</h3>
                      <p className="text-blue-400 font-medium">Full Stack Developer</p>
                    </div>

                    {/* Info Items */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg">
                        <MapPin size={16} className="text-blue-400" />
                        <span className="text-gray-300 text-sm">Indore, India</span>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg">
                        <GraduationCap size={16} className="text-purple-400" />
                        <div>
                          <p className="text-gray-300 text-sm">BCA-MCA</p>
                          <p className="text-gray-400 text-xs">IIPS, DAVV (2021-2026)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg">
                        <Briefcase size={16} className="text-green-400" />
                        <span className="text-gray-300 text-sm">Open to Opportunities</span>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700/50">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-400">3+</p>
                        <p className="text-gray-400 text-xs">Projects</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-purple-400">5+</p>
                        <p className="text-gray-400 text-xs">Technologies</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-8 h-8 border border-blue-400/30 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 border border-purple-400/30 rounded-square rotate-45"
                />
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={scrollToNext}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
            >
              <span className="text-xs font-medium">Scroll</span>
              <ChevronDown size={20} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;