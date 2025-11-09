"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#2C4F50] text-white py-16 overflow-x-hidden w-full">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Lūmen<span className="text-[#F5D5C0]">Fest</span>
            </h3>
            <p className="text-gray-300 text-sm mb-6">Where Worlds Meet. Where Tet Shines Brighter.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-300 hover:text-[#F5D5C0] transition">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#F5D5C0] transition">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#F5D5C0] transition">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#F5D5C0] transition text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#F5D5C0] transition text-sm">
                  Event Schedule
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#F5D5C0] transition text-sm">
                  Buy Tickets
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#F5D5C0] transition text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 text-gray-300">
                <svg className="w-5 h-5 flex-shrink-0 text-[#F5D5C0]" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>123 Festival Plaza, District 1, Ho Chi Minh City</span>
              </li>

              <li className="flex gap-3 text-gray-300">
                <svg className="w-5 h-5 flex-shrink-0 text-[#F5D5C0]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.26.559.738 1.391 1.848 2.5 1.112 1.112 1.942 1.588 2.502 1.848l.774-1.549a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.57c-.11 0-.222 0-.332-.003C9.274 17.997 6.159 15.157 3.165 12.163 .172 9.17-1.737 6.055.003 3.9.003 3.777 0 3.666 0 3.556V1a1 1 0 011-1h2.153z" />
                </svg>
                <span>+84 123 456 789</span>
              </li>

              <li className="flex gap-3 text-gray-300">
                <svg className="w-5 h-5 flex-shrink-0 text-[#F5D5C0]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>info@lumenfest.com</span>
              </li>
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4">Get the latest news and exclusive offers</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#F5D5C0]"
              />
              <button
                type="submit"
                className="bg-[#F5D5C0] text-[#2C4F50] px-6 py-3 rounded-full font-semibold hover:bg-white transition text-sm"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-gray-400 text-sm text-center">© 2025 LūmenFest. Where Worlds Meet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
