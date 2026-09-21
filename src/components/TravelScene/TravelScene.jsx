import './TravelScene.css';

export function TravelScene({ scene }) {
  return (
    <div className={`travel-scene travel-scene--${scene}`} aria-hidden="true">
      {scene === 'traveller' ? (
        <>
          <div className="scene-compass" />
          <div className="scene-passport">
            <span />
            <em />
          </div>
          <div className="scene-suitcase" />
        </>
      ) : null}

      {scene === 'destination' ? (
        <>
          <div className="scene-globe" />
          <div className="scene-pin scene-pin--one" />
          <div className="scene-pin scene-pin--two" />
          <div className="scene-miniplane" />
        </>
      ) : null}

      {scene === 'vibe' ? (
        <>
          <div className="scene-palm" />
          <div className="scene-camera" />
          <div className="scene-sparkle scene-sparkle--one" />
          <div className="scene-sparkle scene-sparkle--two" />
        </>
      ) : null}

      {scene === 'budget' ? (
        <>
          <div className="scene-coin scene-coin--one" />
          <div className="scene-coin scene-coin--two" />
          <div className="scene-bag" />
        </>
      ) : null}

      {scene === 'important' ? (
        <>
          <div className="scene-stamp" />
          <div className="scene-ticket" />
        </>
      ) : null}

      {scene === 'personal' ? (
        <>
          <div className="scene-heart scene-heart--one" />
          <div className="scene-heart scene-heart--two" />
          <div className="scene-star" />
        </>
      ) : null}
    </div>
  );
}
