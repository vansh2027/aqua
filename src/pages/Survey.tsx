
import React from 'react';
import Layout from '@/components/Layout';
import SurveyForm from '@/components/Survey/SurveyForm';
import { ClipboardIcon, InfoIcon, AlertTriangle } from 'lucide-react';

const Survey = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Water Survey Submission
        </h1>
        <p className="text-gray-600">
          Contribute to our water monitoring database
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SurveyForm />
        </div>
        
        <div className="lg:col-span-1 space-y-6">
          <div className="glass-card p-6">
            <div className="flex items-center space-x-3 mb-4">
              <ClipboardIcon className="h-5 w-5 text-aqua-600" />
              <h3 className="text-lg font-semibold text-gray-900">Survey Guidelines</h3>
            </div>
            
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-aqua-500 mt-1.5 mr-2"></span>
                <span>Provide accurate GPS coordinates for precise location tracking</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-aqua-500 mt-1.5 mr-2"></span>
                <span>Take water quality measurements at a depth of 30cm below the surface</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-aqua-500 mt-1.5 mr-2"></span>
                <span>Use calibrated equipment for all measurements</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-aqua-500 mt-1.5 mr-2"></span>
                <span>Include details of any visible pollution or contamination</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-aqua-500 mt-1.5 mr-2"></span>
                <span>Submit surveys preferably before 2:00 PM for optimal data comparability</span>
              </li>
            </ul>
          </div>
          
          <div className="glass-card p-6">
            <div className="flex items-center space-x-3 mb-4">
              <InfoIcon className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Parameter Info</h3>
            </div>
            
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-medium text-gray-900 mb-1">pH Level</h4>
                <p className="text-gray-700">Measures acidity/alkalinity. Optimal range: 6.5-8.5</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Dissolved Oxygen</h4>
                <p className="text-gray-700">Amount of O₂ in water. Healthy range: &gt;5mg/L</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Turbidity</h4>
                <p className="text-gray-700">Water clarity. Lower values indicate clearer water.</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Temperature</h4>
                <p className="text-gray-700">Affects oxygen levels and biological activity.</p>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6 border-l-4 border-amber-500">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">Important Notice</h3>
                <p className="text-sm text-gray-700">
                  All data submitted will be reviewed before being added to our database. 
                  Please ensure accuracy of measurements and location information. 
                  Contact us at support@aquasurveyor.org if you encounter any issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Survey;
