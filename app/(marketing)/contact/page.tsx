'use client';

import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Instagram } from 'lucide-react';
import { useRef, useState } from 'react';
import Link from 'next/link';
// ResponsiveNav is handled in the root layout

export default function ContactPage() {
  // ========================================
  // EVENT HANDLERS & STATE
  // ========================================
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };

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
          paddingTop: '8rem',
          paddingBottom: '4rem',
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
          </div>
        </section>

        {/* ========================================
            CONTACT CONTENT SECTION
            ======================================== */}
        <section ref={ref} style={{
          padding: '2rem 0 6rem 0',
          width: '100%'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 2rem',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            {/* Contact Information Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                textAlign: 'center',
                marginBottom: '3rem',
                maxWidth: '800px',
                margin: '0 auto 3rem auto'
              }}
            >
              <h2 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '700',
                color: 'white',
                marginBottom: '2rem',
                letterSpacing: '-0.02em',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                cursor: 'default'
              }}>
                Let's Connect!
              </h2>
              
              {/* Gradient Accent Line */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                style={{
                  width: '150px',
                  height: '6px',
                  background: 'linear-gradient(90deg, #10B6C6, #FF6A4A)',
                  margin: '0 auto 2rem auto',
                  borderRadius: '3px',
                  boxShadow: '0 2px 8px rgba(16, 182, 198, 0.3)'
                }}
              />
              <p style={{
                fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: 1.6,
                marginBottom: '1rem'
              }}>
                Have a question or idea for a future scavenger adventure?
              </p>
              <p style={{
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: 1.6,
                marginBottom: '1rem'
              }}>
                Email us at <a href="mailto:info@tcscavengers.org" style={{ color: '#10B6C6', textDecoration: 'none' }}>info@tcscavengers.org</a> or simply submit the form below.
              </p>
              <p style={{
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: 1.6,
                marginBottom: '1rem'
              }}>
                We'd love to hear from you!
              </p>
              <p style={{
                fontSize: 'clamp(0.875rem, 1.8vw, 1rem)',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: 1.5,
                fontStyle: 'italic',
                marginBottom: '0.5rem'
              }}>
                If you don't see a reply within a couple of days, please check your spam or promotions folder.
              </p>
              <p style={{
                fontSize: 'clamp(0.875rem, 1.8vw, 1rem)',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: 1.5,
                fontStyle: 'italic',
                margin: 0
              }}>
                Sometimes our messages hide there!
              </p>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              whileHover={{
                scale: 1.02,
                y: -4,
                boxShadow: '0 20px 50px rgba(11, 35, 65, 0.15)'
              }}
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '24px',
                padding: '3rem',
                boxShadow: '0 15px 40px rgba(11, 35, 65, 0.1)',
                border: '1px solid rgba(16, 182, 198, 0.15)',
                backdropFilter: 'blur(20px)',
                maxWidth: '600px',
                margin: '0 auto',
                boxSizing: 'border-box',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >

                <form onSubmit={handleSubmit} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem'
                }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1rem'
                  }}>
                    <div>
                      <label style={{
                        display: 'block',
                        color: '#0B2341',
                        fontWeight: '600',
                        marginBottom: '0.5rem',
                        fontSize: '0.875rem'
                      }}>
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          border: '2px solid rgba(16, 182, 198, 0.2)',
                          borderRadius: '12px',
                          fontSize: '1rem',
                          transition: 'border-color 0.3s ease',
                          boxSizing: 'border-box'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#10B6C6';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#e2e8f0';
                        }}
                      />
                    </div>

                    <div>
                      <label style={{
                        display: 'block',
                        color: '#0B2341',
                        fontWeight: '600',
                        marginBottom: '0.5rem',
                        fontSize: '0.875rem'
                      }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          border: '2px solid rgba(16, 182, 198, 0.2)',
                          borderRadius: '12px',
                          fontSize: '1rem',
                          transition: 'border-color 0.3s ease',
                          boxSizing: 'border-box'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#10B6C6';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#e2e8f0';
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      color: '#0B2341',
                      fontWeight: '600',
                      marginBottom: '0.5rem',
                      fontSize: '0.875rem'
                    }}>
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '2px solid #e2e8f0',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#10B6C6';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e2e8f0';
                      }}
                    />
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      color: '#0B2341',
                      fontWeight: '600',
                      marginBottom: '0.5rem',
                      fontSize: '0.875rem'
                    }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '2px solid #e2e8f0',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease',
                        resize: 'vertical',
                        fontFamily: 'inherit',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#10B6C6';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e2e8f0';
                      }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ 
                      scale: 1.05,
                      y: -2,
                      boxShadow: '0 12px 35px rgba(16, 182, 198, 0.4)'
                    }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      background: 'linear-gradient(135deg, #10B6C6, #FF6A4A)',
                      color: 'white',
                      border: 'none',
                      padding: '1.25rem 2.5rem',
                      borderRadius: '50px',
                      fontSize: '1.125rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.75rem',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 8px 25px rgba(16, 182, 198, 0.3)',
                      alignSelf: 'center',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase'
                    }}
                  >
                    <Send size={20} />
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}
