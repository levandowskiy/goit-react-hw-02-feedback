import { Component } from 'react';
import { Wrapper } from './FeedbackOptions.styled';

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
