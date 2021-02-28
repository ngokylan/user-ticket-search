import React from 'react';
import { Theme } from '../type';

const ThemeContext = React.createContext<Theme | undefined>(undefined);

export const ThemeContextProvider = ThemeContext.Provider;

export const ThemeContextConsumer = ThemeContext.Consumer;
