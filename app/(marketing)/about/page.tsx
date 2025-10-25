'use client';

import { motion, useInView } from 'framer-motion';
import { Heart, Users, Sparkles, MapPin, UserCheck, Handshake, Instagram } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
// ResponsiveNav is handled in the root layout

export default function AboutPage() {
  // ========================================
  // EVENT HANDLERS & STATE
  // ========================================
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    // Force re-animation when component mounts
    setAnimationKey(prev => prev + 1);
  }, []);

  // ========================================
  // DATA CONFIGURATION
  // ========================================
  
  const values = [
    {
      icon: Heart,
      title: 'Love in Action',
      description: 'Everything we do begins with love. It guides how we serve the community we care about and turns small moments of generosity into lasting change. Through every hunt, we aim to spread joy, inspire compassion, and remind people that love in action has the power to strengthen the place we all call home.',
      color: '#FF6A4A'
    },
    {
      icon: Users,
      title: 'Connection Through Community',
      description: 'The strength of what we do comes from the community around us. It inspires our events, our partnerships, and the connections we create along the way. Every hunt is designed to bring people together, celebrate shared experiences, and strengthen the bonds that make the Treasure Coast special. Through collaboration with local partners, we are building something that grows stronger with every connection and reminds us why connection through community is at the heart of everything we do.',
      color: '#10B6C6'
    },
    {
      icon: Sparkles,
      title: 'Joy in the Journey',
      description: 'The greatest treasures are found in the moments between the clues. Every scavenger hunt is created to spark excitement, laughter, and discovery while reminding everyone to enjoy the moments along the way. Joy in the journey is more than a phrase to us; it is a mindset that celebrates curiosity, connection, and the simple joy of exploring together.',
      color: '#FDBA2D'
    },
    {
      icon: MapPin,
      title: 'Local Roots, Lasting Impact',
      description: 'The Treasure Coast is more than a place to call home. It is part of who we are and the reason we work to make a difference. Each event highlights local businesses, landmarks, and stories that make this area special. Together with our partners, we stay grounded in our local roots and create a lasting impact that can be felt throughout the Treasure Coast.',
      color: '#E67E22'
    }
  ];

  const teamMembers = [
    {
      name: 'Josh Harris',
      role: 'CEO & Co-Founder',
      bio: 'Josh is a visionary creator with a deep respect for service, family, and community. He blends his background in business operations and technology with the values instilled by his family\'s long history of military and public service. Family means everything to him and serves as his foundation, his inspiration, and his reason for giving back. Working side by side with his wife Shelley, Josh oversees the logistics, design, and creative production behind Treasure Coast Scavengers. His mission is to transform adventure into a way to connect, uplift, and strengthen the place he proudly calls home.',
      icon: UserCheck,
      isFounder: true
    },
    {
      name: 'Shelley Harris',
      role: 'COO & Co-Founder',
      bio: 'Shelley\'s roots in Vero Beach run deep, and she carries the heartbeat of the Treasure Coast in everything she does. With a lifelong passion for spreading love and positivity, she is the inspiration behind Treasure Coast Scavengers and the spirit that gives it life. Her strong connection to the community and her career in real estate give her a front-row seat to the people and places that make this region special. Shelley\'s giving heart drives her to bring families together, spark joy, and remind others that kindness and connection are the real treasures.',
      icon: UserCheck,
      isFounder: true
    },
    {
      name: 'LeeAnne Lake',
      role: 'Board Member',
      bio: 'Bringing years of community leadership and organizational expertise to our mission.',
      icon: Handshake,
      isFounder: false
    },
    {
      name: 'Charlie Cox',
      role: 'Board Member',
      bio: 'Dedicated to fostering connections and supporting local initiatives across the Treasure Coast.',
      icon: Handshake,
      isFounder: false
    },
    {
      name: 'JJ Cunningham',
      role: 'Board Member',
      bio: 'Passionate about community engagement and creating meaningful experiences for families.',
      icon: Handshake,
      isFounder: false
    },
    {
      name: 'DD Busch',
      role: 'Board Member',
      bio: 'Committed to building stronger communities through adventure and shared experiences.',
      icon: Handshake,
      isFounder: false
    }
  ];

  return (
    // ========================================
    // MAIN CONTAINER & BACKGROUND
    // ========================================
    <div style={{
      backgroundColor: '#0B2341',
      fontFamily: 'Inter, sans-serif',
      position: 'relative',
      overflowX: 'hidden',
      width: '100%',
      maxWidth: '100vw',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Optimized Cinematic Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        background: `
          radial-gradient(at 30% 20%, rgba(253, 186, 45, 0.2) 0%, rgba(0, 0, 0, 0) 60%),
          radial-gradient(at 70% 40%, rgba(255, 106, 74, 0.15) 0%, rgba(0, 0, 0, 0) 50%),
          radial-gradient(at 20% 60%, rgba(16, 182, 198, 0.12) 0%, rgba(0, 0, 0, 0) 50%),
          radial-gradient(at 80% 80%, rgba(253, 186, 45, 0.1) 0%, rgba(0, 0, 0, 0) 60%),
          linear-gradient(135deg, rgb(11, 35, 65) 0%, rgb(14, 58, 76) 25%, rgb(11, 35, 65) 50%, rgb(14, 58, 76) 75%, rgb(11, 35, 65) 100%)
        `,
        backgroundAttachment: 'scroll',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        willChange: 'transform',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }} />

      {/* ========================================
          NAVIGATION SECTION
          ======================================== */}
      {/* ResponsiveNav is handled in the root layout */}

      {/* Main Content Container */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '100vw',
        overflowX: 'hidden',
        flex: 1
      }}>

        {/* ========================================
            HERO SECTION
            ======================================== */}
        <section style={{
          paddingTop: '12rem',
          paddingBottom: '6rem',
          width: '100%'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 2rem',
            textAlign: 'center',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                position: 'relative',
                maxWidth: '900px',
                margin: '0 auto',
                textAlign: 'center'
              }}
            >
              {/* Animated Background Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '-20px',
                  right: '-20px',
                  bottom: '-20px',
                  background: 'radial-gradient(circle, rgba(16, 182, 198, 0.2) 0%, rgba(255, 106, 74, 0.15) 50%, transparent 70%)',
                  borderRadius: '30px',
                  filter: 'blur(20px)',
                  zIndex: -1
                }}
              />
              
              {/* Main Text with Gradient */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                style={{
                  fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #ffffff 0%, #10B6C6 30%, #FF6A4A 70%, #FDBA2D 100%)',
                  cursor: 'default',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1.2,
                  marginBottom: '2rem',
                  textShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  letterSpacing: '-0.02em'
                }}
              >
                We believe adventure should do more than entertain.
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                  fontWeight: '600',
                  color: 'rgba(255, 255, 255, 0.95)',
                  cursor: 'default',
                  lineHeight: 1.4,
                  marginBottom: '2rem',
                  textShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
                }}
              >
                It should inspire discovery, generosity, and connection.
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                style={{
                  position: 'relative',
                  display: 'inline-block'
                }}
              >
                <motion.p
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                    fontWeight: '700',
                    background: 'linear-gradient(135deg, #10B6C6, #FF6A4A)',
                    cursor: 'default',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    margin: 0,
                    textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    letterSpacing: '-0.01em'
                  }}
                >
                  That belief became Treasure Coast Scavengers.
                </motion.p>
                
                {/* Animated Underline */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
                  style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #10B6C6, #FF6A4A, #FDBA2D)',
                    borderRadius: '2px',
                    boxShadow: '0 2px 12px rgba(16, 182, 198, 0.4)'
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ========================================
            OUR STORY SECTION
            ======================================== */}
        <section style={{
          padding: '6rem 0 5rem 0',
          width: '100%'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 2rem',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            {/* Section Header */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '700',
                color: 'white',
                textAlign: 'center',
                cursor: 'default',
                marginBottom: '2rem',
                letterSpacing: '-0.02em',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}
            >
              Our Story
            </motion.h2>
            
            {/* Gradient Accent Line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              style={{
                width: '150px',
                height: '6px',
                background: 'linear-gradient(90deg, #10B6C6, #FF6A4A)',
                margin: '0 auto 3rem auto',
                borderRadius: '3px',
                boxShadow: '0 2px 8px rgba(16, 182, 198, 0.3)'
              }}
            />

            {/* Glass Card Content */}
            <motion.div
              key={`our-story-${animationKey}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '24px',
                padding: '4rem',
                backdropFilter: 'blur(25px)',
                textAlign: 'center',
                marginBottom: '4rem',
                width: '100%',
                boxSizing: 'border-box',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
              whileHover={{
                scale: 1.02,
                y: -4,
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)'
              }}
            >
              {/* Gradient Border Overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: '24px',
                padding: '2px',
                background: 'linear-gradient(135deg, rgba(16, 182, 198, 0.3), rgba(255, 106, 74, 0.3))',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'xor',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                pointerEvents: 'none',
                transition: 'all 0.3s ease'
              }} />
              <p style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: 1.8,
                maxWidth: '800px',
                margin: '0 auto',
                cursor: 'default'
              }}>
                Treasure Coast Scavengers began with a simple desire to give back to the community we love. What started as small hidden cash drops around town has grown into something more than we ever expected. Families come together, people explore hidden local gems, and strangers become friends.

                Local businesses joined in, contributing prizes and support that helped expand our mission. We continue to create experiences that spark excitement, strengthen community, and celebrate everything that makes the Treasure Coast special.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ========================================
            MISSION & VISION SECTION
            ======================================== */}
        <section style={{
          padding: '5rem 0 6rem 0',
          width: '100%'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 2rem',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            {/* Section Headers */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '2rem',
              marginBottom: '2rem',
              width: '100%'
            }}>
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: '700',
                    color: '#10B6C6',
                    textAlign: 'center',
                    cursor: 'default',
                    margin: 0,
                    letterSpacing: '-0.02em',
                    textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  Our Mission
                </motion.h2>
                
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  style={{
                    width: '120px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #10B6C6, #10B6C6)',
                    margin: '1rem auto 0 auto',
                    borderRadius: '2px',
                    boxShadow: '0 2px 8px rgba(16, 182, 198, 0.3)'
                  }}
                />
              </div>
              
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: '700',
                    color: '#FF6A4A',
                    textAlign: 'center',
                    cursor: 'default',
                    margin: 0,
                    letterSpacing: '-0.02em',
                    textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  Our Vision
                </motion.h2>
                
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                  style={{
                    width: '120px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #FF6A4A, #FF6A4A)',
                    margin: '1rem auto 0 auto',
                    borderRadius: '2px',
                    boxShadow: '0 2px 8px rgba(255, 106, 74, 0.3)'
                  }}
                />
              </div>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem',
              width: '100%'
            }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '24px',
                  padding: '3rem',
                  backdropFilter: 'blur(25px)',
                  border: '2px solid rgba(16, 182, 198, 0.3)',
                  textAlign: 'center',
                  width: '100%',
                  minHeight: '350px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  boxSizing: 'border-box',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
                whileHover={{
                  scale: 1.02,
                  y: -4,
                  borderColor: 'rgba(16, 182, 198, 0.5)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)'
                }}
              >
                <p style={{
                  fontSize: '1.125rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: 1.7,
                  margin: 0,
                  cursor: 'default'
                }}>
                  Our mission is to spark connection and kindness through adventure. We host free, family-friendly scavenger hunts that encourage people to get outside, explore local treasures, and experience the joy of giving. Each event strengthens community bonds and creates memories that last long after the final clue is found.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '24px',
                  padding: '3rem',
                  backdropFilter: 'blur(25px)',
                  border: '2px solid rgba(255, 106, 74, 0.3)',
                  textAlign: 'center',
                  width: '100%',
                  minHeight: '350px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  boxSizing: 'border-box',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
                whileHover={{
                  scale: 1.02,
                  y: -4,
                  borderColor: 'rgba(255, 106, 74, 0.5)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)'
                }}
              >
                <p style={{
                  fontSize: '1.125rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: 1.7,
                  margin: 0,
                  cursor: 'default'
                }}>
                  We envision a Treasure Coast where adventure is for everyone, where every family, friend group, and visitor can experience the thrill of discovery, the joy of giving, and the pride of community. A place where generosity is contagious, exploration is encouraged, and every hidden clue leads not just to a prize, but to a stronger, more connected Treasure Coast.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========================================
            VALUES SECTION
            ======================================== */}
        <section ref={ref} style={{
          padding: '6rem 0 5rem 0',
          width: '100%'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 2rem',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '700',
                color: 'white',
                textAlign: 'center',
                cursor: 'default',
                marginBottom: '2rem',
                letterSpacing: '-0.02em',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}
            >
              Our Values
            </motion.h2>
            
            {/* Gradient Accent Line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              style={{
                width: '150px',
                height: '6px',
                background: 'linear-gradient(90deg, #10B6C6, #FF6A4A)',
                margin: '0 auto 3rem auto',
                borderRadius: '3px',
                boxShadow: '0 2px 8px rgba(16, 182, 198, 0.3)'
              }}
            />
            

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem',
              marginBottom: '3rem',
              width: '100%',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              <style jsx>{`
                @media (max-width: 1024px) {
                  div {
                    grid-template-columns: 1fr !important;
                  }
                }
              `}</style>
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.08,
                    ease: "easeOut"
                  }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem',
                    padding: 'clamp(1.5rem, 2.5vw, 2rem)',
                    background: `linear-gradient(135deg, ${value.color}15, ${value.color}08)`,
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    boxSizing: 'border-box',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center'
                  }}
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                    background: `linear-gradient(135deg, ${value.color}20, ${value.color}12)`,
                    borderColor: 'rgba(255, 255, 255, 0.25)',
                    boxShadow: '0 12px 35px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  {/* Professional Icon */}
                  <div style={{
                    minWidth: '60px',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${value.color}20, ${value.color}10)`,
                    border: `2px solid ${value.color}30`
                  }}>
                    <value.icon size={28} color={value.color} />
                  </div>
                  
                  <div style={{
                    flex: 1,
                    textAlign: 'center'
                  }}>
                    <h3 style={{
                      fontSize: '1.4rem',
                      fontWeight: 'bold',
                      color: 'white',
                      marginBottom: '1rem',
                      textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                      cursor: 'default'
                    }}>
                      {value.title}
                    </h3>
                    
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      lineHeight: 1.6,
                      fontSize: '1rem',
                      cursor: 'default'
                    }}>
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================
            TEAM SECTION
            ======================================== */}
        <section style={{
          padding: '5rem 0 6rem 0',
          width: '100%'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 2rem',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '700',
                color: 'white',
                textAlign: 'center',
                cursor: 'default',
                marginBottom: '2rem',
                letterSpacing: '-0.02em',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}
            >
              Meet Our Team
            </motion.h2>
            
            {/* Gradient Accent Line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              style={{
                width: '150px',
                height: '6px',
                background: 'linear-gradient(90deg, #10B6C6, #FF6A4A)',
                margin: '0 auto 3rem auto',
                borderRadius: '3px',
                boxShadow: '0 2px 8px rgba(16, 182, 198, 0.3)'
              }}
            />
            

            {/* Co-Founders Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '3rem',
              marginBottom: '4rem',
              width: '100%',
              maxWidth: '1000px',
              margin: '0 auto 4rem auto'
            }}>
              {teamMembers.filter(member => member.isFounder).map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.1 + (index * 0.1),
                    ease: "easeOut"
                  }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '24px',
                    padding: '3.5rem',
                    backdropFilter: 'blur(25px)',
                    border: '2px solid rgba(16, 182, 198, 0.3)',
                    textAlign: 'center',
                    width: '100%',
                    boxSizing: 'border-box',
                    boxShadow: '0 12px 40px rgba(16, 182, 198, 0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  whileHover={{
                    scale: 1.02,
                    y: -4,
                    borderColor: 'rgba(255, 255, 255, 0.25)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #10B6C6, #FF6A4A)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 2rem auto',
                    boxShadow: '0 15px 40px rgba(16, 182, 198, 0.4)'
                  }}>
                    <member.icon size={50} color="white" />
                  </div>
                  
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: '0.5rem'
                  }}>
                    {member.name}
                  </h3>
                  
                  <p style={{
                    color: member.isFounder ? '#10B6C6' : '#FDBA2D',
                    fontWeight: '600',
                    marginBottom: '1.5rem',
                    cursor: 'default',
                    fontSize: '1.125rem'
                  }}>
                    {member.role}
                  </p>
                  
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: 1.6,
                    fontSize: '1rem',
                    cursor: 'default'
                  }}>
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Board Members Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '2rem',
              width: '100%',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              <style jsx>{`
                @media (max-width: 1024px) {
                  div {
                    grid-template-columns: repeat(2, 1fr) !important;
                  }
                }
                @media (max-width: 768px) {
                  div {
                    grid-template-columns: 1fr !important;
                  }
                }
              `}</style>
              {teamMembers.filter(member => !member.isFounder).map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.1 + (index * 0.1),
                    ease: "easeOut"
                  }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '24px',
                    padding: '3rem',
                    backdropFilter: 'blur(25px)',
                    border: '2px solid rgba(253, 186, 45, 0.3)',
                    textAlign: 'center',
                    width: '100%',
                    boxSizing: 'border-box',
                    boxShadow: '0 12px 40px rgba(253, 186, 45, 0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  whileHover={{
                    scale: 1.02,
                    y: -4,
                    borderColor: 'rgba(255, 255, 255, 0.25)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  <div style={{
                    width: '110px',
                    height: '110px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FDBA2D, #FF6A4A)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 2rem auto',
                    boxShadow: '0 15px 40px rgba(253, 186, 45, 0.4)'
                  }}>
                    <member.icon size={48} color="white" />
                  </div>
                  
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: '0.5rem'
                  }}>
                    {member.name}
                  </h3>
                  
                  <p style={{
                    color: member.isFounder ? '#10B6C6' : '#FDBA2D',
                    fontWeight: '600',
                    marginBottom: '1.5rem',
                    cursor: 'default',
                    fontSize: '1.125rem'
                  }}>
                    {member.role}
                  </p>
                  
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: 1.6,
                    fontSize: '1rem',
                    cursor: 'default'
                  }}>
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================
            FOOTER SECTION
            ======================================== */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{
            position: 'relative',
            zIndex: 2,
            padding: '3rem 0',
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <div style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '16px',
            padding: '2rem 3rem',
            maxWidth: '900px',
            width: '90%',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}>
            {/* Legal Information - truly centered */}
            <div style={{ position: 'relative', textAlign: 'center' }}>
              <p style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '0.875rem',
                margin: '0 0 0.5rem 0',
                lineHeight: 1.4,
                fontWeight: '500',
                cursor: 'default'
              }}>
                Treasure Coast Scavengers Inc. is a 501(c)(3) nonprofit organization.
              </p>
              <p style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.75rem',
                margin: 0,
                lineHeight: 1.3,
                cursor: 'default'
              }}>
                © 2025 Treasure Coast Scavengers Inc. All rights reserved.
              </p>

              {/* Social Media Follow - positioned absolutely */}
              <div style={{
                position: 'absolute',
                top: '50%',
                right: '0',
                transform: 'translateY(-50%)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                alignItems: 'flex-end'
              }}>
                {/* Instagram Follow */}
                <motion.a
                  href="https://instagram.com/treasurecoastscavengers"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.05,
                    color: '#10B6C6'
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'all 0.3s ease',
                    padding: '0.25rem 0'
                  }}
                >
                  <Instagram size={16} />
                  Follow us
                </motion.a>

                {/* Facebook Follow */}
                <motion.a
                  href="https://www.facebook.com/TreasureCoastScavengers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.05,
                    color: '#10B6C6'
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'all 0.3s ease',
                    padding: '0.25rem 0'
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Follow us
                </motion.a>
              </div>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}