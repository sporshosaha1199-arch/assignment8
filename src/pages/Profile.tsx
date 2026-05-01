import React from 'react';
import { useAuth } from '../auth/AuthProvider';
import { Link } from 'react-router-dom';
import { Edit2, Mail, User as UserIcon } from 'lucide-react';
import { motion } from 'motion/react';

export default function Profile() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-lg border border-orange-100 overflow-hidden"
      >
        <div className="h-40 bg-gradient-to-r from-orange-400 to-amber-400 relative"></div>
        
        <div className="px-8 pb-12">
          <div className="relative -mt-20 flex justify-between items-end mb-8">
            <div className="avatar">
              <div className="w-32 rounded-full ring-4 ring-white shadow-xl bg-white">
                <img src={user.photoURL} alt={user.name} onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=' + user.name }} />
              </div>
            </div>
            
            <Link to="/update-profile" className="btn btn-outline border-orange-200 text-orange-600 hover:bg-orange-50 hover:border-orange-300">
              <Edit2 size={16} className="mr-2" />
              Edit Profile
            </Link>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-gray-500 font-medium flex items-center gap-2 mt-1">
                <Mail size={16} /> {user.email}
              </p>
            </div>

            <div className="divider"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-orange-50 p-6 rounded-2xl flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-orange-500 shadow-sm">
                  <UserIcon />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Account Status</h3>
                  <p className="text-sm text-gray-600">Active member</p>
                  <div className="badge badge-success mt-2">Verified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
