import React from 'react';
import StyledContainer from './style';
import { ContainerProps } from './type';

function Container({ children, isFluid, size, role }: ContainerProps): any {
  return (
    <StyledContainer isFluid={isFluid} size={size} role={role}>
      {children}
    </StyledContainer>
  );
}

Container.defaultProps = {
  isFluid: false,
};

export default Container;
