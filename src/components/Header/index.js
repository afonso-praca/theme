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

  handleMenuClick = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  handleSearchClick = () => {
    this.setState({ isSearchOpen: !this.state.isSearchOpen });
  }

  render() {
    let menu = this.state.isMenuOpen ?
      (
        <Placeholder
          id="navigation-menu"
          key="NavigationMenu"
          toggleMenu={this.handleMenuClick}
        />
      ) : null;

    return (
      <div className="Header">
        <HeaderTop />
        <div className="Header__inner clearfix">
          <HeaderMenuToggle handleMenuClick={this.handleMenuClick} />
          <HeaderLogo />
          <HeaderCart />
          <HeaderSearchButton handleSearchClick={this.handleSearchClick} />
          <div className="Header__search-bar col-sm-3 col-md-3 pull-right">
            <Placeholder
              id="search-bar"
              visible={this.state.isSearchOpen}
              handleSearchClick={this.handleSearchClick}
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
