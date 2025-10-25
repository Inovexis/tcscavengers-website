'use client';

import { motion } from 'framer-motion';
import { Users, Heart, Trophy, Compass, Instagram, HeartHandshake, Users2, Sparkles, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import TreasureHuntPreview from '@/components/TreasureHuntPreview';
// ResponsiveNav is handled in the root layout

export default function HomePage() {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    // Force re-animation when component mounts
    setAnimationKey(prev => prev + 1);
  }, []);

  const handleJoinHunt = () => {
    // Scroll to events section or redirect to events page
    window.location.href = '/events';
  };

  const handleLearnMore = () => {
    // Scroll to about section or redirect to about page
    window.location.href = '/about';
  };

  return (
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
      {/* Consistent Cinematic Background for Entire Page */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        background: `
          radial-gradient(ellipse at 30% 20%, rgba(253, 186, 45, 0.2) 0%, transparent 60%),
          radial-gradient(ellipse at 70% 40%, rgba(255, 106, 74, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 20% 60%, rgba(16, 182, 198, 0.12) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 80%, rgba(253, 186, 45, 0.1) 0%, transparent 60%),
          linear-gradient(135deg, #0B2341 0%, #0E3A4C 25%, #0B2341 50%, #0E3A4C 75%, #0B2341 100%)
        `,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Subtle Treasure Coast Depth Layers */}
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '5%',
          width: '400px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(253, 186, 45, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)'
        }} />

        <div style={{
          position: 'absolute',
          top: '60%',
          right: '10%',
          width: '350px',
          height: '250px',
          background: 'radial-gradient(ellipse, rgba(16, 182, 198, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(100px)'
        }} />

        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '30%',
          width: '300px',
          height: '200px',
          background: 'radial-gradient(ellipse, rgba(255, 106, 74, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(120px)'
        }} />
      </div>

      {/* Responsive Navigation */}
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
        {/* Cinematic Hero Section */}
        <section key={`hero-${animationKey}`} style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          paddingTop: '8rem',
          paddingBottom: '4rem',
          width: '100%',
          zIndex: 10
        }}>
          <div style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            padding: '0 1rem',
            maxWidth: '1000px',
            margin: '0 auto',
            width: '100%',
            boxSizing: 'border-box',
            overflow: 'hidden'
          }}>
            {/* Main Headline with Enhanced Typography */}
            <motion.h1
              key={`hero-title-${animationKey}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              style={{
                fontSize: 'clamp(1.6rem, 4vw, 3.5rem)',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '1.5rem',
                textShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
                lineHeight: 1.4,
                cursor: 'default',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 1rem',
                width: '100%',
                maxWidth: '100%',
                boxSizing: 'border-box'
              }}
            >
              <span style={{
                display: 'block',
                textAlign: 'center',
                width: '100%'
              }}>
                Adventure With Purpose.
              </span>
              <span style={{ 
                background: 'linear-gradient(135deg, #FDBA2D 0%, #FF6A4A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'block',
                textAlign: 'center',
                width: '100%',
                whiteSpace: 'nowrap',
                fontSize: 'clamp(1.2rem, 3.5vw, 3.2rem)',
                lineHeight: 1.2,
                padding: '0 1rem',
                cursor: 'default'
              }}>
                Connection Through Community.
              </span>
            </motion.h1>

            {/* Enhanced Subtitle */}
            <motion.p
              key={`hero-subtitle-${animationKey}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              style={{
                fontSize: 'clamp(1.25rem, 2.8vw, 1.7rem)',
                color: 'rgba(255, 255, 255, 0.95)',
                marginBottom: '3rem',
                lineHeight: 1.5,
                maxWidth: '750px',
                margin: '0 auto 3rem auto',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
                textAlign: 'center',
                fontWeight: '500',
                cursor: 'default'
              }}
            >
              We bring our community together through free, family-friendly scavenger hunts that inspire connection, discovery, and giving across Florida's Treasure Coast.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              key={`hero-buttons-${animationKey}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              style={{
                display: 'flex',
                gap: '1.5rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginBottom: '4rem'
              }}
            >
              <motion.button
                onClick={handleLearnMore}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 12px 25px rgba(255, 106, 74, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'linear-gradient(135deg, #FF6A4A, #FDBA2D)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  padding: '1.2rem 3rem',
                  borderRadius: '50px',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 12px 30px rgba(255, 106, 74, 0.3)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  width: '220px',
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
                Explore Our Story
              </motion.button>

              <motion.button
                onClick={handleJoinHunt}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 12px 25px rgba(255, 106, 74, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'linear-gradient(135deg, #FF6A4A, #FDBA2D)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  padding: '1.2rem 3rem',
                  borderRadius: '50px',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 12px 30px rgba(255, 106, 74, 0.3)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  width: '220px',
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
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                />
                Support Our Mission
              </motion.button>
            </motion.div>

            {/* Enhanced Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem',
                maxWidth: '800px',
                margin: '0 auto'
              }}
            >
              {[
                { number: '20', label: 'Treasures Found', icon: Heart, color: '#FF6A4A' },
                { number: '1,200+', label: 'Adventurers', icon: Users, color: '#10B6C6' },
                { number: '12', label: 'Events Hosted', icon: Trophy, color: '#FDBA2D' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  style={{
                    padding: '2rem 1.5rem',
                    textAlign: 'center'
                  }}
                >
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${stat.color}, ${stat.color}80)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem auto',
                    boxShadow: `0 8px 25px ${stat.color}40`
                  }}>
                    <stat.icon size={28} color="white" />
                  </div>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: '0.5rem'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '1rem',
                    fontWeight: '500'
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Clean Mission Statement */}
        <section style={{
          position: 'relative',
          zIndex: 2,
          padding: '8rem 0',
          width: '100%'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            {/* Mission Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                textAlign: 'center',
                marginBottom: '6rem'
              }}
            >
              <h2 style={{
                fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                fontWeight: '700',
                color: 'white',
                marginBottom: '2rem',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                letterSpacing: '-0.02em',
                cursor: 'default'
              }}>
                Our Mission
              </h2>
              
              <div style={{
                width: '150px',
                height: '6px',
                background: 'linear-gradient(90deg, #10B6C6, #FF6A4A)',
                margin: '0 auto',
                borderRadius: '3px',
                boxShadow: '0 2px 8px rgba(16, 182, 198, 0.3)'
              }} />
            </motion.div>

            {/* Mission Content - Clean and Centered */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '24px',
                padding: 'clamp(2rem, 5vw, 5rem) clamp(1.5rem, 4vw, 4rem)',
                textAlign: 'center',
                position: 'relative',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                maxWidth: '900px',
                margin: '0 auto'
              }}
            >
              <h3 style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
                fontWeight: '700',
                color: 'white',
                marginBottom: '2rem',
                lineHeight: 1.2,
                maxWidth: '800px',
                margin: '0 auto 2rem auto',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
              }}>
                Adventure has the power to bring people together.
              </h3>

              <div style={{
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                <p style={{
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
                  color: 'rgba(255, 255, 255, 0.95)',
                  lineHeight: 1.6,
                  marginBottom: '2rem',
                  fontWeight: '500',
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                  cursor: 'default'
                }}>
                  We believe every scavenger hunt can transform strangers into friends, turning simple adventures into lasting memories that strengthen our community.
                </p>

                <p style={{
                  fontSize: 'clamp(1.1rem, 2.2vw, 1.3rem)',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.5,
                  fontStyle: 'italic',
                  marginBottom: '4rem',
                  fontWeight: '400',
                  cursor: 'default'
                }}>
                  Through creative challenges and shared discoveries, we're building a Treasure Coast where every adventure creates connection.
                </p>
              </div>

              {/* Secondary CTA - Simpler Style */}
              <motion.button
                onClick={handleLearnMore}
                whileHover={{ scale: 1.05, boxShadow: '0 15px 35px rgba(16, 182, 198, 0.4)', y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: 'linear-gradient(135deg, #10B6C6, #0EA5B8)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  padding: '1.2rem 3rem',
                  borderRadius: '12px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 10px 25px rgba(16, 182, 198, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  margin: '0 auto',
                  transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden'
                }}
              >
                Learn More About Us
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)'
                  }}
                  animate={{ left: '100%' }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* What Makes Us Different - Values Section */}
        <section style={{
          position: 'relative',
          zIndex: 2,
          padding: '8rem 0',
          width: '100%'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 2rem',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{
                textAlign: 'center',
                marginBottom: '4rem'
              }}
            >
              <h2 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '700',
                color: 'white',
                marginBottom: '2rem',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                letterSpacing: '-0.02em',
                cursor: 'default'
              }}>
                What Drives Us
              </h2>
              
              <div style={{
                width: '150px',
                height: '6px',
                background: 'linear-gradient(90deg, #10B6C6, #FF6A4A)',
                margin: '0 auto',
                borderRadius: '3px',
                boxShadow: '0 2px 8px rgba(16, 182, 198, 0.3)'
              }} />
            </motion.div>


            {/* Ultra-Fast Values Flow */}
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1000px',
              margin: '0 auto',
              padding: '0 2rem'
            }}>
              {/* Values Content - Grid Layout - UPDATED - FORCE GRID */}
              <div style={{
                display: 'grid !important',
                gridTemplateColumns: '1fr 1fr !important',
                gridTemplateRows: '1fr 1fr !important',
                gap: '2rem !important',
                marginBottom: '5rem',
                maxWidth: '1200px',
                margin: '0 auto 5rem auto',
                width: '100%',
                position: 'relative',
                zIndex: 10,
              }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0, ease: "easeOut" }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '1.5rem',
                      padding: 'clamp(1.5rem, 2.5vw, 2rem)',
                      background: 'linear-gradient(135deg, rgba(255, 106, 74, 0.15), rgba(255, 106, 74, 0.08))',
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      boxSizing: 'border-box',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                      textAlign: 'center',
                    }}
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                      background: 'linear-gradient(135deg, rgba(255, 106, 74, 0.2), rgba(255, 106, 74, 0.12))',
                      borderColor: 'rgba(255, 255, 255, 0.25)',
                      boxShadow: '0 12px 35px rgba(0, 0, 0, 0.15)'
                    }}
                  >
                    <div style={{
                      minWidth: '60px',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #FF6A4A20, #FF6A4A10)',
                      border: '2px solid #FF6A4A30'
                    }}>
                      <HeartHandshake size={28} color="#FF6A4A" />
                    </div>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                      <h3 style={{
                        fontSize: '1.4rem',
                        fontWeight: 'bold',
                        color: 'white',
                        marginBottom: '0.5rem',
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                        cursor: 'default'
                      }}>
                        Love in Action
                      </h3>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        lineHeight: 1.5,
                        fontSize: '0.95rem',
                  margin: 0,
                  cursor: 'default'
                }}>
                        Kindness is at the heart of everything we do, turning simple moments into lasting memories across our community.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '1.5rem',
                      padding: 'clamp(1.5rem, 2.5vw, 2rem)',
                      background: 'linear-gradient(135deg, rgba(16, 182, 198, 0.15), rgba(16, 182, 198, 0.08))',
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      boxSizing: 'border-box',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                      textAlign: 'center',
                    }}
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                      background: 'linear-gradient(135deg, rgba(16, 182, 198, 0.2), rgba(16, 182, 198, 0.12))',
                      borderColor: 'rgba(255, 255, 255, 0.25)',
                      boxShadow: '0 12px 35px rgba(0, 0, 0, 0.15)'
                    }}
                  >
                    <div style={{
                      minWidth: '60px',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #10B6C620, #10B6C610)',
                      border: '2px solid #10B6C630'
                    }}>
                      <Users2 size={28} color="#10B6C6" />
                    </div>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                      <h3 style={{
                        fontSize: '1.4rem',
                        fontWeight: 'bold',
                        color: 'white',
                        marginBottom: '0.5rem',
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                        cursor: 'default'
                      }}>
                        Community Over Everything
                      </h3>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        lineHeight: 1.5,
                        fontSize: '0.95rem',
                  margin: 0,
                  cursor: 'default'
                }}>
                        We bring people together through adventure, connection, and shared pride in the Treasure Coast.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '1.5rem',
                      padding: 'clamp(1.5rem, 2.5vw, 2rem)',
                      background: 'linear-gradient(135deg, rgba(253, 186, 45, 0.15), rgba(253, 186, 45, 0.08))',
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      boxSizing: 'border-box',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                      textAlign: 'center',
                    }}
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                      background: 'linear-gradient(135deg, rgba(253, 186, 45, 0.2), rgba(253, 186, 45, 0.12))',
                      borderColor: 'rgba(255, 255, 255, 0.25)',
                      boxShadow: '0 12px 35px rgba(0, 0, 0, 0.15)'
                    }}
                  >
                    <div style={{
                      minWidth: '60px',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #FDBA2D20, #FDBA2D10)',
                      border: '2px solid #FDBA2D30'
                    }}>
                      <Sparkles size={28} color="#FDBA2D" />
                    </div>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                      <h3 style={{
                        fontSize: '1.4rem',
                        fontWeight: 'bold',
                        color: 'white',
                        marginBottom: '0.5rem',
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                        cursor: 'default'
                      }}>
                        Joy in the Journey
                      </h3>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        lineHeight: 1.5,
                        fontSize: '0.95rem',
                  margin: 0,
                  cursor: 'default'
                }}>
                        Every adventure is an opportunity to laugh, explore, and celebrate the joy of being together.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '1.5rem',
                      padding: 'clamp(1.5rem, 2.5vw, 2rem)',
                      background: 'linear-gradient(135deg, rgba(16, 182, 198, 0.15), rgba(16, 182, 198, 0.08))',
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      boxSizing: 'border-box',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                      textAlign: 'center',
                    }}
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                      background: 'linear-gradient(135deg, rgba(16, 182, 198, 0.2), rgba(16, 182, 198, 0.12))',
                      borderColor: 'rgba(255, 255, 255, 0.25)',
                      boxShadow: '0 12px 35px rgba(0, 0, 0, 0.15)'
                    }}
                  >
                    <div style={{
                      minWidth: '60px',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #10B6C620, #10B6C610)',
                      border: '2px solid #10B6C630'
                    }}>
                      <MapPin size={28} color="#10B6C6" />
                    </div>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                      <h3 style={{
                        fontSize: '1.4rem',
                        fontWeight: 'bold',
                        color: 'white',
                        marginBottom: '0.5rem',
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                        cursor: 'default'
                      }}>
                        Local Roots, Lasting Impact
                      </h3>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        lineHeight: 1.5,
                        fontSize: '0.95rem',
                  margin: 0,
                  cursor: 'default'
                }}>
                        Our events honor the people and places that make the Treasure Coast shine — building a legacy of connection and care.
                      </p>
                    </div>
                  </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Adventures Section */}
        <section style={{
          position: 'relative',
          zIndex: 2,
          padding: '8rem 0',
          width: '100%'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 2rem',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{
                textAlign: 'center',
                marginBottom: '6rem'
              }}
            >
              <h2 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '700',
                color: 'white',
                marginBottom: '2rem',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                letterSpacing: '-0.02em',
                cursor: 'default'
              }}>
                Our Adventures
              </h2>
              
              <div style={{
                width: '150px',
                height: '6px',
                background: 'linear-gradient(90deg, #10B6C6, #FF6A4A)',
                margin: '0 auto',
                borderRadius: '3px',
                boxShadow: '0 2px 8px rgba(16, 182, 198, 0.3)'
              }} />
            </motion.div>

            {/* Adventure Teaser Cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginBottom: '4rem'
              }}
            >
              {/* Adventure Teaser Card 1 */}
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                  background: 'linear-gradient(135deg, rgba(16, 182, 198, 0.15), rgba(16, 182, 198, 0.05))',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(16, 182, 198, 0.3)',
                  borderRadius: '20px',
                  padding: '2.5rem 2rem',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 15px 35px rgba(16, 182, 198, 0.2)'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #10B6C6, #0EA5B8)',
                  borderRadius: '50%',
                  opacity: 0.2
                }} />
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '0.8rem',
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
                }}>
                  Beach Adventures
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: 1.5,
                  fontSize: '0.95rem'
                }}>
                  Discover what treasures await along our beautiful coastline
                </p>
              </motion.div>

              {/* Adventure Teaser Card 2 */}
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 106, 74, 0.15), rgba(255, 106, 74, 0.05))',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 106, 74, 0.3)',
                  borderRadius: '20px',
                  padding: '2.5rem 2rem',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 15px 35px rgba(255, 106, 74, 0.2)'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-30px',
                  left: '-30px',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #FF6A4A, #FDBA2D)',
                  borderRadius: '50%',
                  opacity: 0.2
                }} />
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '0.8rem',
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
                }}>
                  Downtown Mysteries
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: 1.5,
                  fontSize: '0.95rem'
                }}>
                  Uncover the secrets hidden in our historic downtown streets
                </p>
              </motion.div>

              {/* Adventure Teaser Card 3 */}
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                  background: 'linear-gradient(135deg, rgba(253, 186, 45, 0.15), rgba(253, 186, 45, 0.05))',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(253, 186, 45, 0.3)',
                  borderRadius: '20px',
                  padding: '2.5rem 2rem',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 15px 35px rgba(253, 186, 45, 0.2)'
                }}
              >
                <div style={{
                  position: 'absolute',
                  bottom: '-30px',
                  right: '-30px',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #FDBA2D, #FF6A4A)',
                  borderRadius: '50%',
                  opacity: 0.2
                }} />
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '0.8rem',
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
                }}>
                  Special Moments
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: 1.5,
                  fontSize: '0.95rem'
                }}>
                  Join us for milestone celebrations and community highlights
                </p>
              </motion.div>
            </motion.div>

            <motion.button
              onClick={() => window.location.href = '/events'}
              whileHover={{ scale: 1.05, boxShadow: '0 15px 35px rgba(16, 182, 198, 0.4)', y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 'linear-gradient(135deg, #10B6C6, #0EA5B8)',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '1.2rem 3rem',
                borderRadius: '12px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 10px 25px rgba(16, 182, 198, 0.3)',
                transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                margin: '0 auto'
              }}
            >
              View Our Events
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)'
                }}
                animate={{ left: '100%' }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              />
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </div>
        </section>

        {/* Closing Call-to-Action Section */}
        <section style={{
          position: 'relative',
          zIndex: 2,
          padding: '8rem 0',
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
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{
                textAlign: 'center',
                marginBottom: '6rem'
              }}
            >
              <h2 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '700',
                color: 'white',
                marginBottom: '2rem',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                letterSpacing: '-0.02em',
                cursor: 'default'
              }}>
                Join Our Mission
              </h2>
              
              <div style={{
                width: '150px',
                height: '6px',
                background: 'linear-gradient(90deg, #10B6C6, #FF6A4A)',
                margin: '0 auto',
                borderRadius: '3px',
                boxShadow: '0 2px 8px rgba(16, 182, 198, 0.3)'
              }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '24px',
                padding: 'clamp(2rem, 5vw, 5rem) clamp(1.5rem, 4vw, 4rem)',
                textAlign: 'center',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                maxWidth: '900px',
                margin: '0 auto',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Decorative background elements */}
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '120px',
                height: '120px',
                background: 'linear-gradient(135deg, #10B6C6, #0EA5B8)',
                borderRadius: '50%',
                opacity: 0.1
              }} />
              <div style={{
                position: 'absolute',
                bottom: '-30px',
                left: '-30px',
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #FF6A4A, #FDBA2D)',
                borderRadius: '50%',
                opacity: 0.1
              }} />

              <h3 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                fontWeight: '700',
                color: 'white',
                marginBottom: '2rem',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
              }}>
                Every smile, every discovery, every act of kindness starts with people like you.
              </h3>

              <div style={{
                maxWidth: '700px',
                margin: '0 auto'
              }}>
                <p style={{
                  fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)',
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: '2rem',
                  lineHeight: 1.6,
                  cursor: 'default'
                }}>
                  Join us as we spread love, adventure, and connection across Florida's Treasure Coast.
                </p>

                <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  marginBottom: '3rem',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  cursor: 'default'
                }}>
                  Together, we're building a community where every adventure creates lasting memories and meaningful connections.
                </p>
              </div>

              <motion.button
                onClick={() => window.location.href = '/donate'}
                whileHover={{ 
                  scale: 1.08,
                  boxShadow: '0 25px 50px rgba(16, 182, 198, 0.5)',
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'linear-gradient(135deg, #10B6C6, #FF6A4A, #FDBA2D)',
                  color: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  padding: '1.5rem 4rem',
                  borderRadius: '16px',
                  fontSize: '1.3rem',
                  fontWeight: '800',
                  cursor: 'pointer',
                  boxShadow: '0 20px 45px rgba(16, 182, 198, 0.4)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  margin: '0 auto',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  minWidth: '280px',
                  justifyContent: 'center'
                }}
              >
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)'
                  }}
                  animate={{ left: '100%' }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)'
                  }}
                  animate={{ left: '100%' }}
                  transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                />
                Donate or Get Involved
                <motion.span
                  animate={{ x: [0, 8, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ fontSize: '1.2em' }}
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
