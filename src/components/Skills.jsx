import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript (ES6+)', level: 90, color: 'from-yellow-400 to-orange-500' },
        { name: 'Java', level: 85, color: 'from-red-500 to-orange-600' },
        { name: 'C++', level: 80, color: 'from-blue-500 to-indigo-600' },
        { name: 'SQL', level: 85, color: 'from-green-500 to-emerald-600' }
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 95, color: 'from-blue-400 to-blue-600' },
        { name: 'Tailwind CSS', level: 90, color: 'from-cyan-400 to-blue-500' },
        { name: 'HTML5/CSS3', level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'Responsive Design', level: 85, color: 'from-purple-500 to-pink-500' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 88, color: 'from-green-500 to-green-700' },
        { name: 'Express.js', level: 85, color: 'from-gray-600 to-gray-800' },
        { name: 'RESTful APIs', level: 90, color: 'from-indigo-500 to-purple-600' },
        { name: 'Authentication', level: 82, color: 'from-red-500 to-pink-600' }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', level: 88, color: 'from-green-600 to-green-800' },
        { name: 'PostgreSQL', level: 80, color: 'from-blue-600 to-indigo-700' },
        { name: 'MySQL', level: 78, color: 'from-orange-500 to-yellow-600' }
      ]
    }
  ];

  const tools = [
    { name: 'Git', icon: '🔧' },
    { name: 'GitHub', icon: '📁' },
    { name: 'GCP', icon: '☁️' },
    { name: 'Postman', icon: '📬' },
    { name: 'Cloudinary', icon: '🖼️' },
    { name: 'VS Code', icon: '💻' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Webpack', icon: '📦' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="skills" className="py-20 bg-gray-900">
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
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Here are the technologies and tools I work with to create amazing digital experiences.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-400 text-xs font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools & Technologies Cloud */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-white mb-8"
          >
            Tools & Technologies
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto"
          >
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.3 }
                }}
                className="bg-gradient-to-r from-gray-800 to-gray-700 hover:from-blue-600 hover:to-purple-600 px-4 py-3 rounded-full border border-gray-600 hover:border-transparent transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-lg group-hover:animate-bounce">
                    {tool.icon}
                  </span>
                  <span className="text-white font-medium text-sm">
                    {tool.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Floating Animation Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -100, 0],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  left: `${10 + i * 15}%`,
                  top: `${20 + i * 10}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;