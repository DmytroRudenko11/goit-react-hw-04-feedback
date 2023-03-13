import styled from 'styled-components';
import PropTypes from 'prop-types';

export function Notification({ message }) {
  return <Message>{message}</Message>;
}

Notification.propTypes = {
  message: PropTypes.string,
};

const Message = styled.p`
  text-align: center;
  font-size: 20px;
`;
