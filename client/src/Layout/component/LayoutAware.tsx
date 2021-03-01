import React from 'react';
import LayoutContext from './LayoutContext';

function withLayoutAware(WrappedComponent: any) {
  const LayoutAware = (props: any) => {
    return (
      <LayoutContext.Consumer>
        {(layoutProps: any) => <WrappedComponent {...props} {...layoutProps} />}
      </LayoutContext.Consumer>
    );
  };

  LayoutAware.displayName = `LayoutAware(${getDisplayName(WrappedComponent)})`;

  return LayoutAware;
}

function getDisplayName(WrappedComponent: any): string {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withLayoutAware;
