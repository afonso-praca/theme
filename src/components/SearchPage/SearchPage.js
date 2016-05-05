import React from 'react';
import { stores, connectToStores } from 'sdk';
import SearchHeader from './SearchHeader/SearchHeader';
import FilterListSidebar from 'components/FilterListSidebar/FilterListSidebar';
import './SearchPage.less';

const Placeholder = stores.ComponentStore.state.getIn(['Placeholder@vtex.storefront-sdk', 'constructor']);

@connectToStores()
class SearchPage extends React.Component {
  state = {
    grid: true
  }

  changeLayout = () => {
    this.setState({ grid: !this.state.grid });
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
    const productSearch = stores.SearchStore.getState().getIn([path]);
    const results = productSearch ? productSearch.first().getIn(['results']) : undefined;
    const productQuantity = results? results.length : 0;

    return {
      location,
      brands,
      productQuantity
    };
  }

  render() {
    const hasBrands = this.props.brands ?
      this.props.brands.count() > 0 : undefined;
    const zeroProducts = (this.props.productQuantity === 0) ? true : false;
    const sidebarClasses = zeroProducts ?
    'col-xs-12 col-sm-12 col-md-12 col-lg-12 SearchPage__no-products' :
    'col-xs-12 col-sm-12 col-md-9 col-lg-10 SearchPage__product-list';

    return (
      <div className="SearchPage">
        <SearchHeader
          searchTerm={this.props.params.searchTerm}
          grid={this.state.grid}
          location={this.props.location}
          changeLayout={this.changeLayout}
          productQuantity={this.props.productQuantity}
        />
        <div className="SearchPage__content container-fluid">
          <div className="row">
          {
            zeroProducts ?
              null :
              <div className="SearchPage__sidebar hidden-xs hidden-sm col-md-3 col-lg-2">
                {
                  hasBrands ?
                    <div className="SearchPage__filter-list">
                      <FilterListSidebar
                        id={this.props.id}
                        location={this.props.location}
                      />
                    </div> : null
                }
              </div>
          }
            <div className={sidebarClasses}>
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

export default SearchPage;
