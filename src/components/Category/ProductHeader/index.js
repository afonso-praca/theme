import React from 'react';
import './style.less';
//import CategoryButton from './CategoryButton';
//import OrderButton from './OrderButton';
import FilterButton from './FilterButton';
import ExibitionButton from './ExibitionButton';
import SVGIcon from 'utils/SVGIcon';
import downArrowIcon from 'assets/icons/down-arrow_icon.svg';
import downArrowImg from 'assets/icons/down-arrow_icon.png';

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
              <button className="categoryArrow">
                <SVGIcon className="icon"
                           svg={downArrowIcon}
                           fallback={downArrowImg} width={18}
                           cleanupExceptions={['width', 'height']}
                           fill='#777777' />
              </button>
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
              <ExibitionButton className="col-xs-2" onClick={this.props.changeExibitionMode} />
              {/* <CategoryButton category={this.props.category} /> */}
              {/* <OrderButton /> */}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default ProductHeader;
