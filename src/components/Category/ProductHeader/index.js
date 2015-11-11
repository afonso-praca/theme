import React from 'react';
import './style.less';
import FilterButton from './FilterButton';
import ExibitionButton from './ExibitionButton';

class ProductHeader extends React.Component {
  render() {

    let resultNumber = 25;
    return (
      <nav className="ProductHeader container">
        <div className="ProductHeader-header-container">
          <div className="row ProductHeader-content">
            <div className="col-xs-12">
              <span className="ProductHeader-results">
                {resultNumber} resultados para:
              </span>
            </div>
            <h2 className="ProductHeader-search-title">
              { this.props.category.get('name') }
            </h2>
          </div>
          <div className="row">
            <div className="ProductHeader-buttons">
              <FilterButton className="col-xs-10" />
              <ExibitionButton className="col-xs-2" changeExibitionMode={this.props.changeExibitionMode} />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default ProductHeader;
