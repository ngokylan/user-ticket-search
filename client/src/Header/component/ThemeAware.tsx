import React from 'react';
import { ThemeContextConsumer } from './ThemeContext';

type ThemeProps = {
  render: Function;
};

function ThemeAware({ render }: ThemeProps) {
  return (
    <ThemeContextConsumer>
      {theme =>
        theme && (
          <>
            {render({
              primaryColor: theme.primaryColor || '',
            })}
          </>
        )
      }
    </ThemeContextConsumer>
  );
}

export default ThemeAware;
