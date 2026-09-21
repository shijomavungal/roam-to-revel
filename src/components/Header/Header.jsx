import { brandConfig } from '../../data/brandConfig';
import { Icon } from '../Icon/Icon';
import './Header.css';

export function Header({ compact = false }) {
  return (
    <header className={`site-header ${compact ? 'is-compact' : ''}`}>
      <div className="page-wrap site-header__inner">
        <div className="brand">
          <div className="brand__logo" aria-hidden="true">
            <Icon name="compass" size={28} />
          </div>
          <div>
            <p className="brand__name">{brandConfig.companyName}</p>
            <p className="brand__tagline">{brandConfig.tagline}</p>
          </div>
        </div>
        {compact ? null : (
          <div className="site-header__copy">
            <p className="site-header__eyebrow">{brandConfig.pageTitle}</p>
            <h1>{brandConfig.heroTitle}</h1>
            <p className="site-header__intro">{brandConfig.intro}</p>
          </div>
        )}
      </div>
    </header>
  );
}
