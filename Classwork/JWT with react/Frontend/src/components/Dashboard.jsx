import React from 'react'
import Header from './Header'

export default function Dashboard() {
  return (
    <div className="flex flex-col bg-gray-100">
      <Header />
      <div className="bg-gray-100">
        <section className="bg-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Build Modern Websites</h2>
            <p className="text-lg mb-6">Create fast and responsive designs using Tailwind CSS</p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
              Get Started
            </button>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-bold mb-3">Fast</h3>
              <p className="text-gray-600">Optimized performance for better user experience</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-bold mb-3">Responsive</h3>
              <p className="text-gray-600">Fully responsive design for all devices</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-bold mb-3">Modern</h3>
              <p className="text-gray-600">Clean and modern UI components</p>
            </div>

          </div>
        </section>

        <section className="bg-gray-200 py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe</h2>
            <p className="text-gray-600 mb-6">Get updates about new designs</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <input type="email" placeholder="Enter your email"
                className="px-4 py-3 rounded-lg border w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>
        </section>
        <footer className="bg-white py-6 shadow-inner">
          <div className="max-w-7xl mx-auto px-6 text-center text-gray-600">
            © 2026 MyWebsite. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  )
}
