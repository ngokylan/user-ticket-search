import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import './HeaderTitleAddon.scss';

export type HeaderTitleAddonProps = {
  children?: ReactNode;
};

export const HeaderTitleAddonPropTypes = {
  children: PropTypes.node,
};

function HeaderTitleAddon({ children }: HeaderTitleAddonProps): any {
  if (children) {
    return <div className="header__title-addon">{children}</div>;
  }

  return null;
}

HeaderTitleAddon.propTypes = HeaderTitleAddonPropTypes;

export default HeaderTitleAddon;
