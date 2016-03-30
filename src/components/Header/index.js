import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { stores } from 'sdk';
import HeaderTop from './HeaderTop';
import HeaderCart from './HeaderCart';
import HeaderSearchButton from './HeaderSearchButton';
import HeaderMenuToggle from './HeaderMenuToggle';
import './style.less';
import logoImage from 'assets/images/logo.jpg'

const Placeholder = stores.ComponentStore.state.getIn(['Placeholder@vtex.storefront-sdk', 'constructor']);
const Link = stores.ComponentStore.state.getIn(['Link@vtex.storefront-sdk', 'constructor']);

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
          <div className="Header__logo hidden-xs col-sm-3 col-md-3 col-lg-3">
            <Link to="/">
              <img src={ logoImage } alt="Pilates Lovers"/>
            </Link>
          </div>
          <HeaderMenuToggle handleMenuTap={this.handleMenuTap} />
          <HeaderCart />
          <HeaderSearchButton handleSearchTap={this.handleSearchTap} />
          <Placeholder
            id="search-bar"
            visible={this.state.isSearchOpen}
            handleSearchTap={this.handleSearchTap}
          />
          <ReactCSSTransitionGroup
            transitionName="NavigationMenu"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={250}
          >
            { menu }
          </ReactCSSTransitionGroup>
        </div>
        <div className="Header__logo--mobile hidden-sm hidden-md hidden-lg">
          <a href="/">
            <img src={ logoImage } alt="Pilates Lovers" className="pl-logo-img"/>
          </a>
          <hr/>
        </div>
      </div>
    );
  }
}

export default Header;
