import React from 'react';
import './ProductNotFound.less';
import SVGIcon from 'utils/SVGIcon/SVGIcon.js';
import productNotFoundIcon from 'assets/icons/productNotFound_icon.svg';
import productNotFoundImg from 'assets/icons/productNotFound_icon.png';

class ProductNotFound extends React.Component {

  render() {
    return (
      <div className="ProductNotFound">
        <div className="ProductNotFound__inner">
          <SVGIcon className="ProductNotFound__icon" svg={productNotFoundIcon} fallback={productNotFoundImg} />
          <h1 className="ProductNotFound__text">Nenhum produto encontrado</h1>
        </div>
      </div>
    );
  }
}

export default ProductNotFound;
