import React from 'react'

export const About = () => {
    const team = [
      { name: "Sachinandan", role: "Founder", img: "../public/founder.jpeg" },
      { name: "Rohith", role: "CTO", img: "/rohith.png" },
    ];
  
    return (
      <div className="bg-gray-100 text-gray-900">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center bg-blue-600 text-white py-20 px-6">
          <h1 className="text-5xl font-bold">About Live Friend Locator</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Stay connected with your friends in real time while ensuring privacy and security.
          </p>
        </section>
  
        {/* Our Mission */}
        <section className="py-16 px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-600">
            We believe in helping people stay connected safely. Whether you're meeting friends, traveling, 
            or ensuring loved ones' safety, our app provides real-time location tracking with privacy-first controls.
          </p>
        </section>
  
        {/* Key Features */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800">Why Choose Live Friend Locator?</h2>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">🔒 Privacy First</h3>
              <p className="mt-2 text-gray-600">Control who sees your location with privacy settings.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">📍 Real-Time Tracking</h3>
              <p className="mt-2 text-gray-600">Track friends & family on a live map securely.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">🚨 Geofencing Alerts</h3>
              <p className="mt-2 text-gray-600">Get notified when someone enters or leaves a zone.</p>
            </div>
          </div>
        </section>
  
        {/* The Team */}
        <section className="py-16 px-6 text-center bg-gray-200">
          <h2 className="text-3xl font-bold">Meet Our Team</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md w-48">
                <img src={member.img} alt={member.name} className="w-24 h-24 mx-auto rounded-full" />
                <h3 className="mt-4 font-semibold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* Call-to-Action */}
        <section className="py-16 bg-blue-600 text-white text-center">
          <h2 className="text-3xl font-bold">Ready to Stay Connected?</h2>
          <p className="mt-4 text-lg">Start tracking your friends with privacy-first controls today.</p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md">
            Get Started
          </button>
        </section>
      </div>
    );
  }
  export default About
  