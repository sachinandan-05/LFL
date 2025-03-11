import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="p-4">
            <div className="container mx-auto px-10 py-5 flex justify-between items-center">
                <div className="text-black text-lg font-bold font-caderville">Ping me</div>
                <div className="space-x-8 w-1/3 justify-between  flex  flex-row mx-4">
                    <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                        <Link to="/" className="text-black hover:text-blue-200 font-caderville cursor-pointer justify-between px-4 py-2 w-20 text-black">Features</Link>
                        {dropdownOpen && (
                            <div className="absolute left-0w-64  border border-gray-200 shadow-lg rounded-md z-10">
                                <Link to="/feature1" className="block px-4 py-2 text-black hover:bg-gray-100">Feature 1</Link>
                                <Link to="/feature2" className="block px-4 py-2 text-black hover:bg-gray-100">Feature 2</Link>
                                <Link to="/feature3" className="block px-4 py-2 text-black hover:bg-gray-100">Feature 3</Link>
                            </div>
                        )}
                    </div>
                    <div className="space-x-8 flex justify-between ">
                        <Link to="/about" className="text-black hover:text-gray-400">About</Link>
                        <Link to="/services" className="text-black hover:text-gray-400">Services</Link>
                        <Link to="/contact" className="text-black hover:text-gray-400">How to Use</Link>
                    </div>
                    
                   
                </div>
                <div>
                    <button className="text-black hover:text-blue-200 font-caderville border border-white rounded-full px-4 py-2 bg-blue-500 text-white">Sign In</button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;