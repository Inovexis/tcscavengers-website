'use client';

import { motion, useInView } from 'framer-motion';
import { MapPin, Clock, Users, Trophy, Calendar, Star, Camera, ChevronRight, Instagram } from 'lucide-react';
import { useRef } from 'react';
import Logo from '@/components/Logo';
import EventCard from '@/components/events/EventCard';
import ComingSoonCard from '@/components/events/ComingSoonCard';

export default function EventsPage() {
  // ========================================
  // EVENT HANDLERS & STATE
  // ========================================
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // ========================================
  // DATA CONFIGURATION
  // ========================================
  
  // Real past events - production ready
  const pastEvents = [
    {
      title: 'Sexton Plaza Lockbox',
      date: 'September 6, 2025',
      participants: null,
      description: 'A locked box challenged players to uncover a secret code hidden within Sexton Plaza. The answer, Ocean Grill\'s address, honored a Vero Beach landmark known for its rich history and lasting legacy.',
      image: '/images/sexton-plaza-lockbox.jpg',
      videoUrl: 'https://www.instagram.com/p/DOWdLHfjlDB/'
    },
    {
      title: 'Hidden Gains at Superset',
      date: 'September 12, 2025',
      participants: null,
      description: 'Players flexed quick thinking at Superset Sports Nutrition, spotting a yellow clue hidden on a yellow sign — a clever nod to focus, energy, and community spirit.',
      image: '/images/hidden-gains-superset.jpg',
      videoUrl: 'https://www.instagram.com/p/DOoiP0wjkrs/'
    },
    {
      title: 'The Captain\'s Quest',
      date: 'October 4, 2025',
      participants: null,
      description: 'To celebrate 1,000 followers, players joined a vibrant cash drop sponsored by Capt. Hiram\'s. Five prizes were hidden with colored tape — and one lucky finder unlocked a surprise stay at the resort, courtesy of the Captain himself.',
      image: '/images/captains-quest.jpg',
      videoUrl: 'https://www.instagram.com/p/DPkEHWoDvhL/'
    }
  ];

  const handleRegister = (eventId: number) => {
    // TODO: Implement registration logic
    console.log('Registering for event:', eventId);
    alert('Registration coming soon! Please contact us for more information.');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/treasurecoastscavengers/', '_blank');
  };

  const handleEventVideoClick = (videoUrl: string) => {
    window.open(videoUrl, '_blank');
  };

  return (
    // ========================================
    // MAIN CONTAINER & BACKGROUND
    // ========================================
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0B2341',
      fontFamily: 'Inter, sans-serif'
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
      <nav style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '2px solid rgba(16, 182, 198, 0.3)',
        padding: '1rem 0',
        boxShadow: '0 8px 32px rgba(11, 35, 65, 0.1)'
      }}>
        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ 
            cursor: 'pointer',
            filter: 'drop-shadow(0 4px 12px rgba(16, 182, 198, 0.3))'
          }}>
            <Logo size="md" animated={false} showText={false} />
          </div>
          
          <div style={{ 
            display: 'flex', 
            gap: '2rem',
            alignItems: 'center'
          }}>
            {['Home', 'Events', 'Donate', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                style={{
                  color: item === 'Events' ? '#10B6C6' : '#0B2341',
                  textDecoration: 'none',
                  fontWeight: '600',
                  position: 'relative',
                  transition: 'color 0.3s ease',
                  padding: '0.5rem 1rem',
                  borderRadius: '25px'
                }}
              >
                {item}
                {item === 'Events' && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-5px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '100%',
                      height: '3px',
                      background: 'linear-gradient(90deg, #10B6C6, #FF6A4A)',
                      borderRadius: '2px'
                    }}
                  />
                )}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ========================================
          HERO SECTION
          ======================================== */}
      <section style={{
        paddingTop: '8rem',
        paddingBottom: '4rem',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          textAlign: 'center'
        }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '1.5rem',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}
          >
            Upcoming Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '700px',
              margin: '0 auto 2rem auto',
              lineHeight: 1.6
            }}
          >
            Adventure awaits along Florida's Treasure Coast. Explore, discover, and experience the connection that makes our community shine.
          </motion.p>
        </div>
      </section>

      {/* ========================================
          COMING SOON SECTION
          ======================================== */}
      <section style={{
        padding: '2rem 0',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.1,
              ease: "easeOut"
            }}
            style={{
              maxWidth: '400px',
              width: '100%'
            }}
          >
            <ComingSoonCard
              color="#E1306C"
              onInstagramClick={handleInstagramClick}
            />
          </motion.div>
        </div>
      </section>

      {/* ========================================
          PAST EVENTS SECTION
          ======================================== */}
      <section ref={ref} style={{
        padding: '2rem 0',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              marginBottom: '3rem'
            }}
          >
            Past Events
          </motion.h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.1 + (index * 0.15),
                  ease: "easeOut"
                }}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '2rem',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #10B6C6, #FF6A4A)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  boxShadow: '0 10px 30px rgba(16, 182, 198, 0.4)'
                }}>
                  <Star size={35} color="white" />
                </div>
                
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '0.5rem'
                }}>
                  {event.title}
                </h3>
                
                <p style={{
                  color: '#10B6C6',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  fontSize: '1rem'
                }}>
                  {event.date}{event.participants ? ` • ${event.participants} participants` : ''}
                </p>
                
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: 1.6,
                  fontSize: '0.875rem',
                  marginBottom: '1.5rem'
                }}>
                  {event.description}
                </p>

                {/* Event Video Button - Only for events with videoUrl */}
                {event.videoUrl && (
                  <button
                    onClick={() => handleEventVideoClick(event.videoUrl)}
                    style={{
                      background: 'linear-gradient(135deg, #E1306C, #F56040)',
                      color: 'white',
                      border: 'none',
                      padding: '0.5rem 1.5rem',
                      borderRadius: '20px',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      margin: '0 auto',
                      boxShadow: '0 4px 15px rgba(225, 48, 108, 0.3)'
                    }}
                  >
                    <Camera size={16} />
                    Watch Video
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          CALL TO ACTION SECTION
          ======================================== */}
      <section style={{
        padding: '4rem 0 6rem 0',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          textAlign: 'center'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '3rem',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '1rem'
            }}>
              Stay Updated
            </h2>
            <p style={{
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: 1.6,
              marginBottom: '2rem'
            }}>
              Don't miss out on our upcoming events! Follow us on social media or sign up for our newsletter to be the first to know about new treasure hunts.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <button 
                onClick={handleInstagramClick}
                style={{
                  background: 'linear-gradient(135deg, #E1306C, #F56040)',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 2rem',
                  borderRadius: '25px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Instagram size={20} />
                Follow Us
              </button>
              <button style={{
                background: 'transparent',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                padding: '0.75rem 2rem',
                borderRadius: '25px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                Newsletter
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
