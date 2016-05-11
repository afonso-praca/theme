import React from 'react';
import { stores } from 'sdk';
import HeaderSearchButton from './HeaderSearchButton/HeaderSearchButton.js';
import './HeaderSearchComponent.less';

const Placeholder = stores.ComponentStore.state.getIn(['Placeholder@vtex.storefront-sdk', 'constructor']);
const TABLET_WIDTH = 991;

class HeaderSearchComponent extends React.Component {
  state = {
    isSearchOpen: document.documentElement.clientWidth > TABLET_WIDTH
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    let isMobile = document.documentElement.clientWidth < TABLET_WIDTH;
    if (isMobile && this.state.isSearchOpen) {
      this.setState({
        isSearchOpen: false
      });
    } else if (!isMobile && !this.state.isSearchOpen) {
      this.setState({
        isSearchOpen: true
      });
    }
  }

  handleSearchClick = () => {
    this.setState({ isSearchOpen: !this.state.isSearchOpen });
  }

  render() {
    return (
      <div className="HeaderSearchComponent">
        <HeaderSearchButton handleSearchClick={this.handleSearchClick} />
        <div className="HeaderSearchComponent__search-bar pull-right hidden-md hidden-lg">
          <Placeholder
            id="search-bar"
            visible={this.state.isSearchOpen}
            handleSearchClick={this.handleSearchClick}
          />
        </div>
        <div className="HeaderSearchComponent__search-bar pull-right hidden-xs hidden-sm">
          <Placeholder
            id="search-bar"
            visible={this.state.isSearchOpen}
            handleSearchClick={this.handleSearchClick}
          />
        </div>
      </div>
    );
  }
}

export default HeaderSearchComponent;
