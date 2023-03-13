import PropTypes from 'prop-types';
import styled from 'styled-components';

function Statistics({
  totalFeedback,
  positiveFeedbackPercentage,
  ...restProps
}) {
  const names = Object.keys(restProps);
  const values = Object.values(restProps);

  return (
    <StatList>
      {names.map((name, index) => (
        <StatItem key={name}>
          {name}: {values[index]}
        </StatItem>
      ))}
      <StatItem>Total: {totalFeedback}</StatItem>
      <StatItem>
        Positive Feedback:{' '}
        {totalFeedback !== 0 ? positiveFeedbackPercentage : 0}%
      </StatItem>
    </StatList>
  );
}

export default Statistics;

Statistics.propTypes = {
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,

  restProps: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
};

const StatList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font: 15px 'trebuchet MS', 'lucida sans';
  padding: 0;
  margin: 0;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
`;

const StatItem = styled.li`
  text-transform: capitalize;
  display: block;
  padding: 0.4em 0.4em 0.4em 2em;
  *padding: 0.4em;
  background: #ddd;
  color: #444;
  text-decoration: none;
  border-radius: 0.3em;
  transition: all 0.3s ease-out;

  &:hover {
    background: #eee;
  }
`;
