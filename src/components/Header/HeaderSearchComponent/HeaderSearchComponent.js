import React from 'react';
import { stores } from 'sdk';
import './HeaderSearchComponent.less';

const Placeholder = stores.ComponentStore.state.getIn(['Placeholder@vtex.storefront-sdk', 'constructor']);

class HeaderSearchComponent extends React.Component {
  render() {
    return (
      <div className="HeaderSearchComponent">
        <div className="HeaderSearchComponent__search-bar">
          <Placeholder id="search-bar" />
        </div>
      </div>
    );
  }
}

export default HeaderSearchComponent;
