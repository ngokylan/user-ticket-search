import React, { Component, ReactNode, createRef } from 'react';
import withLayoutAware from './LayoutAware';
import { LayoutContextProps } from '../';

export type LayoutHeaderProps = {
  children: ReactNode;
} & LayoutContextProps;

export class LayoutHeaderWithoutContext extends Component<LayoutHeaderProps> {
  private headerRef = createRef<HTMLDivElement>();

  componentDidMount() {
    const { setHeaderRef } = this.props;

    if (this.headerRef && this.headerRef.current && setHeaderRef) {
      setHeaderRef(this.headerRef.current);
    }
  }

  render() {
    const { children } = this.props;

    return (
      <div
        className="layout__main-header"
        ref={this.headerRef}
        role="banner"
      >
        {children}
      </div>
    );
  }
}

export default withLayoutAware(LayoutHeaderWithoutContext);
