'use client';

import { motion, useInView } from 'framer-motion';
import { Building, DollarSign, Users, Target, Shield, CheckCircle, Star, Gift, Zap, ArrowLeft, Crown, Globe } from 'lucide-react';
import { useRef, useState } from 'react';
import Logo from '@/components/Logo';

export default function CorporateDonatePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedAmount, setSelectedAmount] = useState(2500);
  const [customAmount, setCustomAmount] = useState('');

  const corporateAmounts = [500, 1000, 2500, 5000, 10000, 25000];
  
  const impactStats = [
    { icon: Users, value: '1,500+', label: 'Families Reached', color: '#10B6C6' },
    { icon: Target, value: '25', label: 'Events Hosted', color: '#FF6A4A' },
    { icon: Gift, value: '$50K+', label: 'Prizes Donated', color: '#FDBA2D' },
    { icon: Building, value: '15+', label: 'Corporate Partners', color: '#10B6C6' }
  ];

  const corporateTiers = [
    {
      name: 'Small Business Supporter',
      amount: 500,
      description: 'Perfect for small businesses and local shops',
      impact: 'Sponsors 2-3 families per month',
      benefits: ['Thank you email', 'Social media recognition', 'Event updates', 'Impact report'],
      color: '#10B6C6',
      popular: false
    },
    {
      name: 'Local Business Partner',
      amount: 1000,
      description: 'Ideal for growing local businesses',
      impact: 'Sponsors 5-8 families per month',
      benefits: ['All Small Business Supporter benefits', 'Logo on website', 'Digital certificate', 'Quarterly calls'],
      color: '#FF6A4A',
      popular: false
    },
    {
      name: 'Community Partner',
      amount: 2500,
      description: 'Quarterly sponsorship - 3 months of events',
      impact: 'Sponsors 15-20 families per month',
      benefits: ['All Local Business Partner benefits', 'Logo on all materials', 'Event booth opportunities', 'Quarterly impact reports'],
      color: '#FDBA2D',
      popular: true
    },
    {
      name: 'Treasure Coast Champion',
      amount: 5000,
      description: 'Semi-annual sponsorship - 6 months of events',
      impact: 'Sponsors 30-40 families per month',
      benefits: ['All Community Partner benefits', 'Featured sponsor status', 'Custom event opportunities', 'Monthly impact calls'],
      color: '#10B6C6',
      popular: false
    },
    {
      name: 'Platinum Partner',
      amount: 10000,
      description: 'Annual sponsorship - 12 months of events',
      impact: 'Sponsors 50+ families per month',
      benefits: ['All Treasure Coast Champion benefits', 'Exclusive naming rights', 'Board advisory position', 'Custom impact initiatives'],
      color: '#FF6A4A',
      popular: false
    },
    {
      name: 'Founding Sponsor',
      amount: 25000,
      description: 'Multi-year partnership - 2+ years of events',
      impact: 'Enables program expansion and new initiatives',
      benefits: ['All Platinum Partner benefits', 'Founding recognition', 'Strategic input on programs', 'Exclusive partnership opportunities'],
      color: '#FDBA2D',
      popular: false
    }
  ];

  const getImpactDescription = (amount: number) => {
    if (amount >= 25000) return 'Enables program expansion and new initiatives';
    if (amount >= 10000) return 'Sponsors 50+ families per month';
    if (amount >= 5000) return 'Sponsors 30-40 families per month';
    if (amount >= 2500) return 'Sponsors 15-20 families per month';
    if (amount >= 1000) return 'Sponsors 5-8 families per month';
    if (amount >= 500) return 'Sponsors 2-3 families per month';
    return 'Every dollar helps us create magical experiences for families';
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value && !isNaN(Number(value))) {
      setSelectedAmount(Number(value));
    }
  };

  const getDisplayAmount = () => {
    return customAmount && !isNaN(Number(customAmount)) ? Number(customAmount) : selectedAmount;
  };

  return (
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

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ 
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
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{ 
              cursor: 'pointer',
              filter: 'drop-shadow(0 4px 12px rgba(16, 182, 198, 0.3))'
            }}
          >
            <Logo size="md" animated={true} showText={false} />
          </motion.div>
          
          <div style={{ 
            display: 'flex', 
            gap: '2rem',
            alignItems: 'center'
          }}>
            {['Home', 'Events', 'Donate', 'About', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  color: '#10B6C6'
                }}
                style={{
                  color: item === 'Donate' ? '#10B6C6' : '#0B2341',
                  textDecoration: 'none',
                  fontWeight: '600',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  padding: '0.5rem 1rem',
                  borderRadius: '25px'
                }}
              >
                {item}
                {item === 'Donate' && (
                  <motion.div
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
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Back Button */}
      <section style={{
        paddingTop: '8rem',
        paddingBottom: '2rem',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <motion.a
            href="/donate"
            whileHover={{ x: -5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#10B6C6',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1rem'
            }}
          >
            <ArrowLeft size={20} />
            Back to Giving Options
          </motion.a>
        </div>
      </section>

      {/* Hero Section */}
      <section style={{
        padding: '2rem 0 4rem 0',
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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '2rem' }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                display: 'inline-block',
                marginBottom: '1.5rem'
              }}
            >
              <Building size={60} color="#FF6A4A" />
            </motion.div>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '1.5rem',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}>
              Corporate Partnership
            </h1>
            <p style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '700px',
              margin: '0 auto 2rem auto',
              lineHeight: 1.6
            }}>
              From small mom-and-pop shops to large corporations, every business can make a difference. 
              Build meaningful community partnerships while gaining visibility and supporting local families.
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(255, 106, 74, 0.2)',
              padding: '0.5rem 1rem',
              borderRadius: '25px',
              border: '1px solid rgba(255, 106, 74, 0.3)'
            }}>
              <Crown size={20} color="#FF6A4A" />
              <span style={{ color: '#FF6A4A', fontWeight: '600' }}>Flexible Partnership Options</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section style={{
        padding: '2rem 0',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                style={{
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '2rem 1rem',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${stat.color}, ${stat.color}80)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem auto',
                    boxShadow: `0 10px 30px ${stat.color}40`
                  }}
                >
                  <stat.icon size={30} color="white" />
                </motion.div>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '0.5rem'
                }}>
                  {stat.value}
                </div>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.875rem'
                }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Tiers */}
      <section ref={ref} style={{
        padding: '2rem 0 6rem 0',
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
            transition={{ duration: 0.6 }}
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              marginBottom: '3rem'
            }}
          >
            Partnership Tiers
          </motion.h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {corporateTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => {
                  setSelectedAmount(tier.amount);
                  setCustomAmount('');
                }}
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 15px 40px rgba(11, 35, 65, 0.1)',
                  border: selectedAmount === tier.amount && !customAmount ? `3px solid ${tier.color}` : `2px solid ${tier.color}20`,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {tier.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'linear-gradient(135deg, #FF6A4A, #FDBA2D)',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}>
                    <Star size={12} />
                    Most Popular
                  </div>
                )}

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${tier.color}, ${tier.color}80)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 10px 30px ${tier.color}40`
                  }}>
                    <Building size={30} color="white" />
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      color: '#0B2341',
                      marginBottom: '0.25rem'
                    }}>
                      {tier.name}
                    </h3>
                    <div style={{
                      fontSize: '2rem',
                      fontWeight: 'bold',
                      color: tier.color
                    }}>
                      ${tier.amount.toLocaleString()}
                    </div>
                  </div>
                </div>

                <p style={{
                  color: 'rgba(11, 35, 65, 0.8)',
                  marginBottom: '1rem',
                  lineHeight: 1.5
                }}>
                  {tier.description}
                </p>

                <div style={{
                  background: `${tier.color}10`,
                  padding: '1rem',
                  borderRadius: '12px',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    <Zap size={16} color={tier.color} />
                    <span style={{
                      fontWeight: '600',
                      color: tier.color,
                      fontSize: '0.875rem'
                    }}>
                      Your Impact
                    </span>
                  </div>
                  <p style={{
                    color: 'rgba(11, 35, 65, 0.8)',
                    fontSize: '0.875rem',
                    lineHeight: 1.4
                  }}>
                    {tier.impact}
                  </p>
                </div>

                <div>
                  <h4 style={{
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#0B2341',
                    marginBottom: '0.75rem'
                  }}>
                    Partnership Benefits:
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} style={{
                        fontSize: '0.75rem',
                        color: 'rgba(11, 35, 65, 0.7)',
                        marginBottom: '0.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem'
                      }}>
                        <CheckCircle size={12} color={tier.color} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Amount Selection */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '20px',
              padding: '2.5rem',
              boxShadow: '0 20px 50px rgba(11, 35, 65, 0.1)',
              border: '1px solid rgba(255, 106, 74, 0.1)',
              textAlign: 'center'
            }}
          >
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#0B2341',
              marginBottom: '1rem'
            }}>
              Quick Partnership Amounts
            </h3>
            <p style={{
              color: 'rgba(11, 35, 65, 0.8)',
              marginBottom: '2rem'
            }}>
              Choose from our suggested amounts or enter any amount that works for your business
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              {corporateAmounts.map((amount) => (
                <motion.button
                  key={amount}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount('');
                  }}
                  style={{
                    padding: '1rem',
                    borderRadius: '12px',
                    border: selectedAmount === amount && !customAmount ? '2px solid #FF6A4A' : '2px solid #e5e7eb',
                    background: selectedAmount === amount && !customAmount ? '#FF6A4A10' : 'white',
                    color: selectedAmount === amount && !customAmount ? '#FF6A4A' : '#0B2341',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  ${amount.toLocaleString()}
                </motion.button>
              ))}
            </div>

            {/* Custom Amount Input */}
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#0B2341',
                marginBottom: '1rem'
              }}>
                Or Enter Any Amount
              </h4>
              <div style={{ position: 'relative', maxWidth: '300px', margin: '0 auto' }}>
                <DollarSign 
                  size={20} 
                  color="#FF6A4A" 
                  style={{ 
                    position: 'absolute', 
                    left: '1rem', 
                    top: '50%', 
                    transform: 'translateY(-50%)' 
                  }} 
                />
                <input
                  type="number"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  placeholder="Enter any amount"
                  style={{
                    width: '100%',
                    padding: '1rem 1rem 1rem 3rem',
                    borderRadius: '12px',
                    border: '2px solid #e5e7eb',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    outline: 'none',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#FF6A4A'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 106, 74, 0.1)',
              padding: '1.5rem',
              borderRadius: '12px',
              marginBottom: '2rem'
            }}>
              <h4 style={{
                fontSize: '1.125rem',
                fontWeight: 'bold',
                color: '#0B2341',
                marginBottom: '0.5rem'
              }}>
                Your ${getDisplayAmount().toLocaleString()} Partnership Will:
              </h4>
              <p style={{
                color: 'rgba(11, 35, 65, 0.8)',
                fontSize: '1rem'
              }}>
                {getImpactDescription(getDisplayAmount())}
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: 'linear-gradient(135deg, #FF6A4A, #FDBA2D)',
                color: 'white',
                border: 'none',
                padding: '1rem 2.5rem',
                borderRadius: '12px',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '1.125rem',
                boxShadow: '0 10px 30px rgba(255, 106, 74, 0.3)',
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
              <Building size={20} style={{ marginRight: '0.5rem' }} />
              Start Partnership - ${getDisplayAmount().toLocaleString()}
            </motion.button>

            <p style={{
              fontSize: '0.875rem',
              color: 'rgba(11, 35, 65, 0.6)',
              marginTop: '1rem'
            }}>
              Your partnership is tax-deductible. We'll send you a receipt immediately.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
