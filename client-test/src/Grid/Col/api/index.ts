import { getClass } from '../../../_lib/helper';
import { ColResponsivePropertiesType, ColProps } from '../type';

/**
 * Responsive properties
 */
export const responsiveProperties: ColResponsivePropertiesType[] = [
  { property: 'span', prefix: 'col-' },
  { property: 'auto', prefix: 'col-' },
  { property: 'order', prefix: 'order-' },
  { property: 'offset', prefix: 'offset-' },
  { property: 'alignSelf', prefix: 'align-self-' },
  { property: 'shrink', prefix: 'flex-shrink-' },
  { property: 'grow', prefix: 'flex-grow-' },
  { property: 'fill', prefix: 'flex-' },
];

/**
 *
 * @param block
 * @param props
 */
export function mapPropsToClass(block: string, props: ColProps) {
  const {
    className,
    isAuto,
    span,
    order,
    offset,
    align,
    shrink,
    grow,
    isFill,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    xxxl,
  } = props;
  return getClass('col', {
    [`${className}`]: className,
    [`${block}-auto`]: isAuto,
    [`col-${span}`]: span,
    [`order-${order}`]: order,
    [`offset-${offset}`]: offset,
    [`align-self-${align}`]: align,
    [`flex-shrink-${shrink}`]: shrink !== undefined,
    [`flex-grow-${grow}`]: grow !== undefined,
    [`flex-fill`]: isFill,
    [`${mapResponsive(block, 'xs', xs)}`]: xs,
    [`${mapResponsive(block, 'sm', sm)}`]: sm,
    [`${mapResponsive(block, 'md', md)}`]: md,
    [`${mapResponsive(block, 'lg', lg)}`]: lg,
    [`${mapResponsive(block, 'xl', xl)}`]: xl,
    [`${mapResponsive(block, 'xxl', xxl)}`]: xxl,
    [`${mapResponsive(block, 'xxxl', xxxl)}`]: xxxl,
  });
}

/**
 *
 * @param breakpoint
 * @param options
 */
export function mapResponsive(block: string, breakpoint: string, options: any) {
  if (options === null || options === undefined) {
    return '';
  }

  if (typeof options === 'number') {
    return `${block}-${breakpoint}-${options}`;
  }

  return responsiveProperties
    .map(item => {
      if (options[item.property] !== undefined) {
        return `${item.prefix}${breakpoint}-${options[item.property]}`;
      }
    })
    .join(' ');
}
