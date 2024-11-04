import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logo Section */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">Video Call Pear to Pear Connection</h2>
        </div>

        {/* Navigation Links */}
        <div className="mb-6 md:mb-0 flex space-x-4">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#blog" className="hover:text-white">Blog</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

        {/* Contact Information */}
        <div className="text-center md:text-right mb-6 md:mb-0">
          <p className="text-gray-400">info@mycompany.com</p>
          <p className="text-gray-400">+123 456 7890</p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 text-2xl">
          <a href="https://facebook.com" className="hover:text-white" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" className="hover:text-white" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" className="hover:text-white" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-6 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} gautamsingh@example.com. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
