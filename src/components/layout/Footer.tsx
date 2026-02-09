import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 border-t-4 border-white mt-20 text-center">
        <h2 className="text-2xl font-shrikhand text-custom-pink mb-2">Made with ☕, 💻, and Taylor Swift Playlist</h2>
        
        <div className="text-xs text-gray-500">
            © {new Date().getFullYear()} All Rights Reserved.
        </div>
    </footer>
  );
};

export default Footer;