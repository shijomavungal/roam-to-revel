export function Icon({ name, size = 22 }) {
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.8',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  switch (name) {
    case 'solo':
      return (
        <svg {...props}>
          <circle cx="12" cy="8" r="3.2" />
          <path d="M5.5 19c1.2-3.2 3.5-4.8 6.5-4.8S16.8 15.8 18.5 19" />
        </svg>
      );
    case 'couple':
      return (
        <svg {...props}>
          <circle cx="8.5" cy="8.5" r="2.6" />
          <circle cx="15.5" cy="8.5" r="2.6" />
          <path d="M3.8 19c.9-2.8 2.6-4.2 4.7-4.2s3.8 1.4 4.7 4.2" />
          <path d="M10.8 19c.9-2.8 2.6-4.2 4.7-4.2s3.8 1.4 4.7 4.2" />
        </svg>
      );
    case 'family':
      return (
        <svg {...props}>
          <circle cx="8" cy="8" r="2.3" />
          <circle cx="16" cy="8" r="2.3" />
          <circle cx="12" cy="11.5" r="1.8" />
          <path d="M4 19c.8-2.4 2.2-3.6 4-3.6s3.2 1.2 4 3.6" />
          <path d="M12 19c.8-2.4 2.2-3.6 4-3.6s3.2 1.2 4 3.6" />
        </svg>
      );
    case 'friends':
      return (
        <svg {...props}>
          <circle cx="7" cy="9" r="2.2" />
          <circle cx="12" cy="8" r="2.4" />
          <circle cx="17" cy="9" r="2.2" />
          <path d="M4 19c.7-2.3 2-3.4 3.5-3.4S10.3 16.7 11 19" />
          <path d="M9 19c.8-2.6 2.2-3.9 4-3.9s3.2 1.3 4 3.9" />
        </svg>
      );
    case 'group':
      return (
        <svg {...props}>
          <path d="M4 18v-2.2a3 3 0 0 1 3-3h2" />
          <path d="M20 18v-2.2a3 3 0 0 0-3-3h-2" />
          <circle cx="12" cy="8" r="3" />
          <path d="M8 21v-1.8A3.2 3.2 0 0 1 11.2 16h1.6A3.2 3.2 0 0 1 16 19.2V21" />
        </svg>
      );
    case 'special':
      return (
        <svg {...props}>
          <path d="M12 3.5 13.8 9h5.7l-4.6 3.4 1.8 5.6L12 14.8 7.3 18l1.8-5.6L4.5 9h5.7L12 3.5z" />
        </svg>
      );
    case 'beach':
      return (
        <svg {...props}>
          <circle cx="8" cy="7" r="2.4" />
          <path d="M4 19c2.4-3.4 5.6-5 8-5s5.6 1.6 8 5" />
          <path d="M14 13l2-7 3 2" />
        </svg>
      );
    case 'culture':
      return (
        <svg {...props}>
          <path d="M4 19h16" />
          <path d="M6 19V9l6-4 6 4v10" />
          <path d="M10 19v-5h4v5" />
        </svg>
      );
    case 'mountains':
      return (
        <svg {...props}>
          <path d="M3 19 9 8l4 7 2.2-3.4L21 19z" />
        </svg>
      );
    case 'food':
      return (
        <svg {...props}>
          <path d="M8 4v9" />
          <path d="M6 4v5a2 2 0 0 0 4 0V4" />
          <path d="M16 4v16" />
          <path d="M14 8h4" />
        </svg>
      );
    case 'shopping':
      return (
        <svg {...props}>
          <path d="M6 8h12l-1 12H7L6 8z" />
          <path d="M9 8V7a3 3 0 0 1 6 0v1" />
        </svg>
      );
    case 'nature':
      return (
        <svg {...props}>
          <path d="M12 21V11" />
          <path d="M12 14c-4-1-6-4-7-8 5 0 8 2 9 5" />
          <path d="M12 13c4-1 6-4 7-8-5 0-8 2-9 5" />
        </svg>
      );
    case 'romantic':
      return (
        <svg {...props}>
          <path d="M12 20s-7-4.4-7-9.2C5 8 7 6 9.2 6c1.3 0 2.4.6 2.8 1.6C12.4 6.6 13.5 6 14.8 6 17 6 19 8 19 10.8 19 15.6 12 20 12 20z" />
        </svg>
      );
    case 'everything':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      );
    case 'plane':
      return (
        <svg {...props}>
          <path d="M3 12h10l8-4v3l-6 3 6 3v3l-8-4H8l-3 4H3l2-6-2-6h2z" />
        </svg>
      );
    case 'check':
      return (
        <svg {...props}>
          <path d="M5 12.5 10 17l9-10" />
        </svg>
      );
    case 'compass':
      return (
        <svg {...props} strokeWidth="1.6">
          <circle cx="12" cy="12" r="9" />
          <path d="m14.8 9.2-1.6 5.4-5.4 1.6 1.6-5.4 5.4-1.6z" />
        </svg>
      );
    case 'camera':
      return (
        <svg {...props}>
          <path d="M4 8h3l1.6-2h6.8L17 8h3v11H4z" />
          <circle cx="12" cy="13.2" r="3.2" />
        </svg>
      );
    case 'coin':
      return (
        <svg {...props}>
          <ellipse cx="12" cy="7" rx="7" ry="3" />
          <path d="M5 7v5c0 1.7 3.1 3 7 3s7-1.3 7-3V7" />
          <path d="M5 12v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" />
        </svg>
      );
    case 'passport':
      return (
        <svg {...props}>
          <rect x="6" y="3" width="12" height="18" rx="1.8" />
          <circle cx="12" cy="10" r="2.4" />
          <path d="M8.5 16h7" />
        </svg>
      );
    default:
      return null;
  }
}
