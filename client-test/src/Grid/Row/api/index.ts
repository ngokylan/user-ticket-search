import { getClass } from '../../../_lib/helper';
import { RowResponsivePropertiesType } from '../type';

/**
 * Responsive properties
 */
export const responsiveProperties: RowResponsivePropertiesType[] = [
  { property: 'display', prefix: 'flex-' },
  { property: 'direction', prefix: 'flex-' },
  { property: 'wrap', prefix: 'flex-' },
  { property: 'justifyContent', prefix: 'justify-content-' },
  { property: 'alignItems', prefix: 'align-items-' },
  { property: 'alignContent', prefix: 'align-content-' },
];

/**
 *
 * @param block
 * @param props
 */
export function mapPropsToClass(block: string, props: any) {
  return getClass(
    block,
    {
      [`${props.className}`]: props.className,
      [`no-gutters`]: props.isNoGutters,
      [`flex-inline`]: props.isInline,
      [`flex-${props.direction}`]: props.direction,
      [`flex-${props.wrap}`]: props.wrap,
      [`justify-content-${props.justifyContent}`]: props.justifyContent,
      [`align-items-${props.alignItems}`]: props.alignItems,
      [`align-content-${props.alignContent}`]: props.alignContent,
      [`${mapResponsive(block, 'xs', props.xs)}`]: props.xs,
      [`${mapResponsive(block, 'sm', props.sm)}`]: props.sm,
      [`${mapResponsive(block, 'md', props.md)}`]: props.md,
      [`${mapResponsive(block, 'lg', props.lg)}`]: props.lg,
      [`${mapResponsive(block, 'xl', props.xl)}`]: props.xl,
      [`${mapResponsive(block, 'xxl', props.xxl)}`]: props.xxl,
    },
    []
  );
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

  return responsiveProperties
    .map(item => {
      if (options[item.property] !== undefined) {
        return `${item.prefix}${breakpoint}-${options[item.property]}`;
      }
    })
    .join(' ');
}
