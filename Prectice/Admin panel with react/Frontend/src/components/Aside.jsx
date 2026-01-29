import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Aside() {

  const navigate = useNavigate()

  return (
    <aside className="w-64 bg-gray-800 border-r border-gray-700 max-h-screen sticky top-0">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Menu</h2>
        <nav className="space-y-2">
          <Link
            to="/dashboard"
            className="block px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors"
          >
            Dashboard
          </Link>
          <Link
            to="/addAdmin"
            className="block px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors"
          >
            Add Admin
          </Link>
          <Link
            to="/viewAdmin"
            className="block px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors"
          >
            View Admin
          </Link>

          <button
            onClick={()=>navigate("/")}
            className="block mt-90 cursor-pointer w-full text-center px-4 py-3 text-white bg-red-600 hover:bg-red-700 hover:text-white rounded-lg transition-colors"
          >
            Logout
          </button>
        </nav>
      </div>
    </aside>
  )
}

