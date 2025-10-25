'use client';

import Link from 'next/link';
import { Instagram } from 'lucide-react';
import Image from 'next/image';

interface FooterProps {
  currentPage?: string;
}

export default function Footer({ currentPage }: FooterProps) {
  return (
    <footer style={{
      background: 'rgba(11, 35, 65, 0.9)',
      backdropFilter: 'blur(25px)',
      padding: '1rem 0',
      borderTop: '1px solid rgba(16, 182, 198, 0.3)',
      width: '100%',
      boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.2)',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        {/* Logo */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              position: 'relative',
              width: '120px',
              height: '60px'
            }}>
                <Image
                  alt="Treasure Coast Scavengers Logo"
                  width={120}
                  height={60}
                  style={{
                    color: 'transparent',
                    objectFit: 'contain',
                    borderRadius: '50%'
                  }}
                  src="/images/TCS_new_logo.png"
                />
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#0B2341',
                lineHeight: 1.1,
                textAlign: 'center',
                cursor: 'default'
              }}>
                TREASURE COAST
              </div>
              <div style={{
                fontSize: '10px',
                fontWeight: '500',
                color: '#6B7280',
                lineHeight: 1.2,
                letterSpacing: '0.1em',
                textAlign: 'center',
                cursor: 'default'
              }}>
                SCAVENGERS INC.
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          {['Home', 'About', 'Donate', 'Events', 'Contact'].map((link) => (
            <Link
              key={link}
              href={`/${link.toLowerCase()}`}
              style={{
                color: link === currentPage ? '#10B6C6' : 'rgba(255, 255, 255, 0.9)',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '0.875rem',
                transition: 'color 0.3s ease',
                whiteSpace: 'nowrap'
              }}
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'center'
        }}>
          <a
            href="https://www.instagram.com/treasurecoastscavengers/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'rgba(255, 255, 255, 0.9)',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '0.875rem',
              transition: 'color 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              whiteSpace: 'nowrap'
            }}
          >
            <Instagram size={16} />
            Follow Us
          </a>
        </div>
      </div>
      
      {/* Centered Legal Text */}
      <div style={{
        textAlign: 'center',
        marginTop: '0.75rem',
        paddingTop: '0.75rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <p style={{
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: '0.75rem',
          margin: '0 0 0.25rem 0',
          lineHeight: 1.3,
          cursor: 'default'
        }}>
          Treasure Coast Scavengers Inc. is a 501(c)(3) nonprofit organization.
        </p>
        <p style={{
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '0.75rem',
          margin: 0,
          cursor: 'default'
        }}>
          © 2025 Treasure Coast Scavengers Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}