import React from 'react';
import { stores, actions, utils } from 'sdk';
import { History } from 'react-router';
import ExibitionMode from 'components/Category/ExibitionMode';
import ProductHeader from 'components/Category/ProductHeader';
import Header from 'components/Header/Header';
import { extend } from 'lodash-compat/object';

@utils.connectToStores()
class CategoryPage extends React.Component {
  state = {
    grid: false
  }

  static contextTypes = History.contextTypes

  static getStores() {
    return [
      stores.SearchStore,
      stores.ProductStore,
      stores.FacetsStore,
      stores.CategoryStore
    ];
  }

  static getPropsFromStores() {
    return {
      SearchStore: stores.SearchStore.getState(),
      ProductStore: stores.ProductStore.getState(),
      FacetsStore: stores.FacetsStore.getState(),
      CategoryStore: stores.CategoryStore.getState()
    };
  }

  changeExibitionMode = () => {
    this.setState({ grid: !this.state.grid });
  }

  static willTransitionTo = (transition, params, query) => {
    let currentURL = transition.path;
    let extParams =  extend(params, { 'query.brand': query.brand });

    if (!stores.ResourceStore.getState().get(currentURL)) {
      actions.ResourceActions.getRouteResources(currentURL, 'category', extParams);
    }
  }

  shouldComponentUpdate = () => {
    let currentURL = window.location.pathname;

    return this.props.SearchStore.getIn([currentURL, 'results']) ? true : false;
  }

  render() {
    let currentURL = window.location.pathname;
    let slugs = currentURL.split('/').slice(1, currentURL.split('/').length - 1);
    let productsIds = this.props.SearchStore.getIn([currentURL, 'results']);
    // let products = stores.ProductStore.getProducts(productsIds);
    let products = [];
    let category = stores.CategoryStore.getCategory(slugs);

    if (!category) {
      return (
        <div>
          <h1>Redirect para busca!</h1>
        </div>
      );
    }

    return (
      <div>
        <Header />
        <ProductHeader category={category}
                       facets={this.props.FacetsStore}
                       grid={this.state.grid}
                       changeExibitionMode={this.changeExibitionMode} />
        <ExibitionMode grid={this.state.grid} products={products} />
      </div>
    );
  }
}

export default CategoryPage;

