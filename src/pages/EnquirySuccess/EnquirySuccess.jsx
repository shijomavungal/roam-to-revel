import { Link } from 'react-router-dom';
import { brandConfig } from '../../data/brandConfig';
import { enquirySections } from '../../data/enquiryFormConfig';
import { Icon } from '../../components/Icon/Icon';
import { ColorIcon } from '../../components/ColorIcon/ColorIcon';
import { Confetti } from '../../components/Confetti/Confetti';
import { SkyBackdrop } from '../../components/SkyBackdrop/SkyBackdrop';
import { getLastEnquiry } from '../../services/enquiryService';
import { stepThemeStyle } from '../../utils/stepTheme';
import './EnquirySuccess.css';

const CELEBRATION_ICONS = ['plane', 'suitcase', 'beach', 'camera', 'balloon'];
const successTheme = enquirySections[enquirySections.length - 1].theme;

export function EnquirySuccess() {
  const lastEnquiry = getLastEnquiry();

  return (
    <div className="app-shell success-shell" style={stepThemeStyle(successTheme)}>
      <SkyBackdrop scene="personal" />
      <Confetti variant="shower" count={90} />
      <main className="page-wrap success-page">
        <div className="success-card">
          <div className="success-card__plane" aria-hidden="true" />
          <div className="success-card__icon" aria-hidden="true">
            <Icon name="check" size={32} />
          </div>
          <p className="success-card__eyebrow">Enquiry received</p>
          <h1>Thank You!</h1>
          <p className="success-card__lead">Your travel enquiry has been submitted successfully.</p>
          <div className="success-card__icons" aria-hidden="true">
            {CELEBRATION_ICONS.map((name, index) => (
              <span key={name} style={{ '--delay': `${index * 0.15}s` }}>
                <ColorIcon name={name} size={40} />
              </span>
            ))}
          </div>
          <p>
            Thank you for trusting {brandConfig.companyName} with your travel dreams. Our travel
            team will review your requirements and contact you shortly.
          </p>
          {lastEnquiry ? (
            <div className="success-card__meta">
              <p>
                <strong>Reference</strong>
                <span>{lastEnquiry.reference}</span>
              </p>
              {lastEnquiry.name ? (
                <p>
                  <strong>Submitted by</strong>
                  <span>{lastEnquiry.name}</span>
                </p>
              ) : null}
            </div>
          ) : null}
          <p className="success-card__note">
            Sit back, relax, and let us work our travel magic. Your next unforgettable adventure
            might be closer than you think.
          </p>
          <Link className="success-card__link" to="/enquiry">
            Submit another enquiry
          </Link>
        </div>
      </main>
    </div>
  );
}
