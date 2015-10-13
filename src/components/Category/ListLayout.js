import React from 'react';
import ListProduct from 'components/Category/ListProduct';
import './ListLayout.less';

class ListLayout extends React.Component {

  render() {
    let products = this.props.products;

    return (
      <div className="ListLayout container">
          {
            products ?
              products.map((product) =>
                (
                  <div key={product.slug} className="list-product-wrapper">
                    <ListProduct {...product}/>
                  <hr className="product-separator" />
                  </div>
                )
              ) :
              ( <div>Carregando</div> )
          }
      </div>
    );
  }
}

export default ListLayout;
