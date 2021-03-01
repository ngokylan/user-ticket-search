import styled from 'styled-components';

export const HeaderTabsStyled = styled.div<any>`
  ${({ primaryColor }) =>
    primaryColor &&
    `
    .tabs__nav > ul > .tabs__item--active a:after {
      background-color: ${primaryColor} !important;
    }
  `}
`;
