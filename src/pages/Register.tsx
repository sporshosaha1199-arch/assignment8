import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';
import { toast } from 'react-toastify';
import { Sun, Mail, Lock, User, Link as LinkIcon, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [password, setPassword] = useState('');
  
  const { register, googleLogin, loading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password || !photoURL) {
      toast.error('Please fill all fields');
      return;
    }
    
    try {
      await register(name, email, photoURL, password);
      toast.success('Registration successful! Please login.');
      navigate('/login');
    } catch (err: any) {
      toast.error(err.message || 'Failed to register');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      toast.success('Logged in with Google!');
      navigate('/');
    } catch (err: any) {
      toast.error(err.message || 'Google Auth failed');
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row-reverse border border-orange-100"
      >
        {/* Left Side: Illustration / Branding (Reversed position visually) */}
        <div className="md:w-5/12 bg-gradient-to-br from-yellow-400 via-orange-400 to-amber-600 p-12 text-white flex flex-col justify-between relative overflow-hidden hidden md:flex">
          <div className="absolute top-0 left-0 -ml-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 -mr-16 -mb-16 w-80 h-80 bg-orange-800 opacity-20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex justify-end">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <span className="text-3xl font-black tracking-tight order-first">SunCart</span>
              <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                <Sun className="text-white w-8 h-8 group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </Link>
          </div>

          <div className="relative z-10 mt-12 mb-auto text-right">
            <h2 className="text-4xl font-extrabold leading-tight mb-4 animate__animated animate__fadeInUp">
              Join the <br/> summer club.
            </h2>
            <p className="text-orange-50 text-lg animate__animated animate__fadeInUp animate__delay-1s">
              Create an account for exclusive deals, early updates, and a faster checkout experience.
            </p>
          </div>

          
        </div>

        {/* Right Side / Form */}
        <div className="md:w-7/12 p-[30px] flex flex-col justify-center bg-white relative">
          <div className="md:hidden flex justify-center mb-8">
             <div className="bg-orange-100 p-4 rounded-full">
                <Sun className="text-orange-500 w-12 h-12" />
             </div>
          </div>

          <div className="text-center md:text-left mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Create Account</h2>
            <p className="text-gray-500 text-lg">Sign up to get started with SunCart.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                </div>
                <input 
                  type="text" 
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all font-medium"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                </div>
                <input 
                  type="email" 
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all font-medium"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Photo URL</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <LinkIcon className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                </div>
                <input 
                  type="url" 
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all font-medium"
                  placeholder="https://example.com/photo.jpg"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                </div>
                <input 
                  type="password" 
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all font-medium" 
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            
            <button 
              type="submit" 
              className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold tracking-wide flex justify-center items-center gap-2 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-orange-500/30 hover:shadow-xl mt-4"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner text-white"></span>
              ) : (
                <>Create Account <ArrowRight size={18} /></>
              )}
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="px-4 text-gray-400 font-medium text-sm">or sign up with</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          <button 
            type="button" 
            onClick={handleGoogleLogin} 
            className="w-full py-3.5 bg-white border-2 border-gray-100 hover:border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl font-bold flex justify-center items-center gap-3 transition-all shadow-sm"
            disabled={loading}
          >
            <svg viewBox="0 0 48 48" className="w-6 h-6">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
              <path fill="none" d="M0 0h48v48H0z"></path>
            </svg>
            Google
          </button>

          <p className="text-center mt-8 text-gray-600 font-medium">
            Already have an account? <Link to="/login" className="text-orange-600 font-bold hover:text-orange-700 transition-colors">Login now</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
