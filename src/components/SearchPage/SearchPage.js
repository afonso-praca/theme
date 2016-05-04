import React from 'react';
import { stores, connectToStores } from 'sdk';
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
    ];
  }

  static getPropsFromStores(props) {
    let path = props.location.pathname + props.location.search;
    let productSearch = stores.SearchStore.getState().getIn([path]);
    let results = productSearch ? productSearch.first().getIn(['results']) : undefined;
    let productQuantity = results? results.length : 0;

    return {
      productQuantity
    };
  }

  render() {
    let zeroProducts = (this.props.productQuantity === 0) ? true : false;

    let sidebarClasses = zeroProducts ?
    'col-xs-12 col-sm-12 col-md-12 col-lg-12 SearchPage__no-products' :
    'col-xs-12 col-sm-12 col-md-9 col-lg-10 SearchPage__product-list';

    return (
      <div className="SearchPage">
        <Placeholder
          id="search-header"
          searchTerm={this.props.params.searchTerm}
          grid={this.state.grid}
          location={this.props.location}
          changeLayout={this.changeLayout}
          productQuantity={this.props.productQuantity}
        />
        <div className="SearchPage__content container-fluid">
          <div className="row">
          {
            zeroProducts ? null :
            <div className="SearchPage__sidebar hidden-xs hidden-sm col-md-3 col-lg-2">
                <div className="SearchPage__filter-list">
                  <FilterListSidebar id={this.props.id} location={this.props.location} />
                </div>
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
