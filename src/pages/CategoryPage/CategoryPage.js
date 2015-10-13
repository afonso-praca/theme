import React from 'react';
import { stores, actions, utils } from 'sdk';
import { History } from 'react-router';
import ExibitionMode from 'components/Category/ExibitionMode';
import ProductHeader from 'components/Category/ProductHeader';
import Header from 'components/Header/Header';
import { extend } from 'lodash-compat/object';

@utils.connectToStores()
class CategoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: false
    };
  }

  static contextTypes = History.contextTypes

  static getStores() {
    return [
      stores.SearchStore,
      stores.ProductStore,
      stores.FacetsStore
    ];
  }

  static getPropsFromStores() {
    return {
      SearchStore: stores.SearchStore.getState(),
      ProductStore: stores.ProductStore.getState(),
      FacetsStore: stores.FacetsStore.getState()
    };
  }

  changeExibitionMode = () => {
    this.setState({ grid: !this.state.grid});
  }

  static willTransitionTo = (transition, params, query) => {
    let currentURL = transition.path;
    let extParams =  extend(params, { 'query.brand': query.brand });

    if (!stores.ResourceStore.getState().get(currentURL)) {
      actions.ResourceActions.getRouteResources(currentURL, 'category', extParams);
    }
  }

  shouldComponentUpdate = () => {
    let currentURL = (window.location.pathname + window.location.search);

    return this.props.SearchStore.getIn([currentURL, 'results']) ? true : false;
  }

  render() {
    let currentURL = (window.location.pathname + window.location.search);
    let productsIds = this.props.SearchStore.getIn([currentURL, 'results']);
    let products = stores.ProductStore.getProducts(productsIds);
    let category = this.props.params.splat;
    let categoryLevel = category.split('/').length;
    let categories = products ? products[0].categories : [];

    if (categories[categoryLevel - 1].slug != category) {
      return (
        <div>
          <h1>Redirect para busca!</h1>
        </div>
      );
    }

    return (
      <div>
        <Header />
        <ProductHeader categories={category}
                       facets={this.props.FacetsStore}
                       grid={this.state.grid}
                       changeExibitionMode={this.changeExibitionMode} />
        <ExibitionMode grid={this.state.grid} products={products}/>
      </div>
    );
  }
}

export default CategoryPage;

