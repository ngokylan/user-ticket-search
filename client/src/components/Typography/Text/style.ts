import styled from '../../../_lib/style';

const elements: any = {
  span: styled.span``,
  small: styled.small``,
  strong: styled.strong``,
};

const StyledText = function(htmlTag?: string) {
  return elements[htmlTag || 'span'];
};

export default StyledText;
