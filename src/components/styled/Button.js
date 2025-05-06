import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  padding: ${(props) => props.$padding};
  border-radius: 8px;
  gap: 2px;
  font-size: ${(props) => props.$size};
  cursor: pointer;
  background-color: ${(props) => props.$background};
  justify-content: ${(props) => props.$justify};
  transition: ${(props) => props.$transition};

  &:hover {
    background-color: ${(props) => props.$hoverBackground};
    size: '16px';
    transform: ${(props) => props.$transform};
    color: ${(props) => props.$hoverColor};
  };
`;

Button.defaultProps = {
  $padding: '4px 8px',
  $background: 'transparent',
  $hoverBackground: '#e4ecf7',
};

export default Button;