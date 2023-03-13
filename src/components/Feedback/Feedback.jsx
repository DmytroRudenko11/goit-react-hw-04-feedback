import PropTypes from 'prop-types';
import styled from 'styled-components';

function handleColor(state) {
  if (state.children === 'good') {
    return '#4CAF50';
  }
  if (state.children === 'neutral') {
    return '#ddd';
  }
  return '#f44336';
}

function Feedback({ onFeedbackClick, ...restProps }) {
  const names = Object.keys(restProps);

  return (
    <Box>
      {names.map(item => (
        <Button
          result={item}
          key={item}
          onClick={() => onFeedbackClick(item)}
          type="button"
        >
          {item}
        </Button>
      ))}
    </Box>
  );
}

export default Feedback;

Feedback.propTypes = {
  onFeedbackClick: PropTypes.func.isRequired,
  restProps: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
};

const Box = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  background-color: ${p => handleColor(p)};
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-transform: capitalize;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    outline: 2px solid ${p => handleColor(p)};
  }
`;
