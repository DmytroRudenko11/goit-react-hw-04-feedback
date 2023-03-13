import Feedback from './Feedback/Feedback';
import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackCount = feedback => {
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    let totalFeedback = 0;
    for (let value of values) {
      totalFeedback += value;
    }
    return totalFeedback;
  };

  countPositiveFeedback = () => {
    let positiveFeedback = (this.state.good / this.countTotalFeedback()) * 100;
    return Math.floor(positiveFeedback);
  };

  render() {
    return (
      <div>
        <Section title="Leave your feedback, please">
          <Feedback
            options={this.state}
            onFeedbackClick={this.handleFeedbackCount}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback given" />
          ) : (
            <Statistics
              data={this.state}
              totalFeedback={this.countTotalFeedback()}
              positiveFeedbackPercentage={this.countPositiveFeedback()}
            />
          )}
        </Section>
      </div>
    );
  }
}
