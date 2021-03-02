/* tslint:disable */
import React, { Component } from 'react';
import '../_lib/style/main.scss';
import './index.css';
import Layout from '../components/Layout';
import axios from 'axios';
import { Heading as AppHeading } from '../components/Typography';
import HeaderDemo from './Header';
import CardDemo from './Card';
import ApplicationTheme, { 
  ThemeProvider,
  defaultTheme,
} from '../components/ApplicationTheme';

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

  callServer = () => {
    axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/${process.env.API_VERSION}/users`, {
      params: {
        table: 'user',
      },
    }).then((response) => {
      console.log(response.data);
    });
    axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/${process.env.API_VERSION}/organizations`, {
      params: {
        table: 'organization',
      },
    }).then((response) => {
      console.log(response.data);
    });
    axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/${process.env.API_VERSION}/tickets`, {
      params: {
        table: 'ticket',
      },
    }).then((response) => {
      console.log(response.data);
    });
  }

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
              <CardDemo />                        
            </Layout.Content>           
          </Layout>
          {/* It's recommended to render ApplicationTheme later to override the css */}
          {this.callServer()}
          <ApplicationTheme />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
