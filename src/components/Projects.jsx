import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Bot, Heart } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'QaCore',
      subtitle: 'AI-Powered QA Automation Platform',
      description: 'An intelligent SaaS platform that revolutionizes quality assurance by generating automated test suites using MERN stack and Playwright. Features AI-driven test case generation, real-time reporting, and seamless CI/CD integration.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Playwright', 'Express.js', 'AI/ML'],
      features: [
        'AI-powered test generation',
        'Real-time test execution',
        'Comprehensive reporting dashboard',
        'CI/CD pipeline integration'
      ],
      icon: <Zap className="w-8 h-8" />,
      gradient: 'from-blue-500 via-purple-600 to-indigo-700',
      liveDemo: 'https://qacore-ai.netlify.app/',
      github: 'https://github.com/techRohitZ',
      status: 'Live'
    },
    {
      id: 2,
      title: 'Quick AI',
      subtitle: 'Multi-Tool AI SaaS Platform',
      description: 'A comprehensive AI-powered SaaS platform offering content generation, image creation, and various AI tools. Built with modern technologies to provide users with cutting-edge AI capabilities in one unified platform.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'OpenAI API', 'Stripe', 'Cloudinary'],
      features: [
        'AI content generation',
        'Image creation & editing',
        'Multiple AI model integration',
        'Subscription management'
      ],
      icon: <Bot className="w-8 h-8" />,
      gradient: 'from-emerald-500 via-teal-600 to-cyan-700',
      liveDemo: 'https://quickai-drab.vercel.app/',
      github: 'https://github.com/techRohitZ',
      status: 'Live'
    },
    {
      id: 3,
      title: 'Blood Donation System',
      subtitle: 'Full-Stack MERN Management System',
      description: 'A comprehensive blood donation management system connecting donors with recipients. Features real-time inventory tracking, donor management, emergency notifications, and administrative dashboard for efficient blood bank operations.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io', 'JWT'],
      features: [
        'Donor registration & management',
        'Real-time inventory tracking',
        'Emergency notification system',
        'Admin dashboard & analytics'
      ],
      icon: <Heart className="w-8 h-8" />,
      gradient: 'from-red-500 via-pink-600 to-rose-700',
      liveDemo: '#',
      github: '#',
      status: 'Completed'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={cardVariants}
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.div
            variants={cardVariants}
            className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-6"
          />
          <motion.p
            variants={cardVariants}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Here are some of my most impactful projects that showcase my skills in full-stack development and AI integration.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid lg:grid-cols-1 gap-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl bg-gray-900/50 border border-gray-700 hover:border-gray-600 transition-all duration-500"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
              
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center relative z-10`}>
                {/* Content */}
                <div className="flex-1 p-8 lg:p-12">
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : project.status === 'In Development'
                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {project.status}
                    </span>
                    
                    <div className="flex space-x-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                        onClick={(e) => {
                          if (project.github === '#') {
                            e.preventDefault();
                          }
                        }}
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                        onClick={(e) => {
                          if (project.liveDemo === '#') {
                            e.preventDefault();
                          }
                        }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="flex items-center mb-4">
                    <div className={`text-white mr-4 bg-gradient-to-br ${project.gradient} p-3 rounded-xl`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-blue-400 font-medium">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-medium border border-gray-700 hover:border-gray-600 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 relative z-20"
                    style={{ pointerEvents: 'auto' }}>
                    {project.liveDemo !== '#' && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl z-20 relative"
                      style={{ pointerEvents: 'auto' }}
                    >
                      <ExternalLink size={18} />
                      View Live
                    </a>
                    )}
                    
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border-2 border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-800/50 z-20 relative"
                      style={{ pointerEvents: 'auto' }}
                    >
                      <Github size={18} />
                      View Code
                    </a>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="flex-1 p-8 lg:p-12 flex items-center justify-center">
                  <div className={`relative w-64 h-64 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}>
                    <div className="absolute inset-4 border-2 border-white/20 rounded-xl" />
                    <div className="absolute inset-8 border border-white/10 rounded-lg" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                      <div className="scale-[2]">
                        {project.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Interested in seeing more of my work?
          </p>
          <motion.a
            href="https://github.com/techRohitZ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;