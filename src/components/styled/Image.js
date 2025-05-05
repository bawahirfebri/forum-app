import styled from 'styled-components';

const Image = styled.img`
  width: ${(props) => props.$weight};
  height: ${(props) => props.$height};
  border-radius: ${(props) => props.$radius};
`;

Image.defaultProps = {
  $width: '64px',
  $height: '64px',
  $radius: '12px',
}

export default Image;