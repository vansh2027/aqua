
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { DropletIcon, BarChart3Icon, MapPinIcon, ClipboardIcon } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      title: 'Real-time Monitoring',
      description: 'Track water quality metrics in real-time across all monitored water bodies in Delhi.',
      icon: <DropletIcon className="h-6 w-6 text-aqua-500" />
    },
    {
      title: 'Interactive Map',
      description: 'Visualize water bodies on an interactive map with detailed quality indicators.',
      icon: <MapPinIcon className="h-6 w-6 text-aqua-500" />
    },
    {
      title: 'Data Analytics',
      description: 'Analyze trends and patterns in water quality data with advanced visualization tools.',
      icon: <BarChart3Icon className="h-6 w-6 text-aqua-500" />
    },
    {
      title: 'Survey Submission',
      description: 'Contribute to water monitoring by submitting your own observations and measurements.',
      icon: <ClipboardIcon className="h-6 w-6 text-aqua-500" />
    }
  ];
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-aqua-50/50 to-transparent -z-10"></div>
        
        <div className="max-w-5xl mx-auto text-center">
          <div>
            <span className="inline-block px-3 py-1 text-sm font-medium text-aqua-700 bg-aqua-50 rounded-full mb-6">
              Water Quality Monitoring
            </span>
          </div>
          
          <h1 
            className="hero-text mb-6"
          >
            Preserving Delhi's Water Bodies Through Modern Monitoring
          </h1>
          
          <p 
            className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto"
          >
            AquaSurveyor provides comprehensive, real-time monitoring of Delhi's lakes, rivers, and wetlands, 
            enabling data-driven conservation efforts and community involvement.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button
              onClick={() => navigate('/dashboard')}
              className="px-6 py-3 text-white bg-gradient-to-r from-aqua-500 to-aqua-600 rounded-md shadow-md font-medium"
            >
              Explore Dashboard
            </button>
            
            <button
              onClick={() => navigate('/survey')}
              className="px-6 py-3 text-aqua-700 bg-white border border-aqua-200 rounded-md shadow-sm font-medium"
            >
              Submit Survey
            </button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto">
          <div 
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Water Monitoring</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform provides end-to-end tools for monitoring, analyzing, and preserving Delhi's precious water resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="glass-card p-6"
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
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 sm:py-24">
        <div 
          className="max-w-5xl mx-auto p-8 sm:p-12 glass-card bg-gradient-to-r from-aqua-500/10 to-aqua-600/10 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Water Conservation Efforts</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Be part of the community working to protect and preserve Delhi's water bodies for future generations.
            Submit your observations and help us build a comprehensive database.
          </p>
          
          <button
            onClick={() => navigate('/sign-in')}
            className="px-6 py-3 text-white bg-gradient-to-r from-aqua-500 to-aqua-600 rounded-md shadow-md font-medium"
          >
            Sign In to Contribute
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
