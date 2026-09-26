import './ColorIcon.css';

const C = {
  sun: '#ffc53d',
  orange: '#ff8a3d',
  coral: '#ff6b4a',
  pink: '#ff5c8a',
  pinkDeep: '#e33d6d',
  magenta: '#e0457b',
  purple: '#7b5cff',
  purpleDeep: '#5b3fd9',
  sea: '#1ca3ec',
  sky: '#9fdcff',
  teal: '#12b5b0',
  tealLight: '#7de3df',
  green: '#2bb673',
  leaf: '#7ed957',
  brown: '#a0643a',
  sand: '#ffd98a',
  skin: '#ffcf9e',
  ink: '#1f2a44',
  grey: '#d5dce6',
  slate: '#94a3b8',
  red: '#ef4444',
  white: '#ffffff',
};

const line = { fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' };

const HEART = 'M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z';

function Heart({ x, y, k = 1, fill }) {
  return <path d={HEART} fill={fill} transform={`translate(${x - 12 * k} ${y - 13 * k}) scale(${k})`} />;
}

function Spark({ x, y, r, fill }) {
  return (
    <path
      d={`M${x} ${y - r}Q${x} ${y} ${x + r} ${y}Q${x} ${y} ${x} ${y + r}Q${x} ${y} ${x - r} ${y}Q${x} ${y} ${x} ${y - r}Z`}
      fill={fill}
    />
  );
}

function starPath(cx, cy, outer, inner = outer * 0.45) {
  const points = [];
  for (let i = 0; i < 10; i += 1) {
    const radius = i % 2 === 0 ? outer : inner;
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    points.push(`${(cx + radius * Math.cos(angle)).toFixed(2)} ${(cy + radius * Math.sin(angle)).toFixed(2)}`);
  }
  return `M${points.join('L')}Z`;
}

function Person({ x, top, w, bottom, r, fill, hair }) {
  const h = bottom - top;
  const cy = top - r - 1.5;
  return (
    <>
      <path
        d={`M${x - w} ${bottom}c0-${h * 0.75} ${w * 0.45}-${h} ${w}-${h}s${w} ${h * 0.25} ${w} ${h}z`}
        fill={fill}
      />
      <circle cx={x} cy={cy} r={r} fill={C.skin} />
      {hair ? (
        <path d={`M${x - r} ${cy}a${r} ${r} 0 0 1 ${2 * r} 0q-${r} -${r * 0.55} -${2 * r} 0z`} fill={hair} />
      ) : null}
    </>
  );
}

function Car({ body }) {
  return (
    <>
      <path
        d="M6 31l4-10c1-2.4 3-3.6 5.5-3.6h17c2.5 0 4.5 1.2 5.5 3.6l4 10v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z"
        fill={body}
      />
      <path d="M12.5 27l2.4-6c.4-1 1.2-1.6 2.2-1.6H23V27z" fill={C.sky} />
      <path d="M25 19.4h6c1 0 1.8.6 2.2 1.6l2.4 6H25z" fill={C.sky} />
      <rect x="7" y="31" width="5" height="3" rx="1.5" fill={C.white} />
      <rect x="36" y="31" width="5" height="3" rx="1.5" fill={C.white} />
      <circle cx="14" cy="40" r="4.6" fill={C.ink} />
      <circle cx="14" cy="40" r="1.8" fill={C.grey} />
      <circle cx="34" cy="40" r="4.6" fill={C.ink} />
      <circle cx="34" cy="40" r="1.8" fill={C.grey} />
    </>
  );
}

function Calendar({ range }) {
  return (
    <>
      <rect x="6" y="10" width="36" height="32" rx="5" fill={C.white} stroke={C.grey} strokeWidth="1.5" />
      <path d="M6 15a5 5 0 0 1 5-5h26a5 5 0 0 1 5 5v5H6z" fill={C.coral} />
      <rect x="14" y="6" width="3" height="8" rx="1.5" fill={C.ink} />
      <rect x="31" y="6" width="3" height="8" rx="1.5" fill={C.ink} />
      {range ? <rect x="16.5" y="29" width="21" height="8" rx="4" fill={C.sun} /> : null}
      {[13, 20, 27, 34].map((cx) => (
        <circle key={`a${cx}`} cx={cx} cy="26" r="1.8" fill={C.slate} />
      ))}
      {[13, 20, 27, 34].map((cx) => (
        <circle key={`b${cx}`} cx={cx} cy="33" r="1.8" fill={range && cx > 13 ? C.white : C.slate} />
      ))}
    </>
  );
}

function Stars({ spots }) {
  return (
    <>
      <rect x="9" y="37" width="30" height="6" rx="3" fill={C.purple} />
      {spots.map(([cx, cy, r]) => (
        <path key={`${cx}-${cy}`} d={starPath(cx, cy, r)} fill={C.sun} stroke={C.orange} strokeWidth="1.2" strokeLinejoin="round" />
      ))}
    </>
  );
}

const ICONS = {
  solo: () => (
    <>
      <Person x={24} top={28} w={15} bottom={43} r={7.5} fill={C.coral} hair={C.brown} />
      <Spark x={40} y={9} r={4} fill={C.sun} />
    </>
  ),
  couple: () => (
    <>
      <Person x={15} top={30} w={11} bottom={43} r={5.8} fill={C.teal} hair={C.brown} />
      <Person x={33} top={30} w={11} bottom={43} r={5.8} fill={C.pink} hair={C.ink} />
      <Heart x={24} y={9} k={0.5} fill={C.red} />
    </>
  ),
  family: () => (
    <>
      <Person x={13} top={27} w={9} bottom={41} r={5} fill={C.purple} hair={C.brown} />
      <Person x={35} top={27} w={9} bottom={41} r={5} fill={C.orange} hair={C.ink} />
      <Person x={24} top={34} w={7} bottom={44} r={4} fill={C.green} hair={C.brown} />
    </>
  ),
  friends: () => (
    <>
      <Person x={11} top={30} w={8.5} bottom={43} r={5} fill={C.teal} hair={C.ink} />
      <Person x={37} top={30} w={8.5} bottom={43} r={5} fill={C.pink} hair={C.brown} />
      <Person x={24} top={27} w={10} bottom={44} r={5.6} fill={C.sun} hair={C.brown} />
    </>
  ),
  group: () => (
    <>
      <rect x="38.5" y="5" width="2.4" height="27" rx="1.2" fill={C.brown} />
      <path d="M40.9 6h6l-2 3.5 2 3.5h-6z" fill={C.coral} />
      <Person x={10} top={32} w={7.5} bottom={43} r={4.5} fill={C.purple} hair={C.ink} />
      <Person x={32} top={32} w={7.5} bottom={43} r={4.5} fill={C.sun} hair={C.brown} />
      <Person x={21} top={28} w={9} bottom={44} r={5} fill={C.teal} hair={C.brown} />
    </>
  ),
  special: () => (
    <>
      <path d={starPath(24, 26, 17, 7.5)} fill={C.sun} stroke={C.orange} strokeWidth="1.5" strokeLinejoin="round" />
      <Spark x={40} y={8} r={4.5} fill={C.pink} />
      <Spark x={8} y={38} r={3.5} fill={C.teal} />
      <Spark x={9} y={9} r={3} fill={C.purple} />
    </>
  ),
  beach: () => (
    <>
      <circle cx="35" cy="13" r="7" fill={C.sun} />
      <path d="M2 35c4-3 7.5-3 11 0s7.5 3 11 0 7.5-3 11 0 7.5 3 11 0v9H2z" fill={C.sea} />
      <path d="M2 45c5-6 13-8 21-8s15 2 23 8z" fill={C.sand} />
      <path d="M15 41c0-9 1.5-17 6-24" stroke={C.brown} strokeWidth="3" {...line} />
      <path d="M21 17C16 10 9 10 5 15C10 17 16 18 21 17Z" fill={C.green} />
      <path d="M21 17C24 10 31 8 36 11C31 12 25 15 21 17Z" fill={C.green} />
      <path d="M21 17C19 10 14 6 9 7C12 11 16 15 21 17Z" fill={C.leaf} />
      <path d="M21 17C27 15 33 17 36 22C31 21 26 19 21 17Z" fill={C.leaf} />
    </>
  ),
  culture: () => (
    <>
      <path d="M5 18L24 6l19 12z" fill={C.coral} />
      <rect x="8" y="18" width="32" height="4" rx="1" fill={C.sun} />
      {[11, 19, 27, 35].map((x) => (
        <rect key={x} x={x - 0.5} y="23" width="3.5" height="13" rx="1" fill={C.white} stroke={C.teal} strokeWidth="1.5" />
      ))}
      <rect x="6" y="36" width="36" height="6" rx="1.5" fill={C.purple} />
      <circle cx="24" cy="13.5" r="2" fill={C.white} />
    </>
  ),
  mountains: () => (
    <>
      <circle cx="38" cy="11" r="5.5" fill={C.sun} />
      <path d="M19 43l13-25 14 25z" fill={C.purple} />
      <path d="M2 43L18 12l17 31z" fill={C.teal} />
      <path d="M18 12l-5.2 10 3.2-1.6 2 2.2 2-2.2 3.2 1.6z" fill={C.white} />
      <path d="M32 18l-3.6 7 2.2-1 1.4 1.4 1.4-1.4 2.2 1z" fill={C.white} />
    </>
  ),
  food: () => (
    <>
      <path d="M14 16c-2-2 2-4 0-7M19 15c-2-2 2-4 0-7" stroke={C.slate} strokeWidth="2" {...line} />
      <path d="M30 4L21 22M37 6L25 23" stroke={C.brown} strokeWidth="2.6" {...line} />
      <ellipse cx="24" cy="24" rx="18" ry="4" fill={C.sun} />
      <path d="M6 24h36c0 10-8 17-18 17S6 34 6 24z" fill={C.coral} />
      <circle cx="16" cy="31" r="1.6" fill={C.white} />
      <circle cx="24" cy="33" r="1.6" fill={C.white} />
      <circle cx="32" cy="31" r="1.6" fill={C.white} />
      <rect x="17" y="40" width="14" height="4" rx="2" fill={C.magenta} />
    </>
  ),
  shopping: () => (
    <>
      <path d="M27 21h15l-1.5 21H28.5z" fill={C.teal} />
      <path d="M31 21v-2a3.5 3.5 0 0 1 7 0v2" stroke={C.teal} strokeWidth="2.4" {...line} />
      <path d="M8 16h24l-2 27H10z" fill={C.pink} />
      <path d="M14 16v-3a6 6 0 0 1 12 0v3" stroke={C.magenta} strokeWidth="3" {...line} />
      <Heart x={20} y={29} k={0.45} fill={C.white} />
    </>
  ),
  nature: () => (
    <>
      <path d="M24 44V22" stroke={C.brown} strokeWidth="3" {...line} />
      <path d="M24 30C14 30 8 24 7 14c10 0 16 5 17 16z" fill={C.green} />
      <path d="M24 25c1-10 7-16 17-16 0 10-6 16-17 16z" fill={C.leaf} />
      <path d="M24 30C19 26 14 21 11 17M24 25c3-5 8-10 13-12" stroke={C.white} strokeWidth="1.4" opacity="0.6" {...line} />
      <g transform="translate(36 35)">
        <ellipse cx="-3.2" cy="0" rx="3.5" ry="4.5" fill={C.pink} />
        <ellipse cx="3.2" cy="0" rx="3.5" ry="4.5" fill={C.sun} />
        <rect x="-0.8" y="-4" width="1.6" height="8" rx="0.8" fill={C.ink} />
      </g>
    </>
  ),
  romantic: () => (
    <>
      <Heart x={22} y={26} k={1.6} fill={C.pink} />
      <ellipse cx="14" cy="19" rx="3" ry="2" fill={C.white} opacity="0.55" transform="rotate(-35 14 19)" />
      <Heart x={39} y={11} k={0.6} fill={C.coral} />
    </>
  ),
  globe: () => (
    <>
      <circle cx="24" cy="24" r="17" fill={C.sea} />
      <path d="M14 14c4-2 8 0 9 3s-2 5-5 5-3 4-6 4-4-5-3-8 2-3 5-4z" fill={C.green} />
      <path d="M28 26c3-1 7 1 8 4s-2 7-6 7-4-3-4-6 0-4 2-5z" fill={C.green} />
      <path d="M29 10c3 0 6 2 7 5-3 0-5-1-7-2z" fill={C.leaf} />
      <ellipse cx="24" cy="24" rx="22" ry="7" stroke={C.sun} strokeWidth="2.4" transform="rotate(-20 24 24)" {...line} />
      <Spark x={41} y={7} r={3.5} fill={C.pink} />
    </>
  ),
  relax: () => (
    <>
      <path d="M2 45c10-4 34-4 44 0z" fill={C.sand} />
      <path d="M22 20v22" stroke={C.brown} strokeWidth="2.6" {...line} />
      <path d="M4 20a18 12 0 0 1 36 0z" fill={C.coral} />
      <path d="M16 20a6 12 0 0 1 12 0z" fill={C.white} />
      <path d="M26 36l5-7h13M28 37v5M42 30v12" stroke={C.teal} strokeWidth="3" {...line} />
    </>
  ),
  compass: () => (
    <>
      <circle cx="24" cy="24" r="18" fill={C.white} stroke={C.teal} strokeWidth="3.5" />
      {[
        [24, 10],
        [38, 24],
        [24, 38],
        [10, 24],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.5" fill={C.slate} />
      ))}
      <path d="M24 11l5.5 13h-11z" fill={C.coral} />
      <path d="M24 37l-5.5-13h11z" fill={C.sea} />
      <circle cx="24" cy="24" r="2.6" fill={C.ink} />
    </>
  ),
  rocket: () => (
    <>
      <path d="M19 33h10l-5 12z" fill={C.orange} />
      <path d="M21 33h6l-3 7z" fill={C.sun} />
      <path d="M16 26l-7 8 8-1zM32 26l7 8-8-1z" fill={C.coral} />
      <path d="M24 3c7 5 10 13 9 25l-1.5 5h-15L15 28C14 16 17 8 24 3z" fill={C.purple} />
      <circle cx="24" cy="18" r="4.6" fill={C.white} />
      <circle cx="24" cy="18" r="2.8" fill={C.sea} />
      <Spark x={8} y={10} r={3.5} fill={C.sun} />
      <Spark x={41} y={13} r={3} fill={C.pink} />
    </>
  ),
  halfday: () => (
    <>
      <path d="M3 24h3M7.5 11.5l2 2M7.5 36.5l2-2" stroke={C.orange} strokeWidth="2.4" {...line} />
      <path d="M24 7a17 17 0 0 0 0 34z" fill={C.sun} />
      <path d="M24 7a17 17 0 0 1 0 34z" fill={C.purple} />
      <Spark x={31} y={17} r={2.8} fill={C.white} />
      <Spark x={34} y={29} r={2.2} fill={C.white} />
    </>
  ),
  landmark: () => (
    <>
      <circle cx="37" cy="11" r="6" fill={C.sun} />
      <path d="M24 3l2 9h-4z" fill={C.purple} />
      <path d="M21.5 12h5l2.5 12h-10z" fill={C.purple} />
      <rect x="16" y="23" width="16" height="3" rx="1" fill={C.purpleDeep} />
      <path d="M18 26h12l7 17h-8a5 6 0 0 0-10 0h-8z" fill={C.purple} />
      <rect x="12" y="32" width="24" height="2.6" rx="1" fill={C.purpleDeep} />
    </>
  ),
  adventure: () => (
    <>
      <path d="M19 12a5 5 0 0 1 10 0" stroke={C.brown} strokeWidth="3" {...line} />
      <rect x="11" y="11" width="26" height="32" rx="9" fill={C.orange} />
      <path d="M11 21a13 9 0 0 1 26 0v3H11z" fill={C.coral} />
      <rect x="17" y="29" width="14" height="10" rx="3" fill={C.sun} />
      <circle cx="24" cy="24" r="1.8" fill={C.white} />
    </>
  ),
  art: () => (
    <>
      <path d="M16 37l-4 7M32 37l4 7" stroke={C.brown} strokeWidth="2.6" {...line} />
      <rect x="5" y="7" width="38" height="30" rx="3" fill={C.sun} />
      <rect x="9" y="11" width="30" height="22" rx="1.5" fill={C.sky} />
      <circle cx="31" cy="17" r="3" fill={C.white} />
      <path d="M9 33l9-11 6 7 4-4 11 8z" fill={C.green} />
    </>
  ),
  nightlife: () => (
    <>
      <path d="M36 4a10 10 0 1 0 9 14 8 8 0 1 1-9-14z" fill={C.sun} />
      <path d="M27 6l-6 9" stroke={C.ink} strokeWidth="1.6" {...line} />
      <circle cx="21.5" cy="13.5" r="2.6" fill={C.leaf} />
      <path d="M6 13h24L18 27z" fill={C.pink} />
      <path d="M10 16h16l-8 8.5z" fill={C.magenta} />
      <path d="M18 27v12M12 40h12" stroke={C.purple} strokeWidth="2.8" {...line} />
      <Spark x={40} y={31} r={3} fill={C.teal} />
      <Spark x={33} y={39} r={2.2} fill={C.purple} />
    </>
  ),
  camera: () => (
    <>
      <path d="M16 14l3-5h10l3 5z" fill={C.purpleDeep} />
      <rect x="5" y="13" width="38" height="28" rx="7" fill={C.teal} />
      <circle cx="24" cy="27" r="10" fill={C.white} />
      <circle cx="24" cy="27" r="6.5" fill={C.purple} />
      <circle cx="21.5" cy="24.5" r="2" fill={C.white} opacity="0.8" />
      <rect x="34" y="17" width="5" height="3" rx="1.5" fill={C.sun} />
    </>
  ),
  sparkles: () => (
    <>
      <Spark x={22} y={25} r={13} fill={C.pink} />
      <Spark x={38} y={10} r={6} fill={C.sun} />
      <Spark x={39} y={36} r={5} fill={C.teal} />
      <Spark x={9} y={9} r={4} fill={C.purple} />
    </>
  ),
  plane: () => (
    <>
      <circle cx="10" cy="11" r="5.5" fill={C.sun} />
      <path d="M5 43l7-7" stroke={C.pink} strokeWidth="2.4" strokeDasharray="2 3" {...line} />
      <g transform="rotate(45 24 24)">
        <path
          d="M24 3c2.2 0 3.4 2.4 3.4 5.4V19L43 28.5v4.2l-15.6-4.4v8.4l5 3.8V44l-8.4-2.3-8.4 2.3v-3.5l5-3.8v-8.4L5 32.7v-4.2L20.6 19V8.4C20.6 5.4 21.8 3 24 3z"
          fill={C.sea}
        />
        <path d="M24 7v10" stroke={C.white} strokeWidth="1.8" {...line} />
      </g>
    </>
  ),
  hotel: () => (
    <>
      <rect x="10" y="11" width="28" height="32" rx="2" fill={C.purple} />
      <rect x="8" y="7" width="32" height="5" rx="2" fill={C.coral} />
      {[15, 22, 29].map((y) =>
        [14, 21.5, 29].map((x) => (
          <rect
            key={`${x}-${y}`}
            x={x}
            y={y}
            width="5"
            height="4.5"
            rx="1"
            fill={(x + y) % 2 === 0 ? C.sun : C.white}
          />
        )),
      )}
      <rect x="20" y="35" width="8" height="8" rx="1.5" fill={C.sun} />
      <rect x="6" y="42" width="36" height="3" rx="1.5" fill={C.teal} />
    </>
  ),
  taxi: () => (
    <>
      <rect x="19" y="12" width="10" height="5.5" rx="1.5" fill={C.coral} />
      <Car body={C.sun} />
    </>
  ),
  car: () => (
    <>
      <Car body={C.coral} />
      <circle cx="40" cy="9" r="4.5" stroke={C.purple} strokeWidth="2.6" {...line} />
      <path d="M36.8 12.2L31 18M33 16l2 2" stroke={C.purple} strokeWidth="2.6" {...line} />
    </>
  ),
  ticket: () => (
    <g transform="rotate(-10 24 24)">
      <path d="M5 14h38v7a3.5 3.5 0 0 0 0 7v7H5v-7a3.5 3.5 0 0 0 0-7z" fill={C.pink} />
      <path d="M33 15v19" stroke={C.white} strokeWidth="1.8" strokeDasharray="2.5 2.5" />
      <path d={starPath(19, 24.5, 6, 2.6)} fill={C.white} />
    </g>
  ),
  shield: () => (
    <>
      <path d="M24 4l16 6v12c0 10-7 17-16 22C15 39 8 32 8 22V10z" fill={C.green} />
      <path d="M24 4v40C15 39 8 32 8 22V10z" fill={C.white} opacity="0.18" />
      <path d="M16 24l5.5 5.5L33 18" stroke={C.white} strokeWidth="4" {...line} />
    </>
  ),
  piggy: () => (
    <>
      <circle cx="22" cy="8" r="5.5" fill={C.sun} />
      <circle cx="22" cy="8" r="3.2" stroke={C.orange} strokeWidth="1.5" {...line} />
      <rect x="12" y="33" width="5" height="9" rx="2" fill={C.pinkDeep} />
      <rect x="27" y="33" width="5" height="9" rx="2" fill={C.pinkDeep} />
      <path d="M7 25c-3.5 0-3.5 4.5 0 3.5" stroke={C.pink} strokeWidth="2" {...line} />
      <path d="M28 17l3-7 5 8z" fill={C.pinkDeep} />
      <ellipse cx="23" cy="27" rx="16" ry="12" fill={C.pink} />
      <rect x="17" y="17" width="9" height="2.4" rx="1.2" fill="#b8325c" />
      <ellipse cx="39" cy="27" rx="4" ry="3.6" fill="#ff9bb8" />
      <circle cx="38" cy="27" r="0.9" fill="#b8325c" />
      <circle cx="40.3" cy="27" r="0.9" fill="#b8325c" />
      <circle cx="31" cy="22" r="1.6" fill={C.ink} />
    </>
  ),
  stars3: () => (
    <Stars
      spots={[
        [12, 27, 7],
        [24, 20, 8],
        [36, 27, 7],
      ]}
    />
  ),
  stars4: () => (
    <Stars
      spots={[
        [8.5, 28, 5.5],
        [18.5, 21, 6],
        [29.5, 21, 6],
        [39.5, 28, 5.5],
      ]}
    />
  ),
  crown: () => (
    <>
      <path d="M6 36l3-22 9 9 6-14 6 14 9-9 3 22z" fill={C.sun} />
      <rect x="6" y="35" width="36" height="6" rx="2" fill={C.orange} />
      <circle cx="9" cy="13" r="2.6" fill={C.pink} />
      <circle cx="24" cy="8.5" r="2.6" fill={C.teal} />
      <circle cx="39" cy="13" r="2.6" fill={C.purple} />
      <circle cx="16" cy="38" r="1.6" fill={C.white} />
      <circle cx="24" cy="38" r="1.6" fill={C.white} />
      <circle cx="32" cy="38" r="1.6" fill={C.white} />
    </>
  ),
  boutique: () => (
    <>
      <rect x="8" y="18" width="32" height="25" rx="2" fill={C.teal} />
      <rect x="4" y="9" width="40" height="4" rx="2" fill={C.magenta} />
      <path
        d="M6 12h36v6a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0z"
        fill={C.pink}
      />
      <rect x="12" y="25" width="11" height="9" rx="1.5" fill={C.sky} />
      <rect x="27" y="28" width="8" height="15" rx="1.5" fill={C.white} />
      <circle cx="17.5" cy="38.5" r="3" fill={C.sun} />
    </>
  ),
  villa: () => (
    <>
      <path d="M4 23L24 7l20 16z" fill={C.coral} />
      <rect x="9" y="22" width="30" height="21" rx="1.5" fill={C.sand} />
      <rect x="20" y="30" width="8" height="13" rx="1.5" fill={C.teal} />
      <rect x="12.5" y="26" width="5" height="5" rx="1" fill={C.sky} />
      <rect x="30.5" y="26" width="5" height="5" rx="1" fill={C.sky} />
      <circle cx="24" cy="17" r="2.4" fill={C.white} />
    </>
  ),
  resort: () => (
    <>
      <path d="M18 20v12" stroke={C.brown} strokeWidth="2.4" {...line} />
      <path d="M6 20a12 9 0 0 1 24 0z" fill={C.pink} />
      <path d="M38 19v7M35 26.5h6" stroke={C.purple} strokeWidth="2.2" {...line} />
      <path d="M32 12h12l-6 7z" fill={C.sun} />
      <rect x="3" y="30" width="42" height="13" rx="6.5" fill={C.sea} />
      <path d="M9 36.5c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0 4 1.5 6 0 4-1.5 6 0" stroke={C.white} strokeWidth="1.8" {...line} />
    </>
  ),
  lightbulb: () => (
    <>
      <path d="M24 2v3M8 8l2 2M40 8l-2 2M3 20h3M42 20h3" stroke={C.orange} strokeWidth="2.4" {...line} />
      <circle cx="24" cy="19" r="12" fill={C.sun} />
      <path d="M18 27h12l-1.5 6h-9z" fill={C.sun} />
      <rect x="18.5" y="32" width="11" height="4" rx="1.5" fill={C.slate} />
      <rect x="19.5" y="37" width="9" height="4" rx="1.5" fill={C.slate} />
      <path d="M21 43.5h6" stroke={C.ink} strokeWidth="2.4" {...line} />
      <path d="M17 17a7 7 0 0 1 6-6" stroke={C.white} strokeWidth="2.4" {...line} />
    </>
  ),
  pin: () => (
    <>
      <ellipse cx="24" cy="43" rx="9" ry="2.6" fill={C.ink} opacity="0.15" />
      <path d="M24 43s14-13 14-24a14 14 0 0 0-28 0c0 11 14 24 14 24z" fill={C.coral} />
      <circle cx="24" cy="19" r="5.5" fill={C.white} />
      <circle cx="24" cy="19" r="2.5" fill={C.sun} />
    </>
  ),
  tag: () => (
    <>
      <path d="M14 12C9 7 6 9 3 4" stroke={C.brown} strokeWidth="1.6" {...line} />
      <path d="M8 8a2 2 0 0 1 2-2h14l18 18-16 16L8 22z" fill={C.sun} />
      <circle cx="15" cy="13" r="3" fill={C.white} stroke={C.orange} strokeWidth="1.6" />
      <path d="M21 31l9-9" stroke={C.coral} strokeWidth="2.4" {...line} />
      <circle cx="21.5" cy="23.5" r="2" fill={C.coral} />
      <circle cx="29.5" cy="30.5" r="2" fill={C.coral} />
    </>
  ),
  views: () => (
    <>
      <path d="M24 8v4M11 14l2.5 2.5M37 14l-2.5 2.5M5 26h4M39 26h4" stroke={C.orange} strokeWidth="2.4" {...line} />
      <path d="M12 32a12 12 0 0 1 24 0z" fill={C.sun} />
      <path d="M2 43l10-10 6 5 9-10 10 9 9 6z" fill={C.teal} />
      <path d="M2 43h44" stroke={C.sea} strokeWidth="3" {...line} />
    </>
  ),
  breakfast: () => (
    <>
      <path d="M17 14c-2-2 2-4 0-7M25 14c-2-2 2-4 0-7" stroke={C.slate} strokeWidth="2" {...line} />
      <ellipse cx="22" cy="42.5" rx="17" ry="3" fill={C.sand} />
      <path d="M34 23h3a5 5 0 0 1 0 10h-3" stroke={C.coral} strokeWidth="3" {...line} />
      <path d="M9 19h26v11a11 11 0 0 1-11 11h-4A11 11 0 0 1 9 30z" fill={C.coral} />
      <ellipse cx="22" cy="19.5" rx="13" ry="2.8" fill={C.brown} />
      <Heart x={22} y={30} k={0.4} fill={C.white} />
    </>
  ),
  pool: () => (
    <>
      <path d="M29 30V11a3.5 3.5 0 0 0-7 0M40 30V11a3.5 3.5 0 0 0-7 0M29 18h11M29 25h11" stroke={C.slate} strokeWidth="2.8" {...line} />
      <rect x="3" y="28" width="42" height="16" rx="5" fill={C.sea} />
      <path d="M8 35c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0 4 1.5 6 0 4-1.5 6 0" stroke={C.white} strokeWidth="1.8" {...line} />
      <circle cx="12" cy="18" r="6.5" fill={C.coral} />
      <path d="M5.5 18a6.5 6.5 0 0 0 13 0z" fill={C.sun} />
      <path d="M12 11.5v13" stroke={C.white} strokeWidth="1.6" {...line} />
    </>
  ),
  diamond: () => (
    <>
      <path d="M12 9h24l8 11-20 23L4 20z" fill={C.teal} />
      <path d="M12 9l6 11h12l6-11z" fill={C.tealLight} />
      <path d="M4 20h40M18 20l6 23 6-23" stroke={C.white} strokeWidth="1.4" opacity="0.7" {...line} />
      <Spark x={41} y={6} r={4} fill={C.pink} />
      <Spark x={7} y={36} r={3} fill={C.sun} />
    </>
  ),
  moon: () => (
    <>
      <path d="M28 6a17 17 0 1 0 14 26A14 14 0 0 1 28 6z" fill={C.purple} />
      <path d="M32 11h5l-5 6h5M39 21h3.5l-3.5 4h3.5" stroke={C.sun} strokeWidth="2" {...line} />
      <Spark x={9} y={9} r={2.8} fill={C.sun} />
    </>
  ),
  leaf: () => (
    <>
      <path d="M6 20c0-7 4-12 12-13 0 8-4 12-12 13z" fill={C.leaf} />
      <path d="M8 41C7 21 19 8 42 7c1 22-12 35-34 34z" fill={C.green} />
      <path d="M10 39C18 29 27 20 36 13" stroke={C.white} strokeWidth="2" opacity="0.75" {...line} />
    </>
  ),
  halal: () => (
    <>
      <circle cx="24" cy="25" r="18" fill={C.grey} />
      <circle cx="24" cy="25" r="13.5" fill={C.white} />
      <path d="M25 16a9 9 0 1 0 7 14 7.5 7.5 0 1 1-7-14z" fill={C.green} />
      <path d={starPath(31, 21, 3, 1.3)} fill={C.green} />
    </>
  ),
  accessibility: () => (
    <>
      <circle cx="23" cy="8" r="4" fill={C.sea} />
      <path d="M23 14v12h10l4 10M23 19h8" stroke={C.sea} strokeWidth="4" {...line} />
      <path d="M16 22a10 10 0 1 0 14 12" stroke={C.coral} strokeWidth="4" {...line} />
    </>
  ),
  elder: () => (
    <>
      <path d="M11 43l3-15c1-4 3.4-6 6-6s5 2 6 6l2 15z" fill={C.purple} />
      <circle cx="20" cy="13" r="5.5" fill={C.skin} />
      <path d="M14.5 13a5.5 5.5 0 0 1 11 0q-5.5-3-11 0z" fill={C.grey} />
      <path d="M17 14h6" stroke={C.ink} strokeWidth="1.2" {...line} />
      <path d="M31 24c0-3.5 5-3.5 5 0v19" stroke={C.brown} strokeWidth="3" {...line} />
    </>
  ),
  kid: () => (
    <>
      <path d="M34 21c-2 4 2 7-3 12" stroke={C.slate} strokeWidth="1.6" {...line} />
      <ellipse cx="34" cy="12" rx="7" ry="8.5" fill={C.pink} />
      <path d="M32.5 20.3h3l-1.5 2z" fill={C.pink} />
      <ellipse cx="31" cy="9" rx="1.6" ry="2.6" fill={C.white} opacity="0.6" />
      <Person x={18} top={32} w={9} bottom={44} r={6} fill={C.sun} hair={C.brown} />
    </>
  ),
  apple: () => (
    <>
      <path d="M24 14c-4-3-14-3-14 9 0 11 7 20 14 18 7 2 14-7 14-18 0-12-10-12-14-9z" fill={C.red} />
      <path d="M24 14c-1-3 0-6 2-8" stroke={C.brown} strokeWidth="2.4" {...line} />
      <path d="M25 11c1-5 5-7 10-6-1 5-5 7-10 6z" fill={C.green} />
      <ellipse cx="16" cy="22" rx="2.4" ry="4" fill={C.white} opacity="0.5" />
    </>
  ),
  medkit: () => (
    <>
      <path d="M18 13v-3a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3" stroke={C.ink} strokeWidth="2.6" {...line} />
      <rect x="5" y="13" width="38" height="28" rx="6" fill={C.red} />
      <rect x="20.5" y="19" width="7" height="16" rx="1.5" fill={C.white} />
      <rect x="16" y="23.5" width="16" height="7" rx="1.5" fill={C.white} />
    </>
  ),
  visa: () => (
    <>
      <rect x="8" y="5" width="26" height="36" rx="3" fill={C.purple} />
      <circle cx="21" cy="18" r="6" stroke={C.sun} strokeWidth="2" {...line} />
      <path d="M15 18h12M21 12c-3 3.5-3 8.5 0 12M21 12c3 3.5 3 8.5 0 12" stroke={C.sun} strokeWidth="1.4" {...line} />
      <rect x="14" y="29" width="14" height="2.4" rx="1.2" fill={C.sun} />
      <g transform="rotate(-14 34 34)">
        <circle cx="34" cy="34" r="9" fill={C.white} stroke={C.coral} strokeWidth="2.6" />
        <path d="M29.5 34l3 3 6-6" stroke={C.coral} strokeWidth="2.6" {...line} />
      </g>
    </>
  ),
  check: () => (
    <>
      <circle cx="24" cy="24" r="18" fill={C.green} />
      <path d="M15 24.5l6 6L33 18" stroke={C.white} strokeWidth="4.2" {...line} />
    </>
  ),
  cross: () => (
    <>
      <circle cx="24" cy="24" r="18" fill={C.slate} />
      <path d="M17 17l14 14M31 17L17 31" stroke={C.white} strokeWidth="4.2" {...line} />
    </>
  ),
  renew: () => (
    <>
      <path d="M37 17A14 14 0 0 0 12 15" stroke={C.orange} strokeWidth="4" {...line} />
      <path d="M7 10l1.5 9 8.5-3z" fill={C.orange} />
      <path d="M11 31a14 14 0 0 0 25 2" stroke={C.sea} strokeWidth="4" {...line} />
      <path d="M41 38l-1.5-9-8.5 3z" fill={C.sea} />
      <rect x="19" y="18" width="10" height="13" rx="1.5" fill={C.purple} />
      <circle cx="24" cy="23.5" r="2.2" stroke={C.sun} strokeWidth="1.2" {...line} />
    </>
  ),
  hourglass: () => (
    <>
      <path d="M14 8h20c0 8-6 12-9.5 16C28 28 34 32 34 40H14c0-8 6-12 9.5-16C20 20 14 16 14 8z" fill={C.sky} />
      <path d="M17.5 12h13c-1 4-3.5 6.5-6.5 8.5-3-2-5.5-4.5-6.5-8.5z" fill={C.sun} />
      <path d="M16.5 39c1-4 4-6.5 7.5-7.5 3.5 1 6.5 3.5 7.5 7.5z" fill={C.sun} />
      <path d="M24 22v8" stroke={C.sun} strokeWidth="1.4" strokeDasharray="1.5 1.5" />
      <rect x="11" y="4" width="26" height="4" rx="2" fill={C.brown} />
      <rect x="11" y="40" width="26" height="4" rx="2" fill={C.brown} />
    </>
  ),
  cake: () => (
    <>
      <rect x="16" y="9" width="3" height="10" rx="1" fill={C.teal} />
      <rect x="22.5" y="8" width="3" height="11" rx="1" fill={C.coral} />
      <rect x="29" y="9" width="3" height="10" rx="1" fill={C.purple} />
      <ellipse cx="17.5" cy="6.5" rx="1.8" ry="2.6" fill={C.orange} />
      <ellipse cx="24" cy="5.5" rx="1.8" ry="2.6" fill={C.orange} />
      <ellipse cx="30.5" cy="6.5" rx="1.8" ry="2.6" fill={C.orange} />
      <rect x="11" y="18" width="26" height="11" rx="3" fill={C.sun} />
      <rect x="7" y="28" width="34" height="14" rx="3" fill={C.pink} />
      <path d="M7 31c3 0 3 3 5.7 3s2.7-3 5.6-3 2.8 3 5.7 3 2.8-3 5.7-3 2.7 3 5.6 3 2.7-3 5.7-3v-2H7z" fill={C.white} />
      <rect x="4" y="41" width="40" height="3" rx="1.5" fill={C.slate} />
    </>
  ),
  rings: () => (
    <>
      <circle cx="18" cy="29" r="10" stroke={C.sun} strokeWidth="4" {...line} />
      <circle cx="30" cy="29" r="10" stroke={C.orange} strokeWidth="4" {...line} />
      <path d="M18 10l4 4.5-4 4.5-4-4.5z" fill={C.teal} />
      <Heart x={38} y={9} k={0.5} fill={C.pink} />
    </>
  ),
  cheers: () => (
    <>
      <g transform="rotate(-16 16 26)">
        <path d="M11 8h10l-1 13a4 4 0 0 1-8 0z" fill={C.sun} />
        <path d="M16 25v12M11.5 38h9" stroke={C.purple} strokeWidth="2.4" {...line} />
        <circle cx="15" cy="15" r="1.2" fill={C.white} />
      </g>
      <g transform="rotate(16 32 26)">
        <path d="M27 8h10l-1 13a4 4 0 0 1-8 0z" fill={C.sun} />
        <path d="M32 25v12M27.5 38h9" stroke={C.purple} strokeWidth="2.4" {...line} />
        <circle cx="33" cy="14" r="1.2" fill={C.white} />
      </g>
      <Spark x={24} y={5} r={4} fill={C.pink} />
      <Heart x={24} y={42} k={0.45} fill={C.pink} />
    </>
  ),
  graduation: () => (
    <>
      <path d="M12 22v8c0 3 5 6 12 6s12-3 12-6v-8l-12 5z" fill={C.purpleDeep} />
      <path d="M3 18l21-9 21 9-21 9z" fill={C.purple} />
      <path d="M24 18l16 2v10" stroke={C.sun} strokeWidth="1.8" {...line} />
      <path d="M38 30h4l-.8 6h-2.4z" fill={C.sun} />
      <circle cx="24" cy="18" r="1.8" fill={C.sun} />
    </>
  ),
  party: () => (
    <>
      <path d="M22 18c2-5 7-4 8-9M30 26c5-1 7 3 12 1" stroke={C.pink} strokeWidth="2.4" {...line} />
      <path d="M6 43l9-24 14 14z" fill={C.sun} />
      <circle cx="13" cy="33" r="1.8" fill={C.coral} />
      <circle cx="17" cy="27" r="1.6" fill={C.teal} />
      <circle cx="37" cy="9" r="2" fill={C.purple} />
      <circle cx="42" cy="18" r="1.8" fill={C.coral} />
      <rect x="28" y="14" width="4" height="2" rx="0.8" fill={C.teal} transform="rotate(30 30 15)" />
      <Spark x={40} y={36} r={3.5} fill={C.pink} />
      <Spark x={20} y={8} r={3} fill={C.teal} />
    </>
  ),
  selfie: () => (
    <>
      <rect x="13" y="3" width="22" height="42" rx="5" fill={C.ink} />
      <rect x="15.5" y="8" width="17" height="31" rx="2" fill={C.pink} />
      <path d="M15.5 25h17v12a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z" fill={C.orange} />
      <Heart x={24} y={23} k={0.6} fill={C.white} />
      <circle cx="24" cy="42" r="1.4" fill={C.slate} />
      <Spark x={41} y={10} r={4} fill={C.sun} />
      <Spark x={7} y={34} r={3} fill={C.teal} />
    </>
  ),
  gift: () => (
    <>
      <rect x="8" y="20" width="32" height="22" rx="3" fill={C.pink} />
      <rect x="6" y="14" width="36" height="8" rx="2" fill={C.magenta} />
      <rect x="21" y="14" width="6" height="28" fill={C.sun} />
      <path d="M24 14c-3-6-11-8-11-3 0 3 6 3 11 3z" fill={C.sun} />
      <path d="M24 14c3-6 11-8 11-3 0 3-6 3-11 3z" fill={C.orange} />
      <Spark x={42} y={7} r={3} fill={C.teal} />
    </>
  ),
  suitcase: () => (
    <>
      <path d="M18 14v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" stroke={C.ink} strokeWidth="2.6" {...line} />
      <rect x="7" y="14" width="34" height="28" rx="5" fill={C.coral} />
      <rect x="14" y="14" width="3" height="28" fill={C.orange} />
      <rect x="31" y="14" width="3" height="28" fill={C.orange} />
      <circle cx="24" cy="23" r="4" fill={C.sun} />
      <rect x="19.5" y="30" width="9" height="6" rx="1.5" fill={C.teal} transform="rotate(-10 24 33)" />
      <Heart x={37.5} y={22} k={0.35} fill={C.white} />
      <circle cx="13" cy="43.5" r="2" fill={C.ink} />
      <circle cx="35" cy="43.5" r="2" fill={C.ink} />
    </>
  ),
  passport: () => (
    <>
      <rect x="10" y="5" width="28" height="38" rx="4" fill={C.purple} />
      <circle cx="24" cy="20" r="7" stroke={C.sun} strokeWidth="2" {...line} />
      <path d="M17 20h14M24 13c-3.5 4-3.5 10 0 14M24 13c3.5 4 3.5 10 0 14" stroke={C.sun} strokeWidth="1.4" {...line} />
      <rect x="16" y="32" width="16" height="2.6" rx="1.3" fill={C.sun} />
      <rect x="19" y="36.5" width="10" height="2" rx="1" fill={C.sun} opacity="0.7" />
    </>
  ),
  balloon: () => (
    <>
      <path d="M19 35l1 5M29 35l-1 5" stroke={C.brown} strokeWidth="1.4" {...line} />
      <path d="M24 4c-10 0-16 7-16 15 0 7 6 12 11 16h10c5-4 11-9 11-16 0-8-6-15-16-15z" fill={C.pink} />
      <path d="M24 4c-4 0-6 7-6 15 0 7 2 12 3 16h6c1-4 3-9 3-16 0-8-2-15-6-15z" fill={C.sun} />
      <rect x="19" y="39" width="10" height="6" rx="1.5" fill={C.brown} />
    </>
  ),
  coin: () => (
    <>
      <circle cx="24" cy="24" r="17" fill={C.sun} />
      <circle cx="24" cy="24" r="12.5" stroke={C.orange} strokeWidth="2" {...line} />
      <path d="M19 17h10M19 21.5h10M21 17c6 0 6 9 0 9h-1l8 8" stroke={C.orange} strokeWidth="2.4" {...line} />
    </>
  ),
  calendar: () => <Calendar range />,
  calendarCheck: () => (
    <>
      <Calendar />
      <circle cx="36" cy="36" r="8" fill={C.green} />
      <path d="M32 36.2l2.8 2.8 5-5.4" stroke={C.white} strokeWidth="2.4" {...line} />
    </>
  ),
};

export function ColorIcon({ name, size = 36, className = '' }) {
  const draw = ICONS[name];
  if (!draw) return null;
  return (
    <svg
      className={`color-icon ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
    >
      {draw()}
    </svg>
  );
}
