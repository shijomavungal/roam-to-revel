import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { enquirySections } from '../data/enquiryFormConfig';
import { createInitialEnquiry } from '../data/enquiryDefaults';
import { submitEnquiry } from '../services/enquiryService';
import { setByPath, toggleExclusive } from '../utils/formHelpers';
import { validateEnquiry, validateSection } from '../utils/validation';

export function useEnquiryForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(createInitialEnquiry);
  const [errors, setErrors] = useState({});
  const [stepIndex, setStepIndex] = useState(0);
  const [maxReached, setMaxReached] = useState(0);
  const [direction, setDirection] = useState('forward');
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const currentSection = enquirySections[stepIndex];
  const isFirst = stepIndex === 0;
  const isLast = stepIndex === enquirySections.length - 1;

  const clearError = (path) => {
    setErrors((current) => {
      if (!current[path]) return current;
      const next = { ...current };
      delete next[path];
      return next;
    });
  };

  const updateField = (path, value) => {
    setFormData((current) => setByPath(current, path, value));
    clearError(path);
    setSubmitError('');
  };

  const toggleList = (path, value, exclusiveValues = []) => {
    setFormData((current) => {
      const list = path.split('.').reduce((acc, key) => acc[key], current);
      return setByPath(current, path, toggleExclusive(list, value, exclusiveValues));
    });
    clearError(path);
  };

  const handleGroupType = (value) => {
    setFormData((current) => {
      const next = structuredClone(current);
      next.traveller.groupType = value;
      if (value === 'just_me') {
        next.traveller.adults = 1;
        next.traveller.children = 0;
        next.traveller.childDatesOfBirth = [];
      } else if (value === 'couple' && next.traveller.adults < 2) {
        next.traveller.adults = 2;
      }
      return next;
    });
    clearError('traveller.groupType');
  };

  const scrollToFirstError = (nextErrors) => {
    const firstError = Object.keys(nextErrors)[0];
    if (!firstError) return;
    const node = document.querySelector(`[data-error-path="${firstError}"]`);
    node?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const goToStep = (index, nextDirection) => {
    setDirection(nextDirection);
    setStepIndex(index);
    setMaxReached((current) => Math.max(current, index));
    setErrors({});
    setSubmitError('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    if (isFirst) return;
    goToStep(stepIndex - 1, 'back');
  };

  const handleSelectStep = (index) => {
    if (index === stepIndex || index > maxReached) return;
    goToStep(index, index < stepIndex ? 'back' : 'forward');
  };

  const handleNext = () => {
    const nextErrors = validateSection(formData, currentSection.id);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      scrollToFirstError(nextErrors);
      return false;
    }
    if (!isLast) goToStep(stepIndex + 1, 'forward');
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isLast) {
      handleNext();
      return;
    }

    const nextErrors = validateEnquiry(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstKey = Object.keys(nextErrors)[0];
      const sectionIndex = enquirySections.findIndex((section) =>
        firstKey.startsWith(
          section.id === 'destination'
            ? 'trip'
            : section.id === 'important'
              ? 'importantBits'
              : section.id === 'personal'
                ? 'personalTouch'
                : section.id,
        ),
      );
      if (sectionIndex >= 0 && sectionIndex !== stepIndex) {
        goToStep(sectionIndex, sectionIndex < stepIndex ? 'back' : 'forward');
      }
      setTimeout(() => scrollToFirstError(nextErrors), 50);
      return;
    }

    setSubmitting(true);
    setSubmitError('');
    try {
      await submitEnquiry(formData);
      navigate('/enquiry/success');
    } catch {
      setSubmitError('Something went wrong while submitting. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return {
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
  };
}
