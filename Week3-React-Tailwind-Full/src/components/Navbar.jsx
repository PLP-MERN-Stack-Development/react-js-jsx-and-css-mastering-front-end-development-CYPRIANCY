import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import Button from './Button'

export default function Navbar() {
  const { theme, toggle } = useTheme()
  return (
    <nav className="w-full border-b bg-white dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="font-bold text-lg">Week3 Demo</Link>
          <Link to="/tasks" className="text-sm">Tasks</Link>
          <Link to="/api" className="text-sm">API</Link>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" onClick={toggle}>
            {theme === 'dark' ? 'Light' : 'Dark'}
          </Button>
        </div>
      </div>
    </nav>
  )
}
