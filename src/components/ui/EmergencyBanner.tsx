import React from 'react';

interface EmergencyBannerProps {
  text?: string;
  phone?: string;
}

export function EmergencyBanner({ text, phone = '01 02 03 04 05' }: EmergencyBannerProps) {
  return (
    <div className="bg-emergency text-white text-center py-2.5 px-6 text-sm">
      <span className="font-medium">
        {text || `Urgence plomberie ou chauffage en Ile-de-France ? Intervention 24h/24 et 7j/7`} —{' '}
        <a href={`tel:+33${phone.replace(/\s/g, '').substring(1)}`} className="font-bold underline underline-offset-2 decoration-white/40 hover:decoration-white">
          {phone}
        </a>
      </span>
    </div>
  );
}
