import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import './HeaderTitle.scss';
import { HeaderTitleProps } from '../type';

export const HeaderTitlePropTypes = {
  children: PropTypes.node,
  subHeading: PropTypes.string,
};

function HeaderTitle({ children, subHeading }: HeaderTitleProps): any {
  return <h1>{children}</h1>;
}

HeaderTitle.propTypes = HeaderTitlePropTypes;

export default HeaderTitle;
