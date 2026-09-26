import './Confetti.css';

const COLORS = ['#ff6b4a', '#ffc53d', '#12b5b0', '#e0457b', '#7b5cff', '#1fa971', '#1ca3ec', '#ff5c8a'];
const SHAPES = ['rect', 'circle', 'strip'];

function noise(index, salt) {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

function buildPieces(count, variant) {
  return Array.from({ length: count }, (_, index) => {
    const style = {
      '--c': COLORS[index % COLORS.length],
      '--r': `${Math.round((noise(index, 1) - 0.5) * 1080)}deg`,
      '--d': `${Math.round(noise(index, 2) * (variant === 'shower' ? 1600 : 160))}ms`,
      '--dur': `${Math.round((variant === 'shower' ? 2600 : 1300) + noise(index, 3) * 900)}ms`,
    };

    if (variant === 'shower') {
      style['--left'] = `${(noise(index, 4) * 100).toFixed(1)}%`;
      style['--x'] = `${Math.round((noise(index, 5) - 0.5) * 160)}px`;
    } else {
      style['--x'] = `${Math.round((noise(index, 4) - 0.5) * 80)}vw`;
      style['--rise'] = `${Math.round(-80 - noise(index, 5) * 180)}px`;
      style['--fall'] = `${Math.round(160 + noise(index, 6) * 260)}px`;
    }

    return { style, shape: SHAPES[index % SHAPES.length] };
  });
}

export function Confetti({ count = 36, variant = 'burst' }) {
  const pieces = buildPieces(count, variant);

  return (
    <div className={`confetti confetti--${variant}`} aria-hidden="true">
      {pieces.map((piece, index) => (
        <span key={index} className={`confetti__piece is-${piece.shape}`} style={piece.style} />
      ))}
    </div>
  );
}
