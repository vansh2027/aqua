
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { DropletIcon, BarChart3Icon, MapPinIcon, ClipboardIcon } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      title: 'Real-time Monitoring',
      description: 'Track water quality metrics in real-time across all monitored water bodies in Delhi.',
      icon: <DropletIcon className="h-6 w-6 text-aqua-500" />,
      animation: { delay: 0.3 }
    },
    {
      title: 'Interactive Map',
      description: 'Visualize water bodies on an interactive map with detailed quality indicators.',
      icon: <MapPinIcon className="h-6 w-6 text-aqua-500" />,
      animation: { delay: 0.4 }
    },
    {
      title: 'Data Analytics',
      description: 'Analyze trends and patterns in water quality data with advanced visualization tools.',
      icon: <BarChart3Icon className="h-6 w-6 text-aqua-500" />,
      animation: { delay: 0.5 }
    },
    {
      title: 'Survey Submission',
      description: 'Contribute to water monitoring by submitting your own observations and measurements.',
      icon: <ClipboardIcon className="h-6 w-6 text-aqua-500" />,
      animation: { delay: 0.6 }
    }
  ];
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-aqua-50/50 to-transparent -z-10"></div>
        
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-block px-3 py-1 text-sm font-medium text-aqua-700 bg-aqua-50 rounded-full mb-6">
              Water Quality Monitoring
            </span>
          </motion.div>
          
          <motion.h1 
            className="hero-text mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Preserving Delhi's Water Bodies Through Modern Monitoring
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            AquaSurveyor provides comprehensive, real-time monitoring of Delhi's lakes, rivers, and wetlands, 
            enabling data-driven conservation efforts and community involvement.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              onClick={() => navigate('/dashboard')}
              className="px-6 py-3 text-white bg-gradient-to-r from-aqua-500 to-aqua-600 rounded-md shadow-md font-medium button-glow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Explore Dashboard
            </motion.button>
            
            <motion.button
              onClick={() => navigate('/survey')}
              className="px-6 py-3 text-aqua-700 bg-white border border-aqua-200 rounded-md shadow-sm font-medium"
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(224, 242, 254, 0.5)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Submit Survey
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Water Monitoring</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform provides end-to-end tools for monitoring, analyzing, and preserving Delhi's precious water resources.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: feature.animation.delay }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-aqua-50 rounded-lg">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 sm:py-24">
        <motion.div 
          className="max-w-5xl mx-auto p-8 sm:p-12 glass-card bg-gradient-to-r from-aqua-500/10 to-aqua-600/10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Water Conservation Efforts</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Be part of the community working to protect and preserve Delhi's water bodies for future generations.
            Submit your observations and help us build a comprehensive database.
          </p>
          
          <motion.button
            onClick={() => navigate('/survey')}
            className="px-6 py-3 text-white bg-gradient-to-r from-aqua-500 to-aqua-600 rounded-md shadow-md font-medium button-glow"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Start Contributing
          </motion.button>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Index;
