import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

export const PrevButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--prev"
    onClick={onClick}
    disabled={!enabled}
  >
    <BsChevronCompactLeft className="embla__button__svg" />
  </button>
);

export const NextButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--next"
    onClick={onClick}
    disabled={!enabled}
  >
    <BsChevronCompactRight className="embla__button__svg" />
  </button>
);
