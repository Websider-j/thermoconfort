import React from 'react';

interface EmergencyBannerProps {
  text?: string;
  phone?: string;
}

export function EmergencyBanner({ text, phone = '01 02 03 04 05' }: EmergencyBannerProps) {
  return (
    <div className="bg-emergency/90 backdrop-blur-md text-white text-center py-2.5 px-6 text-sm relative z-50">
      <span className="font-medium">
        {text || `Urgence plomberie ou chauffage ? Intervention 24h/24`} —{' '}
        <a href={`tel:+33${phone.replace(/\s/g, '').substring(1)}`} className="font-bold underline underline-offset-2 decoration-white/40 hover:decoration-white">
          {phone}
        </a>
      </span>
    </div>
  );
}
