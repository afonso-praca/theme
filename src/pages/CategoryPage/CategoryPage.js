import React from 'react';
import { stores, actions, storefront, connectToStores } from 'sdk';
import { History } from 'react-router';
import ExibitionMode from 'components/Category/ExibitionMode';
import ProductHeader from 'components/Category/ProductHeader';
import Header from 'components/Header/Header';
// import Filter from 'components/Category/Filter';
import { extend } from 'lodash';

@storefront({
  name: 'CategoryPage@vtex.storefront-theme'
})
@connectToStores([
  stores.SearchStore,
  stores.ProductStore,
  stores.FacetsStore
])
class CategoryPage extends React.Component {
  static contextTypes = History.contextTypes

  constructor(props) {
    super(props);
    this.state = {grid: false}
  }

  changeExibitionMode = () => {
    this.setState({ grid: !this.state.grid});
  }

  static willTransitionTo = (transition, params, query) => {
     let currentURL = transition.path;
     if (!stores.ResourceStore.getState().get(currentURL)) {
        actions.ResourceActions.getRouteResources(currentURL, 'category',
          extend(params, { 'query.brand': query.brand }));
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
    if (categories[categoryLevel - 1].slug != category)
    {
      return (
        <div><h1>Redirect para busca!</h1></div>
      );
    }

    return (
      <div>
        <Header />
        <ProductHeader categories={category} facets={this.props.FacetsStore} grid={this.state.grid}
                       changeExibitionMode={this.changeExibitionMode} />
        <ExibitionMode grid={this.state.grid} products={products}/>
      </div>
    );
  }
}

export default CategoryPage;
