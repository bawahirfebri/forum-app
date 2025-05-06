import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: ${(props) => props.$wrap};
  gap: ${(props) => props.$gap};
  flex-direction: ${(props) => props.$direction};
  align-items: ${(props) => props.$align};
  justify-content: ${(props) => props.$justify};
  padding: ${(props) => props.$padding};
  background-color: ${(props) => props.$background};
  border-radius: ${(props) => props.$radius};
  width: ${(props) => props.$width};
  cursor: ${(props) => props.$cursor};
  transition: ${(props) => props.$transition};
  position: ${(props) => props.$position};
  z-index: ${(props) => props.$zIndex};
  top: ${(props) => props.$top};
  box-shadow: ${(props) => props.$boxshadow};
  border: ${(props) => props.$border};

  &:hover {
    transform: ${(props) => props.$transform};
  }

  &.active {
    background-color: #505780;
  }

  @media screen and (max-width: 650px) {
    &:hover {
      transform: none;
    }
  }
`;

Wrapper.defaultProps = {
  $gap: '4px',
  $direction: 'column',
};

export default Wrapper;