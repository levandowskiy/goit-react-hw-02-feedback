import { Wrapper } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export function FeedbackOptions({heandlerClick, options}) {

    return (
      <Wrapper>
        {options.map(option => {
          return (
            <button key={option} onClick={heandlerClick}>
              {option}
            </button>
          );
        })}
      </Wrapper>
    );
}

FeedbackOptions.propTypes = {
  heandlerClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};