'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  animated?: boolean;
}

export default function Logo({ size = 'md', showText = true, animated = true }: LogoProps) {
  const sizeMap = {
    sm: { width: 60, height: 60 },
    md: { width: 80, height: 80 },
    lg: { width: 100, height: 100 }
  };
  
  const currentSize = sizeMap[size];

  return (
    <motion.div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}
      whileHover={animated ? { scale: 1.05 } : {}}
      transition={{ duration: 0.3 }}
    >
      {/* Your Logo Image - Now using PNG */}
      <motion.div
        style={{
          position: 'relative',
          width: currentSize.width,
          height: currentSize.height
        }}
        animate={animated ? {
          rotate: [0, 1, -1, 0],
          scale: [1, 1.02, 1]
        } : {}}
        transition={animated ? {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        } : {}}
      >
        <Image
          src="/images/TCS_new_logo.png?v=2"
          alt="Treasure Coast Scavengers Logo"
          width={currentSize.width}
          height={currentSize.height}
          style={{
            objectFit: 'contain',
            transform: 'scale(2.4) translateY(8px)',
            transformOrigin: 'center'
          }}
          priority
        />
      </motion.div>

      {/* Additional text if showText is true */}
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <motion.div
            style={{
              fontSize: size === 'sm' ? '14px' : size === 'md' ? '18px' : '24px',
              fontWeight: 'bold',
              color: '#0B2341',
              lineHeight: 1.1,
              textAlign: 'center'
            }}
            animate={animated ? {
              color: ['#0B2341', '#10B6C6', '#0B2341']
            } : {}}
            transition={animated ? {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            } : {}}
          >
            TREASURE COAST
          </motion.div>
          <div style={{
            fontSize: size === 'sm' ? '10px' : size === 'md' ? '12px' : '16px',
            fontWeight: '500',
            color: '#6B7280',
            lineHeight: 1.2,
            letterSpacing: '0.1em',
            textAlign: 'center'
          }}>
            SCAVENGERS INC.
          </div>
        </div>
      )}
    </motion.div>
  );
}
