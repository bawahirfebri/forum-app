import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap};
  align-items: ${(props) => props.$align};
  border: ${(props) => props.$border};
  border-radius: ${(props) => props.$radius};
  padding: ${(props) => props.$padding};

  &:focus-within {
    border-color: ${(props) => props.$borderColor};
    box-shadow: ${(props) => props.$boxshadow};
  };
`;

Form.defaultProps = {
  $gap: '8px'
}

export default Form