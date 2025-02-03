import { FiActivity, FiHome, FiSettings, FiUsers, FiCalendar, FiBarChart2, FiGlobe } from 'react-icons/fi';
import { FaRegBuilding } from 'react-icons/fa';
import Navbar from './component/Navbar';

export default function ChannelManager() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
   <Navbar />


       
      
    </div>
  );
}

function StatCard({ icon: Icon, title, value }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-2xl font-bold mt-2">{value}</p>
        </div>
        <div className="bg-blue-100 p-3 rounded-full">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
      </div>
    </div>
  );
}

function QuickAccessCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 cursor-pointer">
      <div className="flex items-start space-x-4">
        <div className="bg-blue-100 p-3 rounded-full">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{title}</h4>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
}