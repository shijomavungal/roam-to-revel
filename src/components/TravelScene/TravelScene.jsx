import { ColorIcon } from '../ColorIcon/ColorIcon';
import './TravelScene.css';

const SCENES = {
  traveller: [
    { icon: 'suitcase', size: 54, right: '30%', top: 22, motion: 'bob' },
    { icon: 'passport', size: 40, right: '19%', top: 8, motion: 'float' },
    { icon: 'camera', size: 40, right: '9%', top: 44, motion: 'float' },
    { icon: 'sparkles', size: 26, right: '3%', top: 10, motion: 'twinkle' },
  ],
  destination: [
    { icon: 'globe', size: 54, right: '30%', top: 20, motion: 'wobble' },
    { icon: 'pin', size: 32, right: '21%', top: 10, motion: 'drop' },
    { icon: 'pin', size: 26, right: '16%', top: 56, motion: 'drop' },
    { icon: 'plane', size: 44, right: '4%', top: 18, motion: 'cruise' },
  ],
  vibe: [
    { icon: 'beach', size: 54, right: '30%', top: 22, motion: 'bob' },
    { icon: 'nightlife', size: 40, right: '19%', top: 8, motion: 'float' },
    { icon: 'camera', size: 40, right: '9%', top: 44, motion: 'float' },
    { icon: 'sparkles', size: 26, right: '3%', top: 10, motion: 'twinkle' },
  ],
  budget: [
    { icon: 'piggy', size: 54, right: '30%', top: 24, motion: 'bob' },
    { icon: 'coin', size: 32, right: '21%', top: 8, motion: 'flip' },
    { icon: 'tag', size: 40, right: '9%', top: 30, motion: 'float' },
    { icon: 'sparkles', size: 24, right: '3%', top: 10, motion: 'twinkle' },
    { icon: 'coin', size: 24, right: '19%', top: 58, motion: 'flip' },
  ],
  important: [
    { icon: 'passport', size: 50, right: '30%', top: 20, motion: 'float' },
    { icon: 'ticket', size: 46, right: '17%', top: 28, motion: 'bob' },
    { icon: 'shield', size: 38, right: '7%', top: 10, motion: 'pop' },
    { icon: 'sparkles', size: 24, right: '3%', top: 58, motion: 'twinkle' },
  ],
  personal: [
    { icon: 'balloon', size: 54, right: '30%', top: 12, motion: 'float' },
    { icon: 'romantic', size: 36, right: '20%', top: 44, motion: 'pop' },
    { icon: 'gift', size: 42, right: '9%', top: 26, motion: 'bob' },
    { icon: 'sparkles', size: 26, right: '3%', top: 10, motion: 'twinkle' },
  ],
};

export function TravelScene({ scene, children }) {
  const items = SCENES[scene] || [];

  return (
    <div className={`travel-scene travel-scene--${scene}`}>
      <svg className="travel-scene__path" viewBox="0 0 600 110" preserveAspectRatio="none" aria-hidden="true">
        <path d="M-10 92 C 110 20, 220 108, 330 52 S 520 18, 610 44" />
      </svg>
      <span className="travel-scene__blob travel-scene__blob--one" aria-hidden="true" />
      <span className="travel-scene__blob travel-scene__blob--two" aria-hidden="true" />
      {items.map((item, index) => (
        <span
          key={`${item.icon}-${index}`}
          className="travel-scene__item"
          aria-hidden="true"
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
      {children ? <div className="travel-scene__content">{children}</div> : null}
    </div>
  );
}
