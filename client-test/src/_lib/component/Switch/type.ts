import { ReactNode, MouseEventHandler, ChangeEventHandler } from 'react';

export type SwitchOnClick = MouseEventHandler<HTMLInputElement>;
export type SwitchOnChange = ChangeEventHandler<HTMLInputElement>;

export type SwitchProps = {
  onClick?: SwitchOnClick;
  onChange?: SwitchOnChange;
  id: string;
  isOn: boolean;
  ariaLabel?: string;
};
