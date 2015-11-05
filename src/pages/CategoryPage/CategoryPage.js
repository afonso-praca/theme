import React from 'react';
import { stores, actions, utils } from 'sdk';
import { History } from 'react-router';
import ExibitionMode from 'react-proxy?name=ExibitionMode!components/Category/ExibitionMode';
import ProductHeader from 'components/Category/ProductHeader';
import Pagination from 'components/Pagination';
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
      stores.ResourceStore
    ];
  }

  static getPropsFromStores() {
    return {
      facets: stores.FacetsStore.getState()
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
    let category = this.props.facets.getIn([path, 'filters', 'category']).first();

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
        <Pagination />
      </div>
    );
  }
}

export default CategoryPage;
