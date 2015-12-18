import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { stores } from 'sdk';
import './Header.less';
import { Link } from 'react-router';
import SVGIcon from 'utils/SVGIcon';
import hamburgerIcon from 'assets/icons/hamburger.svg';
import searchIcon from 'assets/icons/search.svg';
import cartIcon from 'assets/icons/cart.svg';

const Area = stores.ComponentStore.state.getIn(['Area@vtex.storefront-sdk', 'constructor']);

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
        <Area
          id={`${this.props.areaPath}/navigation-menu`}
          key="NavigationMenu"
          toggleMenu={this.handleMenuTap}
        />
      ) : null;

    return (
      <div className="Header clearfix">
        <div className="col-xs-1">
          <SVGIcon
            className="Header__icon"
            onTouchTap={this.handleMenuTap}
            svg={hamburgerIcon}
            width={18}
            height={18}
            fill="#153243"
          />
        </div>

        <h1 className="Header__brand col-xs-8 col-xs-push-1">
          <Link to="/">Fera fashion</Link>
        </h1>

        <div className="col-xs-1">
          <SVGIcon className="Header__icon" svg={searchIcon} width={15} height={18} fill="#153243" onTouchTap={this.handleSearchTap}/>
        </div>

        <div className="col-xs-1">
          <SVGIcon className="Header__icon" svg={cartIcon} width={18} height={18} fill="#153243"/>
        </div>

        <Area id={`${this.props.areaPath}/search-bar`} visible={this.state.isSearchOpen} handleSearchTap={this.handleSearchTap}/>

        <ReactCSSTransitionGroup
          transitionName="NavigationMenu"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={250}
        >
          { menu }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Header;
