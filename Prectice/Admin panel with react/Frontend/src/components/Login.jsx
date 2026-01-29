import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios'

export default function Login() {

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-xl border border-gray-700 p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Admin Login</h1>
          <p className="text-gray-400">Sign in to your account</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="w-4 h-4 bg-gray-700 border-gray-600 rounded text-blue-600 focus:ring-blue-500" />
              <span className="ml-2 text-sm text-gray-300">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-500 hover:text-blue-400">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Don't have an account?{' '}
            <a href="#" className="text-blue-500 hover:text-blue-400">
              Contact administrator
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}


