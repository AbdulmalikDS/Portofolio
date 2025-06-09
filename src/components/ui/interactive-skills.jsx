import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveSkills = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const skillCategories = [
    {
      name: 'Programming Languages',
      type: 'languages',
      skills: ['Python', 'Java', 'JavaScript', 'C++', 'SQL']
    },
    {
      name: 'Libraries & Frameworks', 
      type: 'libraries',
      skills: ['Git', 'CUDA', 'R', 'Rust', 'PHP']
    },
    {
      name: 'Databases',
      type: 'databases', 
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'SQLite']
    },
    {
      name: 'DevOps & Environments',
      type: 'devops',
      skills: ['Docker', 'AWS', 'Linux', 'GitHub Actions', 'Nginx']
    },
    {
      name: 'Research Interests',
      type: 'research',
      skills: ['Machine Learning', 'NLP', 'Deep Learning', 'AI Research', 'Data Science']
    }
  ];

  // Set default to first category
  useEffect(() => {
    if (!selectedCategory) {
      setSelectedCategory(skillCategories[0]);
    }
  }, []);

  return (
    <div className="bg-gray-800/70 border border-gray-700/50 rounded-lg p-8">
      <div className="text-white text-lg mb-8 font-mono">
        .skills()
      </div>

      {/* Skill Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {skillCategories.map((category) => (
          <motion.button
            key={category.type}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedCategory?.type === category.type 
                ? 'bg-gray-600 text-white' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.name}
          </motion.button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {(selectedCategory ? selectedCategory.skills : skillCategories[0].skills).map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="bg-gray-700 border border-gray-600 rounded-lg p-4 text-center cursor-pointer transition-all duration-200 hover:bg-gray-600 hover:border-gray-500"
          >
            <div className="w-3 h-3 bg-gray-400 rounded-full mx-auto mb-3"></div>
            <span className="text-gray-300 font-medium text-sm">{skill}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveSkills; 
