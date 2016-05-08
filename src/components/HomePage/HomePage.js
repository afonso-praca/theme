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
          <div className="pl-shelf-section">
            <h2>
              <span className="pl-shelf-title">Camisetas</span>
              <a className="pl-shelf-detail" href="/camisetas/c">Ver todos</a>
            </h2>
          </div>
          <div className="HomePage__shelfarea">
            <Placeholder id="shelf-camisetas"/>
          </div>
          <div className="pl-shelf-section">
            <h2>
              <span className="pl-shelf-title">Sapatilhas de Pilates</span>
              <a className="pl-shelf-detail" href="/sapatilhas-de-pilates/c">Ver todos</a>
            </h2>
          </div>
          <div className="HomePage__shelfarea">
            <Placeholder id="shelf-sapatilhas"/>
          </div>
          <div className="pl-shelf-section">
            <h2>
              <span className="pl-shelf-title">Meias de Pilates</span>
              <a className="pl-shelf-detail" href="/meias-de-pilates/c">Ver todos</a>
            </h2>
          </div>
          <div className="HomePage__shelfarea">
            <Placeholder id="shelf-meias"/>
          </div>
          <div className="pl-shelf-section">
            <h2>
              <span className="pl-shelf-title">Infantil</span>
              <a className="pl-shelf-detail" href="/infantil/c">Ver todos</a>
            </h2>
          </div>
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
