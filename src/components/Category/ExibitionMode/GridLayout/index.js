import React from 'react';
import GridProduct from './GridProduct';
import './style.less';

class GridLayout extends React.Component {
  render() {
    let products = this.props.products;

    return (
      <div className="GridLayout row-fluid">
        {
          products ?
            products.map((product) =>
              (
                <div key={product.slug} className="grid-product-wrapper col-xs-6 col-sm-6">
                  <GridProduct {...product}/>
                </div>
              )
            ) :
            ( <div>Carregando</div> )
        }
      </div>
    );
  }
}

export default GridLayout;

