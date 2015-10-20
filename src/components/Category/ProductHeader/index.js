import React from 'react';
import './style.less';
//import CategoryButton from './CategoryButton';
//import OrderButton from './OrderButton';
import FilterButton from './FilterButton';
import SVGIcon from 'utils/SVGIcon';
import listIcon from 'assets/icons/list_icon.svg';
import listImg from 'assets/icons/list_icon.png';
import gridIcon from 'assets/icons/grid_icon.svg';
import gridImg from 'assets/icons/grid_icon.png';
import downArrowIcon from 'assets/icons/down-arrow_icon.svg';
import downArrowImg from 'assets/icons/down-arrow_icon.png';

class ProductHeader extends React.Component {
  render() {
    let iconColor = '#014673';
    let icon = {
      svg: this.props.grid ? listIcon : gridIcon,
      img: this.props.grid ? listImg : gridImg
    };

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
              <button className="col-xs-2 gridButton" onClick={this.props.changeExibitionMode}>
                <SVGIcon className="icon"
                           svg={icon.svg}
                           fallback={icon.img} width={18}
                           cleanupExceptions={['width', 'height']}
                           fill={iconColor} />
              </button>
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
