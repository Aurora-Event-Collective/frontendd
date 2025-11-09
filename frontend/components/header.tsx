"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
              Lūmen<span className="text-[#F5D5C0]">Fest</span>
              <span className="text-sm ml-2 text-gray-300">2025</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-100 hover:text-[#F5D5C0] transition text-sm">
              Home
            </Link>
            <Link href="#" className="text-gray-100 hover:text-[#F5D5C0] transition text-sm">
              About
            </Link>
            <Link href="#" className="text-gray-100 hover:text-[#F5D5C0] transition text-sm">
              Schedule
            </Link>
            <Link href="#" className="text-gray-100 hover:text-[#F5D5C0] transition text-sm">
              Tickets
            </Link>
            <Link href="#" className="text-gray-100 hover:text-[#F5D5C0] transition text-sm">
              Live Polls
            </Link>
            <Link href="#" className="text-gray-100 hover:text-[#F5D5C0] transition text-sm">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-[#F5D5C0] text-[#2C4F50] px-6 py-2 rounded-full font-semibold hover:bg-white transition text-sm">
              Get Tickets
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="#" className="block text-gray-100 hover:text-[#F5D5C0] py-2">
              Home
            </Link>
            <Link href="#" className="block text-gray-100 hover:text-[#F5D5C0] py-2">
              About
            </Link>
            <Link href="#" className="block text-gray-100 hover:text-[#F5D5C0] py-2">
              Schedule
            </Link>
            <Link href="#" className="block text-gray-100 hover:text-[#F5D5C0] py-2">
              Tickets
            </Link>
            <Link href="#" className="block text-gray-100 hover:text-[#F5D5C0] py-2">
              Live Polls
            </Link>
            <Link href="#" className="block text-gray-100 hover:text-[#F5D5C0] py-2">
              Contact
            </Link>
            <button className="w-full bg-[#F5D5C0] text-[#2C4F50] px-6 py-2 rounded-full font-semibold mt-4">
              Get Tickets
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
