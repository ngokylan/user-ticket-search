import styled, { css } from '../../../_lib/style';

type StyledContainerProps = {
  isFluid?: boolean;
  /** Size of Container */
  size?: string;
};

const getStyledContainerSize = (size: string) => {
  switch (size) {
    case 'lg':
      return css`
        max-width: 1200px;
        margin-left: 0;
        padding-left: 0;
        padding-right: 0;
      `;
    default:
      return;
  }
};

const containerStyle = (props: StyledContainerProps) => { 
  if (!!props.size) {
    return getStyledContainerSize(props.size);
  }
};

const StyledContainer = styled.div<StyledContainerProps>`
  width: 100%;
  padding-right: 12px;
  padding-left: 12px;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  ${containerStyle}
`;

StyledContainer.displayName = 'StyledContainer';

export default StyledContainer;
