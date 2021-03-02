import React from 'react';
import StyledHeading from './style';
import { HeadingProps } from './type';
import { getClass } from '../../../_lib/helper';
import '../Typography.scss';

function mapPropsToClass(block: string, props: HeadingProps) {
  const {
    isBold,
    isItalic,
    isTruncate,
    align,
    decoration,
    transform,
    color,
    size,
    type,
    className,
  } = props;
  return getClass(
    block,
    {
      [`${className}`]: className,
      [`font-weight-bold`]: isBold,
      [`font-italic`]: isItalic,
      [`text-truncate`]: isTruncate,
      [`text-${align}`]: align,
      [`text-decoration-${decoration}`]: decoration,
      [`text-transform-${transform}`]: transform,
      [`text-color-${color}`]: color,
      [`${type}-size-${size}`]: size,
    },
    []
  );
}

function Heading({ children, ...props }: HeadingProps): any {
  const { id, htmlTag } = props;
  const StyledHeadingComponent: any = StyledHeading(htmlTag);

  return (
    <StyledHeadingComponent
      id={id}
      data-testid={`typography-${id || 'default'}`}
      className={mapPropsToClass('typography', props)}
    >
      {children}
    </StyledHeadingComponent>
  );
}

Heading.defaultProps = {
  isBold: false,
  isItalic: false,
  isTruncate: false,
  type: 'heading',
  size: 'rg',
  htmlTag: 'h3',
};

export default Heading;
