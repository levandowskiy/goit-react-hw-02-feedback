import { Component } from 'react';
import { Wrapper } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
  render() {
    const { heandlerClick, options } = this.props;

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
}

FeedbackOptions.propTypes = {
  handleClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};