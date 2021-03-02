import { ReactNode } from 'react';

export type FieldsetProps = {
  /** Fieldset Enable/Disable status, (optional) */
  isDisabled?: boolean;
  /** Fieldset id attribute, optional id */
  id?: string;
  /** Fieldset class name attribute, (optional) */
  className?: string;
  /** Fieldset content */
  children: ReactNode;
};
