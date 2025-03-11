import React from 'react'

export const HowItWorks = () => {
    const steps = [
      {
        title: "1. Sign Up & Log In",
        description: "Create an account using your email, Google, or phone number.",
        icon: "📝",
      },
      {
        title: "2. Add Your Friends",
        description: "Send friend requests to start sharing locations securely.",
        icon: "🤝",
      },
      {
        title: "3. Enable Location Sharing",
        description: "Choose when and with whom to share your real-time location.",
        icon: "📍",
      },
      {
        title: "4. Get Alerts & Notifications",
        description: "Receive geofencing alerts when friends enter or leave an area.",
        icon: "🚨",
      },
      {
        title: "5. Use Ghost Mode (Optional)",
        description: "Hide your location temporarily for privacy control.",
        icon: "👻",
      },
      {
        title: "6. Enjoy AR Navigation (Optional)",
        description: "Use Augmented Reality (AR) to find friends easily.",
        icon: "🕶️",
      },
    ];
  
    return (
      <div className="bg-gray-100 text-gray-900 min-h-screen py-10 px-6">
        {/* Hero Section */}
        <section className="text-center bg-blue-600 text-white py-20 px-6">
          <h1 className="text-5xl font-bold">How It Works</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Learn how to use Live Friend Locator to stay connected with your friends in real time.
          </p>
        </section>
  
        {/* Steps Section */}
        <section className="max-w-5xl mx-auto mt-12">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center bg-white p-6 mb-6 rounded-lg shadow-md">
              <div className="text-3xl mr-6">{step.icon}</div>
              <div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </section>
  
        {/* Call-to-Action */}
        <section className="text-center py-16">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mt-4 text-lg">Sign up now and start tracking your friends securely!</p>
          
        </section>
      </div>
    );
  }
  export default HowItWorks