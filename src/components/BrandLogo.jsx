import React from 'react';
import { Link } from 'react-router-dom';
import vitalwatchLogo from '../assets/vitalwatch-logo.png';

export const VITALWATCH_LOGO_URL = vitalwatchLogo;

export default function BrandLogo({ imageClassName = 'w-10 h-10', textClassName = 'font-headline-lg text-headline-lg font-bold text-primary' }) {
  return (
    <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity" aria-label="Go to role selection">
      <img alt="VitalWatch Logo" className={`${imageClassName} object-contain drop-shadow-sm`} src={VITALWATCH_LOGO_URL} />
      <span className={textClassName}>VitalWatch</span>
    </Link>
  );
}
