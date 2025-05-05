import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap};
  max-width: ${(props) => props.$mw};
  margin: ${(props) => props.$margin};
  padding: ${(props) => props.$padding};
  height: ${(props) => props.$height};
  justify-content: ${(props) => props.$justify};
  align-items: ${(props) => props.$align};
  background: ${(props) => props.$background};
`;

Container.defaultProps = {
  $gap: '12px',
}

export default Container;