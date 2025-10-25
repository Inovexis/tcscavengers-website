'use client';

import { motion, useInView } from 'framer-motion';
import { MapPin, Clock, Users, Trophy, Search, Award } from 'lucide-react';
import { useRef, useState } from 'react';

interface TreasureHuntPreviewProps {
  className?: string;
}

export default function TreasureHuntPreview({ className = '' }: TreasureHuntPreviewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const huntSteps = [
    {
      icon: Search,
      title: 'Register & Get Clues',
      description: 'Sign up for free and receive your treasure map with cryptic clues',
      color: '#10B6C6',
      gradient: 'linear-gradient(135deg, #10B6C6, #0B2341)'
    },
    {
      icon: MapPin,
      title: 'Explore & Discover',
      description: 'Visit local businesses and landmarks to solve puzzles and find treasures',
      color: '#FF6A4A',
      gradient: 'linear-gradient(135deg, #FF6A4A, #FDBA2D)'
    },
    {
      icon: Trophy,
      title: 'Win Prizes',
      description: 'Complete challenges to earn points and win amazing prizes from sponsors',
      color: '#FDBA2D',
      gradient: 'linear-gradient(135deg, #FDBA2D, #FF6A4A)'
    }
  ];

  const upcomingHunts = [
    {
      title: 'Beach Cleanup Adventure',
      date: 'October 26, 2024',
      time: '9:00 AM - 2:00 PM',
      location: 'Jensen Beach Park',
      participants: 45,
      prizes: '$2,500 in prizes',
      difficulty: 'Easy',
      color: '#10B6C6'
    },
    {
      title: 'Historic Downtown Riddle',
      date: 'November 15, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'Fort Pierce City Center',
      participants: 32,
      prizes: '$3,000 in prizes',
      difficulty: 'Medium',
      color: '#FF6A4A'
    },
    {
      title: 'Riverwalk Treasure Trail',
      date: 'December 7, 2024',
      time: '11:00 AM - 3:00 PM',
      location: 'Stuart Riverwalk',
      participants: 28,
      prizes: '$1,800 in prizes',
      difficulty: 'Hard',
      color: '#FDBA2D'
    }
  ];

  return (
    <section ref={ref} className={`${className}`} style={{
      position: 'relative',
      overflow: 'hidden',
      padding: '6rem 0'
    }}>
      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 2,
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #FDBA2D, #FF6A4A, #10B6C6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1.5rem',
            textShadow: '0 4px 20px rgba(16, 182, 198, 0.3)',
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
          }}>
            How Treasure Hunting Works
          </h2>
          <p style={{
            fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
            color: '#10B6C6',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Join thousands of families discovering hidden gems across the Treasure Coast
          </p>
        </motion.div>

        {/* Interactive Hunt Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {huntSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: `0 30px 60px ${step.color}40`
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '20px',
                padding: '2.5rem 2rem',
                textAlign: 'center',
                boxShadow: '0 20px 50px rgba(11, 35, 65, 0.1)',
                border: '1px solid rgba(16, 182, 198, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer'
              }}
            >
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: step.gradient
                }}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
              />

              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: step.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  boxShadow: `0 10px 30px ${step.color}40`
                }}
              >
                <step.icon size={40} color="white" />
              </motion.div>

              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#0B2341',
                marginBottom: '1rem',
                lineHeight: 1.3
              }}>
                {step.title}
              </h3>
              <p style={{
                color: 'rgba(11, 35, 65, 0.8)',
                lineHeight: 1.6,
                fontSize: '1rem'
              }}>
                {step.description}
              </p>

              {/* Interactive hover effect */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(135deg, ${step.color}10, transparent)`,
                  opacity: 0
                }}
                animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Upcoming Hunts Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h3 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #FDBA2D, #FF6A4A)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem',
            textShadow: '0 4px 20px rgba(253, 186, 45, 0.3)',
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
          }}>
            Upcoming Adventures
          </h3>
          <p style={{
            fontSize: '1.25rem',
            color: '#10B6C6',
            marginBottom: '3rem'
          }}>
            Don't miss these exciting treasure hunts coming to your area
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {upcomingHunts.map((hunt, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              whileHover={{
                scale: 1.02,
                boxShadow: `0 25px 50px ${hunt.color}30`
              }}
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 15px 40px rgba(11, 35, 65, 0.1)',
                border: `2px solid ${hunt.color}20`,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(90deg, ${hunt.color}, ${hunt.color}80)`
              }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <h4 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#0B2341',
                  lineHeight: 1.3
                }}>
                  {hunt.title}
                </h4>
                <span style={{
                  background: hunt.color,
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '12px',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>
                  {hunt.difficulty}
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Clock size={16} color={hunt.color} />
                  <span style={{ fontSize: '0.875rem', color: 'rgba(11, 35, 65, 0.8)' }}>
                    {hunt.date}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={16} color={hunt.color} />
                  <span style={{ fontSize: '0.875rem', color: 'rgba(11, 35, 65, 0.8)' }}>
                    {hunt.location}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Users size={16} color={hunt.color} />
                  <span style={{ fontSize: '0.875rem', color: 'rgba(11, 35, 65, 0.8)' }}>
                    {hunt.participants} registered
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Trophy size={16} color={hunt.color} />
                  <span style={{ fontSize: '0.875rem', color: 'rgba(11, 35, 65, 0.8)' }}>
                    {hunt.prizes}
                  </span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: '100%',
                  background: `linear-gradient(135deg, ${hunt.color}, ${hunt.color}80)`,
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '12px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '0.875rem'
                }}
              >
                Register Now
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          style={{ textAlign: 'center' }}
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(16, 182, 198, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'linear-gradient(135deg, #10B6C6, #FF6A4A)',
              color: 'white',
              border: 'none',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '1.125rem',
              boxShadow: '0 10px 30px rgba(16, 182, 198, 0.3)',
              position: 'relative',
              overflow: 'hidden'
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
            <Award size={20} style={{ marginRight: '0.5rem' }} />
            View All Events
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
export default TreasureHuntPreview;
