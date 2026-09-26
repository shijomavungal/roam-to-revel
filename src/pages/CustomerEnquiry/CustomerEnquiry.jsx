import { Header } from '../../components/Header/Header';
import { FormSection } from '../../components/FormSection/FormSection';
import { ProgressNav } from '../../components/ProgressNav/ProgressNav';
import { StepActions } from '../../components/StepActions/StepActions';
import { SkyBackdrop } from '../../components/SkyBackdrop/SkyBackdrop';
import { Confetti } from '../../components/Confetti/Confetti';
import { enquirySections, SECTION_PREFIX } from '../../data/enquiryFormConfig';
import { brandConfig } from '../../data/brandConfig';
import { useEnquiryForm } from '../../hooks/useEnquiryForm';
import { sectionHasError } from '../../utils/validation';
import { stepThemeStyle } from '../../utils/stepTheme';
import { TravellerSection } from './sections/TravellerSection';
import { DestinationSection } from './sections/DestinationSection';
import { VibeSection } from './sections/VibeSection';
import { BudgetSection } from './sections/BudgetSection';
import { ImportantBitsSection } from './sections/ImportantBitsSection';
import { PersonalTouchSection } from './sections/PersonalTouchSection';
import './CustomerEnquiry.css';

const SECTION_CONTENT = {
  traveller: TravellerSection,
  destination: DestinationSection,
  vibe: VibeSection,
  budget: BudgetSection,
  important: ImportantBitsSection,
  personal: PersonalTouchSection,
};

export function CustomerEnquiry() {
  const {
    formData,
    errors,
    submitting,
    submitError,
    stepIndex,
    maxReached,
    currentSection,
    isFirst,
    isLast,
    direction,
    updateField,
    toggleList,
    handleGroupType,
    handleBack,
    handleSelectStep,
    handleSubmit,
  } = useEnquiryForm();

  const errorPrefixes = enquirySections
    .filter((section) => sectionHasError(errors, SECTION_PREFIX[section.id]))
    .map((section) => section.id);

  const sectionProps = { formData, errors, updateField, toggleList };
  const SectionFields = SECTION_CONTENT[currentSection.id];

  return (
    <div className="app-shell" style={stepThemeStyle(currentSection.theme)}>
      <SkyBackdrop scene={currentSection.scene} />
      {direction === 'forward' && stepIndex > 0 ? <Confetti key={stepIndex} /> : null}
      <Header compact={stepIndex > 0} />
      <main className="page-wrap enquiry-page">
        <ProgressNav
          currentIndex={stepIndex}
          maxReached={maxReached}
          errorPrefixes={errorPrefixes}
          onSelect={handleSelectStep}
        />
        <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
          <FormSection
            key={`${currentSection.id}-${direction}`}
            {...currentSection}
            direction={direction}
            hasError={errorPrefixes.includes(currentSection.id)}
          >
            <SectionFields {...sectionProps} handleGroupType={handleGroupType} />
          </FormSection>

          <div className="enquiry-submit">
            {submitError ? <p className="field-error">{submitError}</p> : null}
            {Object.keys(errors).length > 0 ? (
              <p className="field-error">Please complete the highlighted fields before continuing.</p>
            ) : null}
            <StepActions
              isFirst={isFirst}
              isLast={isLast}
              submitting={submitting}
              onBack={handleBack}
              nextLabel="Next"
            />
            <p className="enquiry-submit__note">
              Step {stepIndex + 1} of {enquirySections.length}
              {currentSection.cheer ? (
                <>
                  {' · '}
                  <strong className="enquiry-submit__cheer">{currentSection.cheer}</strong>
                </>
              ) : null}
            </p>
          </div>
        </form>
      </main>
      <footer className="site-footer">
        <p>
          {brandConfig.companyName} · {brandConfig.tagline}
        </p>
      </footer>
    </div>
  );
}
