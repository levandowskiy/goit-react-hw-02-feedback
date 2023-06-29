import { Component } from 'react';
import PropTypes from 'prop-types';

export class Statistics extends Component {
  render() {
    const {
      countPositiveFeedbackPercentage,
      good,
      neutral,
      bad,
      countTotalFeedback,
    } = this.props;

    return (
      <>
        <p>Good: <span>{good}</span></p>
        <p>Neutral: <span>{neutral}</span></p>
        <p>Bad: <span>{bad}</span></p>
        <p>Total: <span>{countTotalFeedback(good, neutral, bad)}</span></p>
        <p>Positive Feedback: <span>{countPositiveFeedbackPercentage(good, neutral, bad)}</span></p>
      </>
    );
  }
}


Statistics.propTypes = {
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
};