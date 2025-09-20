import React from 'react'

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-xl font-bold">GizGram</h1>
      <nav>
        <a href="/" className="mr-4">Home</a>
        <a href="/login" className="mr-4">Login</a>
        <a href="/register">Register</a>
      </nav>
    </header>
  )
}

export default Header
