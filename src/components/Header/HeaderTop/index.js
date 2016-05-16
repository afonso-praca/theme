import React from 'react';
import './style.less';
import { stores } from 'sdk';
import facebookIcon from 'assets/icons/facebook_icon.svg';
import facebookImg from 'assets/icons/facebook_icon.png';
import instagramIcon from 'assets/icons/instagram_icon.svg';
import instagramImg from 'assets/icons/instagram_icon.png';

const Link = stores.ComponentStore.getState().getIn(['Link@vtex.storefront-sdk', 'constructor']);
const Placeholder = stores.ComponentStore.state.getIn(['Placeholder@vtex.storefront-sdk', 'constructor']);
const SVGIcon = stores.ComponentStore.getState().getIn(['SVGIcon@pilateslovers.pilateslovers-theme', 'constructor']);

class HeaderTop extends React.Component {

  render() {

    return (
      <div className="HeaderTop clearfix">
        <div className="HeaderTop__wrap">
          <div className="col-md-2 col-lg-2 col-sm-2 hidden-xs HeaderTop__social">
            <button className="HeaderTop__button">
              <a href="https://www.facebook.com/LojaPilatesLovers/">
                <SVGIcon className="HeaderTop__icon" svg={facebookIcon} fallback={facebookImg} height={15} />
              </a>
            </button>
            <button className="HeaderTop__button">
              <a href="https://www.instagram.com/lojapilateslovers/">
                <SVGIcon className="HeaderTop__icon" svg={instagramIcon} fallback={instagramImg} height={15} />
              </a>
            </button>
          </div>
          <div className="HeaderTop__contact col-md-10 col-lg-10 col-xs-12 col-sm-10">
            <div className="HeaderTop__login pull-right">
              <Placeholder id="login" />
            </div>
            <div className="HeaderTop__login pull-right">
              <span><Link className="HeaderTop__login-link" to={`/my-orders`}>Meus Pedidos</Link></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderTop;
