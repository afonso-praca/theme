import React from 'react';
import './style.less';
//import CategoryButton from './CategoryButton';
//import OrderButton from './OrderButton';
import FilterButton from './FilterButton';
import ExibitionButton from './ExibitionButton';

class ProductHeader extends React.Component {
  render() {
    return (
      <nav className="ProductHeader container">
        <div className="header-container">
          <div className="row header-content">
            <div className="categoryTitle">
              <h1 className="header-title">
                { this.props.category.get('name') }
              </h1>
            </div>
            <div className="col-xs-12">
              <span className="header-results">
                25 Resultados
              </span>
            </div>
          </div>
          <div className="row">
            <div className="header-buttons">
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
