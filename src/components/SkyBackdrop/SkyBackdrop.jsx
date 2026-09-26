import { ColorIcon } from '../ColorIcon/ColorIcon';
import './SkyBackdrop.css';

export function SkyBackdrop({ scene = 'traveller' }) {
  return (
    <div className={`sky-backdrop sky-backdrop--${scene}`} aria-hidden="true">
      <div className="sky-backdrop__glow" />
      <div className="sky-backdrop__wash" />
      <div className="sky-sun" />
      <div className="sky-cloud sky-cloud--one" />
      <div className="sky-cloud sky-cloud--two" />
      <div className="sky-cloud sky-cloud--three" />
      <div className="sky-plane">
        <span />
      </div>
      <div className="sky-balloon">
        <ColorIcon name="balloon" size={56} />
      </div>
      <svg className="sky-waves" viewBox="0 0 1440 180" preserveAspectRatio="none">
        <path
          className="sky-waves__back"
          d="M0 80 C 240 140 360 20 720 80 C 1080 140 1200 40 1440 90 L 1440 180 L 0 180 Z"
        />
        <path
          className="sky-waves__front"
          d="M0 110 C 180 60 420 160 720 110 C 1020 60 1260 150 1440 100 L 1440 180 L 0 180 Z"
        />
      </svg>
    </div>
  );
}
