import React from 'react';
import './CategoryPage.less';
import { stores, connectToStores } from 'sdk';
import CategoryHeader from './CategoryHeader/CategoryHeader';
import FilterListSidebar from 'components/FilterListSidebar/FilterListSidebar';
import PageNotFound from 'components/PageNotFound/PageNotFound';

const Placeholder = stores.ComponentStore.state.getIn(['Placeholder@vtex.storefront-sdk', 'constructor']);

@connectToStores()
class CategoryPage extends React.Component {
  state = {
    grid: true
  }

  static getStores() {
    return [
      stores.ContextStore,
      stores.FacetsStore
    ];
  }

  static getPropsFromStores(props) {
    const location = stores.ContextStore.getState().get('location');
    const path = location.pathname + location.search;
    const facets = stores.FacetsStore.getState().getIn([path, props.id]);
    const brands = facets ? facets.getIn(['filters', 'brand']) : undefined;
    const category = facets ? facets.getIn(['filters', 'category']).first() : undefined;

    return {
      brands,
      category,
      location
    };
  }

  shouldComponentUpdate({ category }) {
    return category !== undefined;
  }


  changeLayout = () => {
    this.setState({ grid: !this.state.grid });
  }

  render() {
    if (!this.props.category) {
      return (
        <PageNotFound message="Nenhuma categoria encontrada" />
      );
    }

    const hasBrands = this.props.brands ?
      this.props.brands.count() > 0 : undefined;

    return (
      <div className="CategoryPage">
        <CategoryHeader
          category={this.props.category}
          grid={this.state.grid}
          location={this.props.location}
          changeLayout={this.changeLayout}
        />
        <div className="CategoryPage__content container-fluid">
          <div className="row">
            <div className="CategoryPage__sidebar hidden-xs hidden-sm col-md-3 col-lg-2">
              <div className="CategoryPage__category-list">
                <Placeholder
                  id="category-list-sidebar"
                />
              </div>
              {
                hasBrands ?
                  <div className="CategoryPage__filter-list">
                    <FilterListSidebar id={this.props.id} />
                  </div> : null
              }
            </div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-10 CategoryPage__product-list">
              <Placeholder
                id="product-list"
                location={this.props.location}
                grid={this.state.grid}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryPage;
