import React from 'react';
import './style.less';
//import CategoryButton from './CategoryButton';
//import OrderButton from './OrderButton';
import FilterButton from './FilterButton';
import ExibitionButton from './ExibitionButton';

class ProductHeader extends React.Component {
  render() {

    let resultNumber = 25;
    return (
      <nav className="ProductHeader container">
        <div className="header-container">
          <div className="row header-content">
            <div className="categoryTitle">
              <h2 className="header-title">
                { this.props.category.get('name') }
              </h2>
            </div>
            <div className="col-xs-12">
              <span className="header-results">
                Sua busca trouxe {resultNumber} resultados
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
