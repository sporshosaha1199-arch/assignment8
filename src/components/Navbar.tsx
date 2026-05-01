import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';
import { Sun, LogOut, User as UserIcon } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="sticky top-0 z-50 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/90 backdrop-blur-xl shadow-lg shadow-orange-900/5 rounded-3xl border border-white/60 px-6 py-3 flex items-center justify-between"
        >
          {/* Logo - Left Side */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-orange-100/50 p-2 rounded-xl group-hover:bg-orange-100 transition-colors">
                <Sun className="text-orange-500 w-7 h-7 group-hover:rotate-45 transition-transform duration-500" />
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent transform origin-left group-hover:scale-105 transition-transform">
                SunCart
              </span>
            </Link>
          </div>

          {/* Navigation Links - Center (Hidden on mobile) */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {[
              { path: '/', label: 'Home' },
              { path: '/products', label: 'Products' },
              ...(user ? [{ path: '/profile', label: 'My Profile' }] : []),
            ].map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`relative font-semibold text-sm tracking-wide transition-colors ${
                  isActive(link.path) ? 'text-orange-600' : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.div 
                    layoutId="underline" 
                    className="absolute -bottom-2 left-0 w-full h-[3px] bg-orange-500 rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Auth/Profile Actions - Right Side */}
          <div className="flex-shrink-0 flex gap-4 items-center">
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="cursor-pointer flex items-center gap-2 bg-orange-50/50 hover:bg-orange-50 p-1 pr-3 rounded-full border border-orange-100 transition-all">
                  <div className="avatar">
                    <div className="w-9 rounded-full ring-2 ring-orange-200">
                      <img src={user.photoURL} alt={user.name} onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=' + user.name }} />
                    </div>
                  </div>
                  <span className="text-sm font-bold text-gray-800 hidden sm:block">{user.name.split(' ')[0]}</span>
                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-3 shadow-xl menu menu-sm dropdown-content bg-white rounded-2xl w-52 border border-orange-50">
                  <li className="menu-title px-3 py-2 border-b border-gray-100 mb-2">
                    <span className="font-bold text-gray-800 break-all">{user.name}</span>
                  </li>
                  <li>
                    <Link to="/profile" className="hover:bg-orange-50 hover:text-orange-600 font-medium py-2 rounded-xl">
                      <UserIcon size={16} /> Profile Settings
                    </Link>
                  </li>
                  <li>
                    <a onClick={handleLogout} className="text-red-500 hover:bg-red-50 hover:text-red-600 font-medium py-2 rounded-xl mt-1">
                      <LogOut size={16} /> Logout
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex gap-3">
                <Link to="/login" className="px-5 py-2.5 rounded-xl font-bold text-sm text-orange-600 bg-orange-50 hover:bg-orange-100 border border-orange-200/50 transition-all">
                  Login
                </Link>
                <Link to="/register" className="px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-orange-500 to-orange-400 hover:to-orange-500 shadow-md shadow-orange-500/20 transition-all hover:scale-105 active:scale-95 hidden sm:block">
                  Register
                </Link>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
