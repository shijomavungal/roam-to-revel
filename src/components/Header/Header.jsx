import { brandConfig } from '../../data/brandConfig';
import logo from '../../img/Roam-To-Revel-Official-Horizontal-Logo-400x99.png';
import './Header.css';

export function Header({ compact = false }) {
  return (
    <header className={`site-header ${compact ? 'is-compact' : ''}`}>
      <div className="page-wrap site-header__inner">
        <div className="brand">
          <img
            className="brand__logo"
            src={logo}
            alt={`${brandConfig.companyName} — Holiday Planners`}
            width={400}
            height={99}
          />
          <p className="brand__slogan">{brandConfig.slogan}</p>
        </div>
        {compact ? null : (
          <div className="site-header__copy">
            <p className="site-header__intro">
              {brandConfig.intro.split('*').map((part, index) => (
                <span key={index}>
                  {index > 0 ? <span className="required-mark required-mark--inline">*</span> : null}
                  {part}
                </span>
              ))}
            </p>
          </div>
        )}
      </div>
    </header>
  );
}
