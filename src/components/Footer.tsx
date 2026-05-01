import React from 'react';
import {
  Sun,
  Instagram,
  Twitter,
  Facebook,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-20 relative">
      {/* Decorative Top Wave */}
      <div className="bg-gradient-to-br from-orange-800 via-orange-700 to-amber-700 text-orange-50 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand & Socials */}
            <div className="space-y-4">
              <Link
                to="/"
                className="flex items-center gap-2 text-3xl font-black text-white mb-4 hover:opacity-90 transition-opacity"
              >
                <Sun size={32} className="text-yellow-300" />
                SunCart
              </Link>
              <p className="text-orange-100/90 leading-relaxed font-medium">
                Premium Summer Essentials.
                <br />
                Providing you the best gear for your sunny days since 2026.
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-orange-600 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-orange-600 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-orange-600 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3 font-medium">
                <li>
                  <Link
                    to="/"
                    className="text-orange-100/80 hover:text-white hover:underline transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-300"></span>{' '}
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="text-orange-100/80 hover:text-white hover:underline transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-300"></span>{' '}
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile"
                    className="text-orange-100/80 hover:text-white hover:underline transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-300"></span>{' '}
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="text-orange-100/80 hover:text-white hover:underline transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-300"></span>{' '}
                    Register Account
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
              <ul className="space-y-4 font-medium">
                <li className="flex items-start gap-3 group">
                  <MapPin
                    size={22}
                    className="text-yellow-300 shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-orange-100/90 leading-tight">
                    Your location,
                    <br />
                    Dhaka, Bangladesh
                  </span>
                </li>
                <li className="flex items-center gap-3 group">
                  <Phone
                    size={22}
                    className="text-yellow-300 shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-orange-100/90">+1 (800) 123-4567</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <Mail
                    size={22}
                    className="text-yellow-300 shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-orange-100/90">hello@suncart.com</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Newsletter</h3>
              <p className="text-orange-100/90 mb-4 font-medium">
                Subscribe to get special offers, free giveaways, and updates.
              </p>
              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-xl bg-orange-700/30 border border-orange-400/50 text-white placeholder-orange-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:bg-orange-800/40 transition-all font-medium"
                />
                <button
                  type="button"
                  className="w-full px-4 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-orange-900 font-bold uppercase tracking-wide transition-colors shadow-lg shadow-orange-700/20"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 border-t border-orange-400/40 text-center flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-orange-100/80 text-sm font-medium">
              &copy; {new Date().getFullYear()} SunCart. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm font-medium text-orange-100/80">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Return Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
