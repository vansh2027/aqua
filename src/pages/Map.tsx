
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import InteractiveMap from '@/components/Map/InteractiveMap';
import { MapPinIcon, Filter, List, CalendarIcon } from 'lucide-react';

const waterBodies = [
  { id: 1, name: 'Yamuna River', type: 'river', status: 'moderate', lastUpdated: '2023-10-15' },
  { id: 2, name: 'Najafgarh Lake', type: 'lake', status: 'poor', lastUpdated: '2023-10-12' },
  { id: 3, name: 'Sanjay Lake', type: 'lake', status: 'good', lastUpdated: '2023-10-18' },
  { id: 4, name: 'Bhalswa Lake', type: 'lake', status: 'moderate', lastUpdated: '2023-10-14' },
  { id: 5, name: 'Okhla Bird Sanctuary', type: 'wetland', status: 'good', lastUpdated: '2023-10-17' },
  { id: 6, name: 'Hauz Khas Lake', type: 'lake', status: 'good', lastUpdated: '2023-10-16' },
  { id: 7, name: 'Delhi Canals', type: 'canal', status: 'poor', lastUpdated: '2023-10-13' },
  { id: 8, name: 'Tilyar Lake', type: 'lake', status: 'moderate', lastUpdated: '2023-10-11' },
];

const Map = () => {
  const [activeFilters, setActiveFilters] = useState({
    types: [] as string[],
    status: [] as string[],
  });
  const [searchQuery, setSearchQuery] = useState('');

  const handleTypeFilter = (type: string) => {
    setActiveFilters(prev => {
      const types = prev.types.includes(type)
        ? prev.types.filter(t => t !== type)
        : [...prev.types, type];
      return { ...prev, types };
    });
  };

  const handleStatusFilter = (status: string) => {
    setActiveFilters(prev => {
      const statusArray = prev.status.includes(status)
        ? prev.status.filter(s => s !== status)
        : [...prev.status, status];
      return { ...prev, status: statusArray };
    });
  };

  const filteredWaterBodies = waterBodies.filter(wb => {
    const matchesType = activeFilters.types.length === 0 || activeFilters.types.includes(wb.type);
    const matchesStatus = activeFilters.status.length === 0 || activeFilters.status.includes(wb.status);
    const matchesSearch = searchQuery === '' || wb.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesStatus && matchesSearch;
  });

  const statusColors = {
    good: 'bg-green-500',
    moderate: 'bg-amber-500',
    poor: 'bg-red-500',
  };

  return (
    <Layout>
      <div className="mb-6">
        <motion.h1
          className="text-3xl font-bold text-gray-900 mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Water Bodies Map
        </motion.h1>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Interactive visualization of Delhi's water resources
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <motion.div
          className="lg:col-span-1 space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Search & Filter</h3>
              <Filter className="h-5 w-5 text-gray-500" />
            </div>

            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search water bodies..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aqua-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <MapPinIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-900 mb-3">Filter by Type</h4>
              <div className="flex flex-wrap gap-2">
                {['lake', 'river', 'wetland', 'canal'].map((type) => (
                  <button
                    key={type}
                    onClick={() => handleTypeFilter(type)}
                    className={`px-3 py-1 text-xs font-medium rounded-full transition-colors duration-200 ${
                      activeFilters.types.includes(type)
                        ? 'bg-aqua-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-aqua-100'
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-3">Filter by Status</h4>
              <div className="flex flex-wrap gap-2">
                {['good', 'moderate', 'poor'].map((status) => (
                  <button
                    key={status}
                    onClick={() => handleStatusFilter(status)}
                    className={`px-3 py-1 text-xs font-medium rounded-full transition-colors duration-200 ${
                      activeFilters.status.includes(status)
                        ? 'bg-gray-800 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className={`inline-block w-2 h-2 rounded-full ${statusColors[status as keyof typeof statusColors]} mr-1.5`}></span>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Water Body List</h3>
              <List className="h-5 w-5 text-gray-500" />
            </div>
            
            <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
              {filteredWaterBodies.length > 0 ? (
                filteredWaterBodies.map((wb) => (
                  <motion.div 
                    key={wb.id}
                    className="p-3 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{wb.name}</h4>
                        <p className="text-xs text-gray-500 capitalize">{wb.type}</p>
                      </div>
                      <span className={`inline-flex h-2 w-2 rounded-full ${statusColors[wb.status as keyof typeof statusColors]}`}></span>
                    </div>
                    <div className="mt-2 flex items-center text-xs text-gray-500">
                      <CalendarIcon className="h-3 w-3 mr-1" />
                      Updated: {new Date(wb.lastUpdated).toLocaleDateString()}
                    </div>
                  </motion.div>
                ))
              ) : (
                <p className="text-sm text-gray-500 text-center py-4">No water bodies match your filters</p>
              )}
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="lg:col-span-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <InteractiveMap className="h-full" />
        </motion.div>
      </div>
    </Layout>
  );
};

export default Map;
