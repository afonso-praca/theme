import React from 'react';
import { stores, utils } from 'sdk';
import GridLayout from './GridLayout';
import ListLayout from './ListLayout';

@utils.connectToStores()
class ExibitionMode extends React.Component {
  static getStores() {
    return [
      stores.SearchStore,
      stores.ProductStore
    ];
  }

  static getPropsFromStores() {
    return {
      SearchStore: stores.SearchStore.getState(),
      ProductStore: stores.ProductStore.getState()
    };
  }

  render() {
    let path = window.location.pathname;
    let productsIds = this.props.SearchStore.getIn([path, 'results']);
    let products = stores.ProductStore.getProducts(productsIds);
    let layout = this.props.grid ?
      ( <GridLayout products={products} /> ) :
      ( <ListLayout products={products} /> );

    return layout;
  }
}

export default ExibitionMode;

