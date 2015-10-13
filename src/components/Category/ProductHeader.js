import React from 'react';
import './ProductHeader.less';
import CategoryButton from './CategoryButton';
import OrderButton from './OrderButton';
import FilterButton from './FilterButton';
import SVGIcon from 'utils/SVGIcon';
import listIcon from 'assets/icons/list_icon.svg';
import listImg from 'assets/icons/list_icon.png';
import gridIcon from 'assets/icons/grid_icon.svg';
import gridImg from 'assets/icons/grid_icon.png';

let iconColor = '#777777';

class ProductHeader extends React.Component {

  render() {
    let icon = this.props.grid
      ? <SVGIcon className="icon" svg={listIcon} fallback={listImg} cleanupExceptions={['width', 'height']} width={24}
        fill={iconColor}/>
      : <SVGIcon className="icon" svg={gridIcon} fallback={gridImg} cleanupExceptions={['width', 'height']} width={24}
        fill={iconColor}/>;

    return (
      <nav className="ProductHeader row-fluid">
        <div className="header-container">
          <div className="row">
            <div className="col-xs-12">
              <h1 className="header-title">Informática</h1>
            </div>
            <div className="col-xs-12">
              <span className="header-results ">25 Resultados</span>
            </div>
          </div>
          <div className="row">
            <div className="header-buttons col-xs-12">
              <div onClick={this.props.changeExibitionMode} className="icon-wrapper">
                <div>{icon}</div>
              </div>
              <div className="icon-wrapper">
                <CategoryButton categories={this.props.categories} facets={this.props.facets}/>
              </div>
              <div className="icon-wrapper">
                <OrderButton categories={this.props.categories} facets={this.props.facets}/>
              </div>
              <div className="icon-wrapper">
                <FilterButton categories={this.props.categories}/>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default ProductHeader;
