import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-gray-900 border-b border-gray-800 px-6 py-4 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/dashboard">
            <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
          </Link>
        </div>
        <nav className="flex items-center space-x-6">
          <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors">
            Dashboard
          </Link>
          <Link to="/" className="text-gray-300 hover:text-white transition-colors">
            Login
          </Link>
        </nav>
      </div>
    </header>
  )
}