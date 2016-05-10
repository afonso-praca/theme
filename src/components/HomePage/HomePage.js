import React from 'react';
import { stores } from 'sdk';
import './HomePage.less';
import Policies from 'components/Policies/Policies';

const Placeholder = stores.ComponentStore.state.getIn(['Placeholder@vtex.storefront-sdk', 'constructor']);

class HomePage extends React.Component {
  render() {
    return (
      <div className="HomePage">
        <div className="HomePage__wrapper">
          <div className="HomePage__bannerarea">
            <Placeholder id="banner"/>
          </div>
          <div className="HomePage__shelfarea">
            <Placeholder id="shelf-camisetas"/>
          </div>
          <hr className="pl-shelf-separator"/>
          <div className="HomePage__shelfarea">
            <Placeholder id="shelf-sapatilhas"/>
          </div>
          <hr className="pl-shelf-separator"/>
          <div className="HomePage__shelfarea">
            <Placeholder id="shelf-meias"/>
          </div>
          <hr className="pl-shelf-separator"/>
          <div className="HomePage__shelfarea">
            <Placeholder id="shelf-infantil"/>
          </div>
        </div>
        <Policies />
      </div>
    );
  }
}

export default HomePage;
