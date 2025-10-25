'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

interface ResponsiveNavProps {
  currentPage?: string;
}

export default function ResponsiveNav({ currentPage }: ResponsiveNavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  
  // Determine current page from pathname
  const getCurrentPage = () => {
    // Remove trailing slash for consistent matching
    const cleanPath = pathname.replace(/\/$/, '') || '/';
    
    switch (cleanPath) {
      case '/':
        return 'Home';
      case '/about':
        return 'About';
      case '/donate':
        return 'Donate';
      case '/events':
        return 'Events';
      case '/contact':
        return 'Contact';
      default:
        return 'Home';
    }
  };
  
  const activePage = getCurrentPage();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Donate', href: '/donate' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' }
  ];

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 900);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Fade-out overlay to hide content scrolling behind header */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '120px',
        zIndex: 999,
        background: 'linear-gradient(to bottom, rgba(11, 35, 65, 1) 0%, rgba(11, 35, 65, 0.95) 30%, rgba(11, 35, 65, 0.8) 70%, transparent 100%)',
        pointerEvents: 'none'
      }} />
      
      <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        padding: '1rem 0',
        boxShadow: '0 8px 32px rgba(11, 35, 65, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        margin: '1rem',
        width: 'calc(100% - 2rem)',
      }}
    >
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}
          >
            <Logo size="md" animated={true} showText={false} />
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <span style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#0B2341',
                whiteSpace: 'nowrap',
                lineHeight: 1.1,
                textAlign: 'center'
              }}>
                Treasure Coast
              </span>
              <span style={{
                fontSize: '1rem',
                fontWeight: '500',
                color: '#6B7280',
                whiteSpace: 'nowrap',
                lineHeight: 1.2,
                letterSpacing: '0.1em',
                textAlign: 'center'
              }}>
                Scavengers Inc.
              </span>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div style={{
          display: isMobile ? 'none' : 'flex',
          gap: '0.5rem',
          alignItems: 'center'
        }}>
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              whileHover={{
                scale: 1.05,
                color: '#10B6C6'
              }}
              style={{
                position: 'relative'
              }}
            >
              <Link
                href={item.href}
                style={{
                  color: item.name === activePage ? '#10B6C6' : '#0B2341',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  padding: '0.5rem 1rem',
                  borderRadius: '25px',
                  display: 'block',
                  position: 'relative',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  if (item.name !== activePage) {
                    e.currentTarget.style.color = '#10B6C6';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (item.name !== activePage) {
                    e.currentTarget.style.color = '#0B2341';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                {item.name}
                {/* Active page underline */}
                {item.name === activePage && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '100%',
                      height: '2px',
                      background: 'linear-gradient(90deg, #10B6C6, #FF6A4A)',
                      borderRadius: '1px'
                    }}
                  />
                )}
                {/* Hover underline for non-active pages */}
                {item.name !== activePage && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileHover={{ width: '100%', opacity: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '0%',
                      height: '2px',
                      background: 'linear-gradient(90deg, #10B6C6, #FF6A4A)',
                      borderRadius: '1px'
                    }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          <Link href="/events/">
            <motion.button
              whileHover={{
                scale: 1.02,
                boxShadow: '0 12px 30px rgba(16, 182, 198, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'linear-gradient(135deg, #10B6C6, #0B2341)',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '25px',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(16, 182, 198, 0.3)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                whiteSpace: 'nowrap'
              }}
            >
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)'
                }}
                animate={{ left: '100%' }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              Join a Hunt
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            display: isMobile ? 'block' : 'none'
          }}
        >
          {isMobileMenuOpen ? <X size={24} color="#0B2341" /> : <Menu size={24} color="#0B2341" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(25px)',
              borderTop: '1px solid rgba(16, 182, 198, 0.15)',
              padding: '1rem 2rem 2rem 2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      color: item.name === activePage ? '#10B6C6' : '#0B2341',
                      textDecoration: 'none',
                      fontWeight: '600',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      transition: 'all 0.3s ease',
                      background: item.name === activePage ? 'rgba(16, 182, 198, 0.1)' : 'transparent',
                      display: 'block',
                      position: 'relative',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      if (item.name !== activePage) {
                        e.currentTarget.style.color = '#10B6C6';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (item.name !== activePage) {
                        e.currentTarget.style.color = '#0B2341';
                      }
                    }}
                  >
                    {item.name}
                    {/* Active page underline for mobile */}
                    {item.name === activePage && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        style={{
                          position: 'absolute',
                          bottom: '2px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '100%',
                          height: '2px',
                          background: 'linear-gradient(90deg, #10B6C6, #FF6A4A)',
                          borderRadius: '1px'
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              <Link href="/events/">
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    background: 'linear-gradient(135deg, #10B6C6, #FF6A4A)',
                    color: 'white',
                    border: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '25px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: '0 8px 25px rgba(16, 182, 198, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    marginTop: '0.5rem'
                  }}
                >
                  Join a Hunt
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
    </>
  );
}
