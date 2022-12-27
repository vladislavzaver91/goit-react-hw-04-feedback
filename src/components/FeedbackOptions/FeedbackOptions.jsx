import PropTypes from 'prop-types';

import { BtnContainer, Btn } from "./FeedbackOptions.styled";


export function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <BtnContainer>
      {options.map(option => {
      const label = option.slice(0, 1).toUpperCase() + option.slice(1);
      return (
          <Btn key={option} onClick={onLeaveFeedback} name={option}>{label}</Btn>
      );
    })}
    </BtnContainer>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};