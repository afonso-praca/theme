import React from 'react';
import './ProductPage.less';
import Product from 'components/Product/Product';
import ProductNotFound from './ProductNotFound/ProductNotFound.js';

class ProductPage extends React.Component {
  render() {
    return (
      <div className="ProductPage">
        <div className="ProductPage__wrapper container-fluid">
          {this.props.loading ? <ProductNotFound/> : <Product {...this.props.product}/>}
        </div>
      </div>
    );
  }
}

export default ProductPage;
