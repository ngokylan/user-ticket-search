/* tslint:disable */
import React, { Component } from 'react';
import '../../_lib/style/main.scss';
import './index.css';
import Layout from '../../components/Layout';
import Header from '../common-pages/Header';
import ResultItems from '../common-pages/ResultItems';
import ApplicationTheme, {
  ThemeProvider,
  defaultTheme,
} from '../../components/ApplicationTheme';
import { connect } from 'react-redux';
import actions from '../../actions/index';

class UserSearch extends Component<any, any> {
  state = {
    showHeaderPlaceholder: false,
    showMenuPlaceholder: false,
    useDefaultTheme: false,
    items: [],
  };

  fetchDataAction = () => {

  }

  componentDidMount() {
    this.props.fetchDataHandler('');
  }

  render() {   
    const theme = {
      ...defaultTheme,
    };

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Layout>
            <Layout.Header>
              <Header fetchData={this.props.fetchDataHandler}/>
            </Layout.Header>
            <Layout.Content>
              <ResultItems items={this.props.items}/>
            </Layout.Content>
          </Layout>
          <ApplicationTheme />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    items: state.items
  };
};
const maptDispatchToProps = (dispatch: (arg0: any) => any) => {
  return {
    fetchDataHandler: (filter: string) => dispatch(actions.fetchData(filter)),    
  };
};
export default connect(mapStateToProps, maptDispatchToProps)(UserSearch);
