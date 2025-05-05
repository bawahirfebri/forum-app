import styled from 'styled-components';

const Card = styled.div`
  cursor: ${(props) => props.$cursor};
  border: 1px solid var(--border-color);
  padding: ${(props) => props.$padding};
  display: flex;
  gap: ${(props) => props.$gap};
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  align-items: ${(props) => props.$align};
  justify-content: ${(props) => props.$justify};

  &:hover {
    transform: ${(props) => props.$transform};
  }

  @media screen and (max-width: 650px) {
    &:hover {
      transform: none;
    }
  }
`;

Card.defaultProps = {
  $padding: '1rem',
  $gap: '1rem',
  $align: 'flex-start',
  $transform: 'scale(1.025)',
  $cursor: 'pointer'
};

export default Card;