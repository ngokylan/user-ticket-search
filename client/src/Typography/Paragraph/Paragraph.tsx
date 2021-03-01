import React from 'react';
import PropTypes from 'prop-types';
import { ParagraphProps } from './type';
import { getClass } from '../../_lib/helper';
import '../Typography.scss';

function mapPropsToClass(block: string, props: ParagraphProps) {
  const {
    isBold,
    isItalic,
    isTruncate,
    align,
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
      [`text-truncate`]: isTruncate,
      [`text-${align}`]: align,
      [`text-decoration-${decoration}`]: decoration,
      [`text-transform-${transform}`]: transform,
      [`text-color-${color}`]: color,
      [`text-size-${size}`]: size,
    },
    []
  );
}

function Paragraph({ children, ...props }: ParagraphProps): any {
  const { id } = props;

  return (
    <p
      id={id}
      data-testid={`-typography-${id || 'default'}`}
      className={mapPropsToClass('-typography', props)}
    >
      {children}
    </p>
  );
}

Paragraph.defaultProps = {
  size: 'rg',
  isBold: false,
  isItalic: false,
  isTruncate: false,
};

export default Paragraph;
