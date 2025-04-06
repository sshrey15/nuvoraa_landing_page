"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

// NavLink Component with Text Slide-Up Animation
const NavLink: React.FC<{ 
  href: string; 
  children: React.ReactNode;
  className?: string;
  hoverText?: string;
  textColor: string;
}> = ({ href, children, className, hoverText, textColor }) => {
  const [isHovered, setIsHovered] = useState(false);
  const displayHoverText = hoverText || children;

  return (
    <Link href={href}>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative overflow-hidden cursor-pointer ${className}`}
        style={{ perspective: '1000px' }}
      >
        <div className="relative h-full overflow-hidden">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: isHovered ? -30 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`inline-block w-full ${textColor}`}
          >
            {children}
          </motion.div>
          <motion.div
            initial={{ y: 30 }}
            animate={{ y: isHovered ? 0 : 30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`absolute left-0 inline-block w-full ${textColor}`}
          >
            {displayHoverText}
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  // Removed unused currentSectionId state
  const [textColor, setTextColor] = useState('text-white');

  const navigationLinks = [
    { path: '/', label: 'Home', hoverText: 'Home' },
    { path: '/story', label: 'Story', hoverText: 'Story' },
    { path: '/services', label: 'Services', hoverText: 'Services' },
    { path: '/work', label: 'Work', hoverText: 'Work' },
  ];

  const isActive = (path: string): boolean => pathname === path;

  // Detect which section is in view and update text color
  useEffect(() => {
    const detectSection = () => {
      // Get all sections with IDs
      const sections = document.querySelectorAll('section[id]');
      
      // Find which section is currently most visible in the viewport
      let currentSection = '';
      let maxVisibility = 0;
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Calculate how much of the section is visible in the viewport (as a percentage)
        const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        const visibilityPercentage = visibleHeight > 0 ? visibleHeight / section.clientHeight : 0;
        
        if (visibilityPercentage > maxVisibility) {
          maxVisibility = visibilityPercentage;
          currentSection = section.id;
        }
      });
      
      // Removed setting currentSectionId as it is unused
      
      // Update text color based on section ID
      if (['2', '4', '6'].includes(currentSection)) {
        setTextColor('text-black');
      } else {
        setTextColor('text-white');
      }
    };

    // Scroll handler that includes section detection
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY;

      setShowNavbar(scrollingUp || currentScrollY < 10);
      setIsScrolledUp(scrollingUp && currentScrollY > 0);
      setLastScrollY(currentScrollY);
      
      detectSection();
    };

    // Initial detection on mount
    detectSection();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 w-full p-10 z-50 ${textColor} p-4 
        ${isScrolledUp ? 'bg-transparent' : 'bg-transparent'}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink href="/" textColor={textColor}>
          <span className={`text-2xl ${textColor === 'text-black' ? 'text-black' : 'text-[#E0D9CD]'} font-bold`} style={{ fontFamily: 'aurora' }}>
            NUVORAA
          </span>
        </NavLink>

        {/* Hamburger Button */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          aria-label="Toggle menu"
        >
          <motion.svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </motion.svg>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex md:flex-row md:space-x-8 items-center">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.path}
              href={link.path}
              hoverText={link.hoverText}
              textColor={textColor}
              className={`text-lg ${isActive(link.path) ? textColor : textColor}`}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            href="/contact"
            hoverText="Contact Us"
            textColor={textColor}
            className={`text-lg border-b-2 ${textColor === 'text-black' ? 'border-black' : 'border-white'} transition-all duration-300`}
          >
            Get Offer Today
          </NavLink>
        </div>

        {/* Mobile Nav Links */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`md:hidden flex flex-col absolute top-16 left-0 w-full ${textColor === 'text-black' ? 'bg-white' : 'bg-black'} py-4 mt-10 px-4 space-y-4 z-50`}
            >
              {navigationLinks.map((link) => (
                <NavLink
                  key={link.path}
                  href={link.path}
                  hoverText={link.hoverText}
                  textColor={textColor}
                  className={`text-lg ${isActive(link.path) ? 'text-orange-500' : textColor}`}
                >
                  {link.label}
                </NavLink>
              ))}
              <NavLink
                href="/contact"
                hoverText="Contact Us"
                textColor={textColor}
                className={`text-lg border-b-2 ${textColor === 'text-black' ? 'border-black' : 'border-white'} hover:border-orange-500 transition-all duration-300`}
              >
                Get Offer Today
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;