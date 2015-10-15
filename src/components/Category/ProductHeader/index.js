import React from 'react';
import './style.less';
import CategoryButton from './CategoryButton';
import OrderButton from './OrderButton';
import FilterButton from './FilterButton';
import SVGIcon from 'utils/SVGIcon';
import listIcon from 'assets/icons/list_icon.svg';
import listImg from 'assets/icons/list_icon.png';
import gridIcon from 'assets/icons/grid_icon.svg';
import gridImg from 'assets/icons/grid_icon.png';

class ProductHeader extends React.Component {
  render() {
    let iconColor = '#777777';
    let icon = {
      svg: this.props.grid ? listIcon : gridIcon,
      img: this.props.grid ? listImg : gridImg
    };

    return (
      <nav className="ProductHeader container">
        <div className="header-container">
          <div className="row">
            <div className="col-xs-12">
              <h1 className="header-title">
                { this.props.category.name }
              </h1>
            </div>
            <div className="col-xs-12">
              <span className="header-results">
                25 Resultados
              </span>
            </div>
          </div>
          <div className="row">
            <div className="header-buttons col-xs-12">
              <div onClick={this.props.changeExibitionMode} className="icon-wrapper">
                <div>
                  <SVGIcon className="icon" svg={icon.svg}
                           fallback={icon.img} width={24}
                           cleanupExceptions={['width', 'height']}
                           fill={iconColor} />
                </div>
              </div>
              <div className="icon-wrapper">
                <CategoryButton category={this.props.category}
                                facets={this.props.facets} />
              </div>
              <div className="icon-wrapper">
                <OrderButton categories={this.props.category}
                             facets={this.props.facets} />
              </div>
              <div className="icon-wrapper">
                <FilterButton categories={this.props.category} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default ProductHeader;
