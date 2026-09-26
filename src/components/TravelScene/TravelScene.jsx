import { ColorIcon } from '../ColorIcon/ColorIcon';
import './TravelScene.css';

const SCENES = {
  traveller: [
    { icon: 'suitcase', size: 66, left: '5%', top: 22, motion: 'bob' },
    { icon: 'passport', size: 48, left: '30%', top: 10, motion: 'float' },
    { icon: 'camera', size: 46, right: '22%', top: 34, motion: 'float' },
    { icon: 'sparkles', size: 30, right: '6%', top: 14, motion: 'twinkle' },
  ],
  destination: [
    { icon: 'globe', size: 66, left: '5%', top: 20, motion: 'wobble' },
    { icon: 'pin', size: 38, left: '30%', top: 12, motion: 'drop' },
    { icon: 'pin', size: 30, left: '44%', top: 50, motion: 'drop' },
    { icon: 'plane', size: 50, right: '8%', top: 16, motion: 'cruise' },
  ],
  vibe: [
    { icon: 'beach', size: 66, left: '5%', top: 22, motion: 'bob' },
    { icon: 'nightlife', size: 46, left: '31%', top: 12, motion: 'float' },
    { icon: 'camera', size: 46, right: '22%', top: 36, motion: 'float' },
    { icon: 'sparkles', size: 30, right: '6%', top: 12, motion: 'twinkle' },
  ],
  budget: [
    { icon: 'piggy', size: 66, left: '5%', top: 24, motion: 'bob' },
    { icon: 'coin', size: 36, left: '30%', top: 10, motion: 'flip' },
    { icon: 'coin', size: 28, left: '42%', top: 54, motion: 'flip' },
    { icon: 'tag', size: 46, right: '20%', top: 26, motion: 'float' },
    { icon: 'sparkles', size: 28, right: '5%', top: 12, motion: 'twinkle' },
  ],
  important: [
    { icon: 'passport', size: 58, left: '6%', top: 20, motion: 'float' },
    { icon: 'ticket', size: 56, left: '30%', top: 26, motion: 'bob' },
    { icon: 'shield', size: 44, right: '20%', top: 16, motion: 'pop' },
    { icon: 'sparkles', size: 28, right: '5%', top: 50, motion: 'twinkle' },
  ],
  personal: [
    { icon: 'balloon', size: 66, left: '5%', top: 12, motion: 'float' },
    { icon: 'romantic', size: 42, left: '31%', top: 38, motion: 'pop' },
    { icon: 'gift', size: 48, right: '20%', top: 28, motion: 'bob' },
    { icon: 'sparkles', size: 30, right: '5%', top: 12, motion: 'twinkle' },
  ],
};

export function TravelScene({ scene }) {
  const items = SCENES[scene] || [];

  return (
    <div className={`travel-scene travel-scene--${scene}`} aria-hidden="true">
      <svg className="travel-scene__path" viewBox="0 0 600 110" preserveAspectRatio="none">
        <path d="M-10 92 C 110 20, 220 108, 330 52 S 520 18, 610 44" />
      </svg>
      <span className="travel-scene__blob travel-scene__blob--one" />
      <span className="travel-scene__blob travel-scene__blob--two" />
      {items.map((item, index) => (
        <span
          key={`${item.icon}-${index}`}
          className="travel-scene__item"
          style={{
            left: item.left,
            right: item.right,
            top: item.top,
            '--enter-delay': `${index * 90}ms`,
            '--loop-delay': `${index * -0.7}s`,
          }}
        >
          <span className={`travel-scene__motion is-${item.motion}`}>
            <ColorIcon name={item.icon} size={item.size} />
          </span>
        </span>
      ))}
    </div>
  );
}
