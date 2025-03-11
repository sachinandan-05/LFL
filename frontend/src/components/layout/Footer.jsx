import React from 'react'
export function Footer() {
    return (    
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-6xl mx-auto px-6">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* About Section */}
            <div>
              <h3 className="text-xl font-semibold text-white">Live Friend Locator</h3>
              <p className="mt-2 text-gray-400">
                Stay connected with friends in real-time while keeping privacy in control.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold text-white">Quick Links</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
                <li><a href="/how-it-works" className="hover:text-blue-400">How It Works</a></li>
                <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
                <li><a href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</a></li>
              </ul>
            </div>
  
            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold text-white">Follow Us</h3>
              <div className="mt-3 flex space-x-4">
                <a href="#" className="hover:text-blue-400"><facebook/> Facebook</a>
                <a href="#" className="hover:text-blue-400"><twitter/> Twitter</a>
                <a href="#" className="hover:text-blue-400">
  <img src="/brand-instagram.svg" alt="Instagram Logo" className="w-6 h-6 text-white" />
  Instagram
</a>

              </div>
            </div>
  
            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-semibold text-white">Stay Updated</h3>
              <p className="mt-2 text-gray-400">Subscribe to our newsletter for updates.</p>
              <div className="mt-3 flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 text-gray-900 rounded-l-lg focus:outline-none"
                />
                <button className="px-4 bg-blue-600 text-white rounded-r-lg hover:bg-blue-500">
                  Subscribe
                </button>
              </div>
            </div>
  
          </div>
  
          {/* Copyright */}
          <div className="mt-10 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Live Friend Locator. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  export default Footer