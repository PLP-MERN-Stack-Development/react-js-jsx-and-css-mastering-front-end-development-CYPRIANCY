import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full border-t mt-8 bg-white dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-gray-600 dark:text-gray-300 flex justify-between">
        <div>© {new Date().getFullYear()} Your Name</div>
        <div className="flex gap-4">
          <a href="#">Privacy</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  )
}
