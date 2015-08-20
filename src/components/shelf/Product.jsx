import React from 'react';
import 'styles/components/shelf/Product.less';
import { Link } from 'react-router';
import Img from 'components/utils/Img';
import Price from 'components/utils/Price';

class Product extends React.Component {
  render() {
    let display = this.props.isVisible ? 'block' : 'none';
    let defaultSku = this.props.skus[0];
    let name = this.props.name;
    let imageUrl = defaultSku.images[0].src;
    let price = defaultSku.offers[0].price;

    return (
      <div className="v-shelf__product" style={{display: display}}>
        <Img className="v-shelf__product-photo" src={imageUrl} width={200} height={235}/>
        <Link to="product" params={{slug: this.props.slug}} className="v-shelf__product-title">{name}</Link>
        <p className="v-shelf__product-price">
          <Price value={price}/>
        </p>
        <button className="v-shelf__product-btn btn">
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

export default Product;
