import React from 'react'

export const Hero = () => {
    return (
        <div>
           <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-gray-100">
      {/* Left Content */}
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-900">Stay Connected, Stay Safe</h1>
        <p className="mt-4 text-lg text-gray-600">
          Real-time location sharing with privacy-first features.
        </p>
        <button className="mt-6 px-6 py-3 text-lg font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Try Now
        </button>
      </div>

      {/* Right Image */}
      <img
        src="https://plus.unsplash.com/premium_photo-1666739387996-2a45b0a5dab7?q=80&w=3153&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds"
        alt="Hero"
        className="w-full md:w-1/2 mt-8 md:mt-0 rounded-lg shadow-lg"
      />
    </section>
        </div>
    )
}

export default Hero