import React from 'react'

export default function Button({ variant = 'primary', children, ...props }) {
  const base = 'px-4 py-2 rounded-md font-medium transition-smooth'
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-white',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  }
  return (
    <button className={`${base} ${variants[variant] || variants.primary}`} {...props}>
      {children}
    </button>
  )
}
