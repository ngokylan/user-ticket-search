import styled from '../../_lib/style';

const elements: any = {
  h1: styled.h1``,
  h2: styled.h2``,
  h3: styled.h3``,
  h4: styled.h4``,
  h5: styled.h5``,
  h6: styled.h6``,
};

const StyledHeading = function(htmlTag?: string) {
  return elements[htmlTag || 'h3'];
};

export default StyledHeading;
