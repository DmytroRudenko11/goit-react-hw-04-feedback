import PropTypes from 'prop-types';
import styled from 'styled-components';

function Section({ title, children }) {
  return (
    <Container>
      <Title>{title}</Title>
      <div>{children}</div>
    </Container>
  );
}

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Container = styled.section`
  width: 500px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 5px;
  padding-bottom: 40px;
  font-family: 'Times New Roman', Times, serif;
  color: #212121;
`;

const Title = styled.h2`
  text-align: center;
`;
