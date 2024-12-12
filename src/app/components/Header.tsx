'use client'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-black shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="hidden md:flex space-x-4 items-center mx-auto gap-24">
            <Link href="/" className="hover:text-zinc-500 transition duration-300">Home</Link>
            <Link href="/about" className="hover:text-zinc-500 transition duration-300">About Us</Link>
            <Link href="/services" className="hover:text-zinc-500 transition duration-300">Services</Link>
            <Link href="/teams" className="hover:text-zinc-500 transition duration-300">Teams</Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 space-y-2"
          >
            <Link href="/" className="block hover:text-blue-500 transition duration-300">Home</Link>
            <Link href="/about" className="block hover:text-blue-500 transition duration-300">About Us</Link>
            <Link href="/services" className="block hover:text-blue-500 transition duration-300">Services</Link>
            <Link href="/teams" className="block hover:text-blue-500 transition duration-300">Teams</Link>
          </motion.div>
        )}
      </nav>
    </header>
  )
}

export default Header

