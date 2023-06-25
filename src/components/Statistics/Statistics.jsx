import { Component } from 'react';

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
