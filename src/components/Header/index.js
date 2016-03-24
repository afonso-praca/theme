import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { stores } from 'sdk';
import HeaderTop from './HeaderTop';
import HeaderLogo from './HeaderLogo';
import HeaderCart from './HeaderCart';
import HeaderSearchButton from './HeaderSearchButton';
import HeaderMenuToggle from './HeaderMenuToggle';
import './style.less';

const Placeholder = stores.ComponentStore.state.getIn(['Placeholder@vtex.storefront-sdk', 'constructor']);

class Header extends React.Component {
  state = {
    isMenuOpen: false,
    isSearchOpen: false
  }

  handleMenuTap = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  handleSearchTap = () => {
    this.setState({ isSearchOpen: !this.state.isSearchOpen });
  }

  render() {
    let menu = this.state.isMenuOpen ?
      (
        <Placeholder
          id="navigation-menu"
          key="NavigationMenu"
          toggleMenu={this.handleMenuTap}
        />
      ) : null;

    return (
      <div className="Header">
        <HeaderTop />
        <div className="Header__inner clearfix">
          <HeaderMenuToggle handleMenuTap={this.handleMenuTap} />
          <HeaderLogo />
          <HeaderCart />
          <HeaderSearchButton handleSearchTap={this.handleSearchTap} />
          <div className="Header__search-bar col-sm-3 col-md-3 pull-right">
            <Placeholder
              id="search-bar"
              visible={this.state.isSearchOpen}
              handleSearchTap={this.handleSearchTap}
            />
          </div>
          <ReactCSSTransitionGroup
            transitionName="NavigationMenu"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={250}
          >
            { menu }
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default Header;
