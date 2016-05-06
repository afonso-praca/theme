import React from 'react';
import './ProductPage.less';
import Product from 'components/Product/Product';
import PageNotFound from 'components/PageNotFound/PageNotFound';

class ProductPage extends React.Component {
  render() {
    return (
      <div className="ProductPage">
        <div className="ProductPage__wrapper container-fluid">
          {
            this.props.loading ?
              <PageNotFound message="Nenhum produto encontrado" /> :
              <Product {...this.props.product} />
          }
        </div>
      </div>
    );
  }
}

export default ProductPage;
