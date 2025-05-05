import styled from 'styled-components';

const Text = styled.p`
  font-size: ${(props) => props.$size };
  color: ${(props) => props.$color};
  font-weight: ${(props) => props.$weight};
  letter-spacing: ${(props) => props.$spacing};

  .active & {
    color: #e4ecf7;
  }
`;

Text.defaultProps = {
  $size: '16px',
  $spacing: '-0.04em',
  $weight: 'normal',
};

export default Text