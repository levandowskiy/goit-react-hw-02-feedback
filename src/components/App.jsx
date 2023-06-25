import React, { Component } from 'react';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  heandlerClick = evt => {
    const type = evt.target.textContent.toLowerCase();

    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    return Math.round((good / (good + neutral + bad)) * 100) + '%';
  };

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  render() {
    const options = ['Good', 'Neutral', 'Bad'];
    const { good, neutral, bad } = this.state;
    const isFeedbackExists = good || neutral || bad;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            heandlerClick={this.heandlerClick}
          />
        </Section>

        {isFeedbackExists ? (
          <Section title="Statistics">
            <Statistics
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
              good={good}
              neutral={neutral}
              bad={bad}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}
