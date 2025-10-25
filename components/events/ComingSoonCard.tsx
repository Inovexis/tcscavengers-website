'use client';

import { Instagram } from 'lucide-react';

interface ComingSoonCardProps {
  color?: string;
  onInstagramClick?: () => void;
}

export default function ComingSoonCard({ 
  color = '#10B6C6',
  onInstagramClick 
}: ComingSoonCardProps) {
  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '20px',
        padding: '2rem',
        boxShadow: '0 15px 40px rgba(11, 35, 65, 0.1)',
        border: '1px solid rgba(16, 182, 198, 0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Color Strip at Top */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: `linear-gradient(90deg, ${color}, ${color}80)`
      }} />
      
      {/* Header with Title and Coming Soon Badge */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '1.5rem'
      }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#0B2341',
          margin: 0,
          lineHeight: 1.3
        }}>
          More Adventures Coming Soon
        </h3>
        <div style={{
          background: 'linear-gradient(135deg, #E1306C, #F56040)',
          color: 'white',
          padding: '0.25rem 0.75rem',
          borderRadius: '15px',
          fontSize: '0.875rem',
          fontWeight: '600'
        }}>
          Coming Soon
        </div>
      </div>
      
      {/* Description */}
      <p style={{
        color: 'rgba(11, 35, 65, 0.8)',
        lineHeight: 1.6,
        marginBottom: '1.5rem'
      }}>
        We're planning exciting new treasure hunts across the Treasure Coast! Follow our Instagram to be the first to know about upcoming adventures, behind-the-scenes content, and exclusive announcements.
      </p>
      
      {/* Instagram Info */}
      <div style={{
        background: 'rgba(16, 182, 198, 0.1)',
        borderRadius: '15px',
        padding: '1.5rem',
        marginBottom: '1.5rem',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          marginBottom: '0.75rem'
        }}>
          <Instagram size={24} color="#E1306C" />
          <span style={{
            fontSize: '1.125rem',
            fontWeight: '600',
            color: '#0B2341'
          }}>
            @treasurecoastscavengers
          </span>
        </div>
        <p style={{
          color: 'rgba(11, 35, 65, 0.7)',
          fontSize: '0.875rem',
          margin: 0
        }}>
          Follow for updates, photos, and exclusive content
        </p>
      </div>
      
      {/* Footer with Instagram Button */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <button
          onClick={onInstagramClick}
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
            gap: '0.5rem',
            boxShadow: '0 4px 15px rgba(225, 48, 108, 0.3)'
          }}
        >
          <Instagram size={20} />
          Follow on Instagram
        </button>
      </div>
    </div>
  );
}
