import React from 'react';
import StyledText from './style';
import { TextProps } from './type';
import { getClass } from '../../../_lib/helper';
import '../Typography.scss';

export function mapPropsToClass(block: string, props: TextProps) {
  const {
    isBold,
    isItalic,
    decoration,
    transform,
    color,
    size,
    className,
  } = props;
  return getClass(
    block,
    {
      [`${className}`]: className,
      [`font-weight-bold`]: isBold,
      [`font-italic`]: isItalic,
      [`text-decoration-${decoration}`]: decoration,
      [`text-transform-${transform}`]: transform,
      [`text-size-${size}`]: size,
      [`text-color-${color}`]: color,
    },
    []
  );
}

function Text({ children, ...props }: TextProps): any {
  const { id, htmlTag } = props;
  const StyledTextComponent: any = StyledText(htmlTag);

  return (
    <StyledTextComponent
      id={id}
      data-testid={`typography-${id || 'default'}`}
      className={mapPropsToClass('typography', props)}
    >
      {children}
    </StyledTextComponent>
  );
}

Text.defaultProps = {
  htmlTag: 'span',
  isBold: false,
  isItalic: false,
  isTruncate: false,
};

export default Text;
