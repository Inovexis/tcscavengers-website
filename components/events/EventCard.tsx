'use client';

import { Calendar, Clock, MapPin, Users, Trophy } from 'lucide-react';

interface EventCardProps {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  participants: number;
  maxParticipants: number;
  prizes: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  color: string;
  registrationOpen: boolean;
  onRegister?: () => void;
}

const difficultyColors = {
  'Easy': '#10B6C6',
  'Medium': '#FDBA2D',
  'Hard': '#FF6A4A'
};

export default function EventCard({
  id,
  title,
  date,
  time,
  location,
  participants,
  maxParticipants,
  prizes,
  difficulty,
  description,
  color,
  registrationOpen,
  onRegister
}: EventCardProps) {
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
      
      {/* Header with Title and Difficulty */}
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
          {title}
        </h3>
        <div style={{
          background: difficultyColors[difficulty],
          color: 'white',
          padding: '0.25rem 0.75rem',
          borderRadius: '15px',
          fontSize: '0.875rem',
          fontWeight: '600'
        }}>
          {difficulty}
        </div>
      </div>
      
      {/* Description */}
      <p style={{
        color: 'rgba(11, 35, 65, 0.8)',
        lineHeight: 1.6,
        marginBottom: '1.5rem'
      }}>
        {description}
      </p>
      
      {/* Event Details Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem',
        marginBottom: '1.5rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Calendar size={16} color={color} />
          <span style={{ fontSize: '0.875rem', color: 'rgba(11, 35, 65, 0.7)' }}>
            {date}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Clock size={16} color={color} />
          <span style={{ fontSize: '0.875rem', color: 'rgba(11, 35, 65, 0.7)' }}>
            {time}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <MapPin size={16} color={color} />
          <span style={{ fontSize: '0.875rem', color: 'rgba(11, 35, 65, 0.7)' }}>
            {location}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Users size={16} color={color} />
          <span style={{ fontSize: '0.875rem', color: 'rgba(11, 35, 65, 0.7)' }}>
            {participants}/{maxParticipants}
          </span>
        </div>
      </div>
      
      {/* Footer with Prizes and Register Button */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1.5rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Trophy size={16} color={color} />
          <span style={{ fontSize: '0.875rem', color: 'rgba(11, 35, 65, 0.7)' }}>
            {prizes}
          </span>
        </div>
        <button
          onClick={onRegister}
          disabled={!registrationOpen}
          style={{
            background: registrationOpen 
              ? `linear-gradient(135deg, ${color}, ${color}80)` 
              : 'rgba(11, 35, 65, 0.3)',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '25px',
            fontSize: '0.875rem',
            fontWeight: '600',
            cursor: registrationOpen ? 'pointer' : 'not-allowed',
            transition: 'all 0.3s ease',
            opacity: registrationOpen ? 1 : 0.6
          }}
        >
          {registrationOpen ? 'Register Now' : 'Registration Closed'}
        </button>
      </div>
    </div>
  );
}
