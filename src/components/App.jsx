import Feedback from './Feedback/Feedback';
import { useState, useEffect } from 'react';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import { Notification } from './Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalFeedback, setTotalFeedback] = useState(0);

  const handleFeedbackCount = feedback => {
    switch (feedback) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        return;
    }
  };

  useEffect(() => {
    setTotalFeedback(good + bad + neutral);
  }, [good, neutral, bad]);

  const countPositiveFeedback = () => {
    let positiveFeedback = (good / totalFeedback) * 100;
    return Math.floor(positiveFeedback);
  };

  return (
    <div>
      <Section title="Leave your feedback, please">
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          onFeedbackClick={handleFeedbackCount}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={totalFeedback}
            positiveFeedbackPercentage={countPositiveFeedback()}
          />
        )}
      </Section>
    </div>
  );
}
