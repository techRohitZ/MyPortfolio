import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Brain } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Frontend Development',
      description: 'React.js, Tailwind CSS, Modern UI/UX'
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Backend Development',
      description: 'Node.js, Express.js, RESTful APIs'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Database Management',
      description: 'MongoDB, PostgreSQL, MySQL'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI Integration',
      description: 'SaaS platforms, Automation tools'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">
                Full Stack Developer & AI Enthusiast
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a final-year BCA-MCA student at IIPS, DAVV, with a passion for building 
                innovative AI-driven SaaS platforms. My journey in software development has 
                been focused on creating solutions that bridge the gap between complex 
                technology and user-friendly experiences.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With expertise in the MERN stack and modern development practices, I specialize 
                in developing scalable web applications, automation tools, and AI-integrated 
                platforms. I'm constantly learning and adapting to new technologies to stay 
                at the forefront of innovation.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-700"
            >
              <h4 className="text-lg font-semibold text-white mb-3">Education</h4>
              <div className="space-y-2">
                <p className="text-blue-400 font-medium">BCA-MCA Dual Degree</p>
                <p className="text-gray-300">Institute of Computer Science, IIPS DAVV</p>
                <p className="text-gray-400 text-sm">2021 - 2026 | Indore, India</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Highlights grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {item.icon}
                </div>
                <h4 className="text-white font-semibold mb-2 group-hover:text-blue-100 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '10+', label: 'Projects Completed' },
            { number: '5+', label: 'Technologies Mastered' },
            { number: '3+', label: 'Years Learning' },
            { number: '100%', label: 'Passion Driven' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="text-center group"
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-blue-500 transition-all duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm mt-2 group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;