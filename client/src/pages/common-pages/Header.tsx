import React from 'react';
import Header from '../../components/Header';
import {
  SearchIcon,
} from '../../components/Icon';
import { BadgeType } from '../../components/Badge';
import Search from '../../components/Search';
import { withLayoutAware, LayoutContextProps } from '../../components/Layout';
import { SUGGESTION_SEARCH_FORMAT } from '../../const';


type HeaderDemoState = {
  searchQuery: string;
};


class HeaderModule extends React.Component<LayoutContextProps, HeaderDemoState> {
  state: HeaderDemoState = {
    searchQuery: '',
  };

  constructor(props: LayoutContextProps) {
    super(props);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  getHeaderButtons = () => [
    {
      icon: <SearchIcon />,
      label: 'Search',
      onClick: this.openSearch,
      badge: {
        type: 'danger' as BadgeType,
        children: 1,
      },
    },
   
  ];


  closeSearch = () => {
    this.setState({
      searchQuery: '',
    });
    this.props.toggleSearchOpen();
  };

  openSearch = () => {
    this.props.toggleSearchOpen();
  };

  handleSearchChange = (searchQuery: string) => {
    this.setState({
      searchQuery,
    });
  };

  handleSearchSubmit() {
    this.props.fetchData(this.state.searchQuery);
  }

  handleSearchKeyDown() {
    console.log('handleKeyDown!');
  }


  headerTabs() {
    return [
      {
        label: 'User',
        onClick: function() {
          console.log('tab');
        },
        active: true,
      },
      {
        label: 'Organization',
        onClick: function() {
          console.log('tab');
        },
        active: false,
      },
      {
        label: 'Ticket',
        onClick: function() {
          console.log('tab');
        },
        active: false,
      },

    ];
  }

  render() {
    const titleAddon = (
      <img style={{'height': '25px'}} src='https://theme.zdassets.com/theme_assets/1/7eb075fb3220e4a248a73351fc5ad59e3be64586.gif'></img>
    );
    return (
      <>
        <Header
          title="Zendesk search system"
          titleAddon={titleAddon}
          subHeading="Please enter any field for searching"          
          buttons={this.getHeaderButtons()}
          tabs={this.headerTabs()}
          isSearchOpen={this.props.isSearchOpen}
        >
          <Search
            value={this.state.searchQuery}
            isVisible={this.props.isSearchOpen}
            onClose={this.closeSearch}
            onChange={this.handleSearchChange}
            onSubmit={this.handleSearchSubmit}
            onKeyPress={this.handleSearchKeyDown}
            isSubmitEnabledAlways={true}
            placeholder={SUGGESTION_SEARCH_FORMAT}
          />         
        </Header>
      </>
    );
  }
}

export default withLayoutAware(HeaderModule);
