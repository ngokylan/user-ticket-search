import styled from 'styled-components';

import { ImageProps } from '../Image';

export const StyledImage = styled.img<ImageProps>`
  ${({ objectFit }) =>
    objectFit &&
    `
      object-fit: ${objectFit};
    `}
`;
