import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';
import { toast } from 'react-toastify';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function UpdateProfile() {
  const { user, updateProfile, loading } = useAuth();
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setPhotoURL(user.photoURL || '');
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !photoURL) {
      toast.error('Name and Photo URL are required');
      return;
    }

    try {
      await updateProfile(name, photoURL);
      toast.success('Profile updated successfully!');
      navigate('/profile');
    } catch (err: any) {
      toast.error('Failed to update profile');
    }
  };

  if (!user) return null;

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl shadow-xl border border-orange-100 p-8"
      >
        <button onClick={() => navigate('/profile')} className="btn btn-ghost btn-sm mb-6 -ml-3 text-gray-500 hover:text-orange-600">
          <ArrowLeft size={16} className="mr-1" /> Back
        </button>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Update Information</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-6 items-center mb-8 border border-orange-50 bg-orange-50/50 p-6 rounded-2xl">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-orange-200 shadow-md bg-white">
                <img src={photoURL || 'https://ui-avatars.com/api/?name=User'} alt="Preview" onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=' + name }} />
              </div>
            </div>
            <div className="text-sm text-gray-500 text-center sm:text-left">
              Image Preview<br/>
              Updates live as you type below.
            </div>
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold text-gray-700">Full Name</span>
            </label>
            <input 
              type="text" 
              className="input input-bordered w-full focus:ring-2 focus:ring-orange-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold text-gray-700">Photo URL</span>
            </label>
            <input 
              type="url" 
              className="input input-bordered w-full focus:ring-2 focus:ring-orange-500"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
            <label className="label">
              <span className="label-text-alt text-gray-400">Must be a valid image URL.</span>
            </label>
          </div>

          <div className="pt-4 flex gap-4">
            <button 
              type="button" 
              className="btn btn-outline flex-1"
              onClick={() => navigate('/profile')}
              disabled={loading}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn bg-orange-500 hover:bg-orange-600 border-none text-white flex-1"
              disabled={loading}
            >
              {loading ? <span className="loading loading-spinner"></span> : 'Save Changes'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
