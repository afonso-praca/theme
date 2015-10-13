import React from 'react';
import './GridProduct.less';
import Price from 'utils/Price';

class GridProduct extends React.Component {
  render() {

    let defaultSku = this.props.skus[0];
    let name = this.props.name;
    let imageUrl = defaultSku.images[0].src.replace(/(#width#|#height#)/g, '80');
    let price = defaultSku.offers[0].price;

    let fakePrice = parseFloat(((price * 1.33) + (Math.floor(Math.random() * (75.38 - 8.95)) + 8.95)).toFixed(2));

    return (
      <div className="GridProduct">
        <div className="product-grid-item row-fluid clearfix">
          <img className="product-image" src={imageUrl} width={140} height={140}/>
          {/* TO-ISSUE -- Image sizes have to be made dynamic! */}
            <div className="row-fluid product-name-wrapper">
              <h4 className="product-name">{name}</h4>
              <div className="product-price-from">
                <span>de</span> <span className="product-price-strike"><Price value={fakePrice}/></span>
              </div>
              <div className="product-price-by">
                <span>por</span> <span className="product-price"><Price value={price}/></span>
              </div>
            </div>
            <div className="row-fluid">
              <button className="product-button btn">Comprar</button>
            </div>
          </div>
      </div>
    );
  }
}

export default GridProduct;
