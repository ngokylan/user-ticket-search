import { ReactNode } from 'react';
export type ContainerSize = 'lg';

export type ContainerProps = {
  /** Content of container */
  children?: ReactNode;
  /** isFluid atribute of container */
  isFluid?: boolean;
  /** size atribute of container */
  size?: ContainerSize;
  /** Role is for WCAG accessibility compliance (optional) */
  role?: string;
};
