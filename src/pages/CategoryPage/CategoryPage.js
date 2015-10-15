import React from 'react';
import { stores, actions, utils } from 'sdk';
import { History } from 'react-router';
import ExibitionMode from 'react-proxy?name=ExibitionMode!components/Category/ExibitionMode';
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
      stores.FacetsStore,
      stores.CategoryStore
    ];
  }

  static getPropsFromStores() {
    return {
      FacetsStore: stores.FacetsStore.getState(),
      CategoryStore: stores.CategoryStore.getState()
    };
  }

  changeExibitionMode = () => {
    this.setState({ grid: !this.state.grid });
  }

  static willTransitionTo = (transition, params, query) => {
    let path = transition.path;
    let extParams =  extend(params, { 'query.brand': query.brand });

    if (!stores.ResourceStore.getState().get(path)) {
      actions.ResourceActions.getRouteResources(path, 'category', extParams);
    }
  }

  render() {
    let path = window.location.pathname;
    let slugs = path.split('/').slice(1, path.split('/').length - 1);
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
                       grid={this.state.grid}
                       changeExibitionMode={this.changeExibitionMode} />
        <ExibitionMode grid={this.state.grid} />
      </div>
    );
  }
}

export default CategoryPage;

