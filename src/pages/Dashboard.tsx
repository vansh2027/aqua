
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import DashboardCard from '@/components/Dashboard/DashboardCard';
import WaterQualityChart from '@/components/Dashboard/WaterQualityChart';
import InteractiveMap from '@/components/Map/InteractiveMap';
import { 
  DropletIcon, 
  Thermometer, 
  AlertTriangle, 
  Eye, 
  BarChart3, 
  Activity 
} from 'lucide-react';

const Dashboard = () => {
  return (
    <Layout>
      <div className="mb-6">
        <motion.h1
          className="text-3xl font-bold text-gray-900 mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Water Quality Dashboard
        </motion.h1>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Real-time monitoring of Delhi's water bodies
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard
          title="Monitored Water Bodies"
          value="28"
          icon={<DropletIcon className="h-5 w-5 text-aqua-600" />}
          trend={{ value: 12, label: 'since last month', positive: true }}
          className="col-span-1"
        />
        
        <DashboardCard
          title="Average Temperature"
          value="27.3°C"
          icon={<Thermometer className="h-5 w-5 text-amber-600" />}
          trend={{ value: 2.1, label: 'from last week', positive: false }}
          className="col-span-1"
        />
        
        <DashboardCard
          title="Alert Zones"
          value="4"
          icon={<AlertTriangle className="h-5 w-5 text-red-600" />}
          description="Areas requiring immediate attention"
          className="col-span-1"
        />
        
        <DashboardCard
          title="Recent Surveys"
          value="152"
          icon={<Eye className="h-5 w-5 text-indigo-600" />}
          trend={{ value: 23, label: 'this week', positive: true }}
          className="col-span-1"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <WaterQualityChart className="lg:col-span-2" />
        
        <motion.div 
          className="glass-card p-6 lg:col-span-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Water Quality Summary</h3>
          
          <div className="space-y-5">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">pH Level</span>
                <span className="text-sm font-medium text-gray-900">7.3 (Normal)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-aqua-500 h-2 rounded-full" style={{ width: '73%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Dissolved Oxygen</span>
                <span className="text-sm font-medium text-gray-900">8.2 mg/L (Good)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Turbidity</span>
                <span className="text-sm font-medium text-gray-900">12.7 NTU (Moderate)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-amber-500 h-2 rounded-full" style={{ width: '55%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Nitrate Level</span>
                <span className="text-sm font-medium text-gray-900">4.5 mg/L (Concern)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">E. coli Bacteria</span>
                <span className="text-sm font-medium text-gray-900">230 CFU (Moderate)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-amber-500 h-2 rounded-full" style={{ width: '62%' }}></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <InteractiveMap className="mb-8" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
          className="glass-card p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activities</h3>
            <BarChart3 className="h-5 w-5 text-gray-500" />
          </div>
          
          <div className="space-y-4">
            {[
              { time: '2 hours ago', action: 'Water sample collected from Yamuna River' },
              { time: '5 hours ago', action: 'pH levels normalized at Najafgarh Lake' },
              { time: '12 hours ago', action: 'New survey submitted for Sanjay Lake' },
              { time: '1 day ago', action: 'Water quality alert issued for Bhalswa Lake' },
              { time: '2 days ago', action: 'New monitoring station added at Okhla Bird Sanctuary' }
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="h-2 w-2 mt-2 rounded-full bg-aqua-500 mr-3"></div>
                <div>
                  <p className="text-sm text-gray-900">{item.action}</p>
                  <p className="text-xs text-gray-500">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="glass-card p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Water Quality Trends</h3>
            <Activity className="h-5 w-5 text-gray-500" />
          </div>
          
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-900">Yamuna River</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                  Moderate
                </span>
              </div>
              <p className="text-xs text-gray-600 mb-1">pH level gradually improving</p>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-500 via-amber-500 to-green-500" style={{ width: '65%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-900">Najafgarh Lake</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Poor
                </span>
              </div>
              <p className="text-xs text-gray-600 mb-1">High turbidity, low oxygen levels</p>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-500 via-amber-500 to-green-500" style={{ width: '35%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-900">Sanjay Lake</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Good
                </span>
              </div>
              <p className="text-xs text-gray-600 mb-1">Consistent water quality metrics</p>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-500 via-amber-500 to-green-500" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-900">Bhalswa Lake</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                  Moderate
                </span>
              </div>
              <p className="text-xs text-gray-600 mb-1">Improving dissolved oxygen levels</p>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-500 via-amber-500 to-green-500" style={{ width: '58%' }}></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Dashboard;
