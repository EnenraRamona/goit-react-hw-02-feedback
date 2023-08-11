import { Component } from 'react';
import { Statistic } from './FeedbackStatistic/Statistic';
import { FeedbackButtons } from './FeedBackOptions/FeedbackButtons';
import { Section } from './FeedBackSection/Section';
import { Notification } from './NotificationMessage/Notification';

export class App extends Component {
  state = {
    good: 0,
    bad: 0,
    neutral: 0,
  };

  handleFeedBack = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedBack() {
    return this.state.good + this.state.bad + this.state.neutral;
  }

  countPositiveFeedbackPercentage() {
    const totalFeedback = this.countTotalFeedBack();
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((this.state.good / totalFeedback) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title={`Please leave feedback`}>
          <FeedbackButtons
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedBack}
          ></FeedbackButtons>
        </Section>

        <Section title={`Statistic`}>
          {good || neutral || bad ? (
            <Statistic
              good={good}
              bad={bad}
              neutral={neutral}
              total={this.countTotalFeedBack()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistic>
          ) : (
            <Notification message={`There is no feedback`} />
          )}
        </Section>
      </>
    );
  }
}
