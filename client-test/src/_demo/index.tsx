/* tslint:disable */
import React, { Component } from 'react';
import '../_lib/style/main.scss';
import './index.css';
import Layout from '../Layout';

import { Heading as AppHeading } from '../Typography';
import HeaderDemo from './Header';
import CardDemo from './Card';
import ApplicationTheme, { 
  ThemeProvider,
  defaultTheme,
} from '../ApplicationTheme';

function Heading({ children }: any) {
  return (
    <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
      <AppHeading>{children}</AppHeading>
    </div>
  );
}

class App extends Component<any, any> {
  state = {
    showHeaderPlaceholder: false,
    showMenuPlaceholder: false,
    useDefaultTheme: false,
  };

  toggleHeader = () => {
    this.setState(({ showHeaderPlaceholder }: any) => {
      return { showHeaderPlaceholder: !showHeaderPlaceholder };
    });
  };

  toggleMenuDefaultTheme = () => {
    this.setState(({ useDefaultTheme }: any) => {
      return { useDefaultTheme: !useDefaultTheme };
    });
  };

  toggleMenu = () => {
    this.setState(({ showMenuPlaceholder }: any) => {
      return { showMenuPlaceholder: !showMenuPlaceholder };
    });
  };

  render() {
    // defaultTheme will be overridden by theme API in the application
    const theme = {
      ...defaultTheme,      
    };

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Layout           
          >
            <Layout.Header>              
                <HeaderDemo />  
            </Layout.Header>
            <Layout.Content>                          
              <Heading>Card component</Heading>
              <CardDemo />                        
            </Layout.Content>           
          </Layout>
          {/* It's recommended to render ApplicationTheme later to override the css */}
          <ApplicationTheme />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
