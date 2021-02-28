import React, { ReactNode, Component } from 'react';
import CustomEvent from 'custom-event';
import PropTypes from 'prop-types';
import withLayoutAware from './LayoutAware';
import { LayoutContextProps } from '../';
import './LayoutContent.scss';

export type LayoutContentWithoutContextProps = {
  children: ReactNode;
};

export type LayoutContentProps = LayoutContextProps &
  LayoutContentWithoutContextProps;

export const LayoutContentPropTypes = {
  children: PropTypes.node,
};

export class LayoutContentWithoutContext extends Component<LayoutContentProps> {
  private mainRef = React.createRef<HTMLDivElement>();

  handleScroll = (event: Event) => {
    // Dispatch custom event passing scrollTop of Main Content
    /* This custom event can be listened -> window.addEventListener("scroll_main-content",e=>console.log(e)); */
    if (event.target === this.mainRef.current) {
      // Dispatch event only if ths scroll is triggered on the layout
      const mainScroll = new CustomEvent('onScroll_main-content', {
        detail: {
          scrollTop: (event.target as HTMLDivElement).scrollTop,
          target: event.target,
        },
      });
      window.dispatchEvent(mainScroll);
    }
  };

  handleResize = () => {
    // Trigger scroll event manually when window gets resized
    if (this.mainRef && this.mainRef.current) {
      var event = new Event('scroll');
      this.mainRef.current.dispatchEvent(event);
    }
  };

  componentDidMount() {
    const { setLayoutRef } = this.props;

    if (this.mainRef && this.mainRef.current && setLayoutRef) {
      setLayoutRef(this.mainRef.current);
      this.mainRef.current.addEventListener('scroll', this.handleScroll, true);
    }
    window.addEventListener('resize', this.handleResize, true);
  }

  componentWillUnmount() {
    if (this.mainRef && this.mainRef.current) {
      this.mainRef.current.removeEventListener(
        'scroll',
        this.handleScroll,
        true
      );
    }

    window.removeEventListener('resize', this.handleResize, true);
  }

  render() {
    const { children } = this.props;

    return (
      <div
        className="layout__main-content-wrapper"
        ref={this.mainRef}
        role="main"
      >
        <div className="layout__main-content">{children}</div>
      </div>
    );
  }
}

export default withLayoutAware(LayoutContentWithoutContext);
