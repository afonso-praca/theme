import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { stores } from 'sdk';
import HeaderTop from './HeaderTop';
import HeaderCart from './HeaderCart/HeaderCart';
import HeaderMenuToggle from './HeaderMenuToggle/HeaderMenuToggle';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderSearchComponent from './HeaderSearchComponent/HeaderSearchComponent';
import './style.less';
import 'utils/base/custom-theme.less';
import './HeaderCustom.less';

const Placeholder = stores.ComponentStore.state.getIn(['Placeholder@vtex.storefront-sdk', 'constructor']);

class Header extends React.Component {
  state = {
    isMenuOpen: false
  }

  handleMenuTap = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
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
        <div className="Header__inner clearfix row">
          <div className="col-xs-1 col-sm-1 hidden-md hidden-lg">
            <HeaderMenuToggle handleMenuTap={this.handleMenuTap} />
          </div>

          <div className="hidden-xs col-sm-4 col-md-4 col-lg-3">
            <HeaderLogo/>
          </div>

          <div className="col-sm-1 col-md-2 col-lg-2 pull-right">
            <div className="hidden-md hidden-lg">
              <HeaderCart />
            </div>
            <div className="hidden-xs hidden-sm">
              <Placeholder id="minicart" isRemoveVisible={true} />
            </div>
          </div>

          <div className="col-md-4 col-lg-4 pull-right header-search-collumn">
            <HeaderSearchComponent />
          </div>

          <ReactCSSTransitionGroup
            transitionName="NavigationMenu"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={250}
          >
            { menu }
          </ReactCSSTransitionGroup>
        </div>

        <div className="hidden-sm hidden-md hidden-lg">
          <HeaderLogo isMobile={true} />
        </div>
        <hr className="Header__hr hidden-md hidden-lg"/>
        <div className="Header__nav-desktop hidden-sm">
          <div className="Header__nav-desktop-inner">
            <Placeholder id="nav-menu-desktop" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
