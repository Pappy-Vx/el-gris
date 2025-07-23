"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top banner */}
      <div className="bg-[#1d79bc] text-white text-center py-1 text-sm">
        Intensifying the vision, Keeping the promise.
      </div>

      {/* Cookie notice */}
      <div className="bg-[#202936] text-white text-center py-3 px-4 text-sm relative">
        <span>This website collects cookies to analyze our website traffic and performance; we never collect any personal data.</span>
        <Link href="#" className="text-blue-300 underline ml-2">Click here to read our privacy notice.</Link>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-600 text-white w-6 h-6 rounded flex items-center justify-center text-xs font-bold">
          ✕
        </button>
      </div>

      {/* Main navigation */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="El-gris Logo"
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-[#1d79bc] transition-colors">
                Home
              </Link>

              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-[#1d79bc] transition-colors">
                  Product & Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>

              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-[#1d79bc] transition-colors">
                  About Scib
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>

              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-[#1d79bc] transition-colors">
                  Industries
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>

              <Link href="/careers" className="text-gray-700 hover:text-[#1d79bc] transition-colors">
                Careers
              </Link>

              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-[#1d79bc] transition-colors">
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>

              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-[#1d79bc] transition-colors">
                  Contact Us
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
            </nav>

            {/* Mobile menu button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link href="/" className="text-gray-700 hover:text-[#1d79bc] transition-colors">
                    Home
                  </Link>
                  <Link href="/products" className="text-gray-700 hover:text-[#1d79bc] transition-colors">
                    Product & Services
                  </Link>
                  <Link href="/about" className="text-gray-700 hover:text-[#1d79bc] transition-colors">
                    About Scib
                  </Link>
                  <Link href="/industries" className="text-gray-700 hover:text-[#1d79bc] transition-colors">
                    Industries
                  </Link>
                  <Link href="/careers" className="text-gray-700 hover:text-[#1d79bc] transition-colors">
                    Careers
                  </Link>
                  <Link href="/resources" className="text-gray-700 hover:text-[#1d79bc] transition-colors">
                    Resources
                  </Link>
                  <Link href="/contact" className="text-gray-700 hover:text-[#1d79bc] transition-colors">
                    Contact Us
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
}
