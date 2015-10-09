import React from 'react';
import { storefront } from 'sdk';
import './AddToCartButton.less';

@storefront({
  name: 'AddToCartButton@vtex.storefront-theme',
  title: 'Adicionar ao Carrinho',
  editable: true
})
class AddToCartButton extends React.Component {
  static defaultProps = {
    quantity: 1,
    seller: '1'
  }
  
  render() {
    let addUrl = `/checkout/cart/add?sku=${this.props.skuId}&qty=${this.props.quantity}&seller=${this.props.seller}&redirect=true&sc=1`;

    let label = 'Adicionar ao carrinho';
    let color = '#75CCB1';
    let boxShadowColor = '#57c1a0';

    if (this.props.settings) {
      label = this.props.settings.get('label');
      color = this.props.settings.get('color');
      boxShadowColor = this.props.settings.get('boxShadowColor');
    }

    return (
      <a href={addUrl} className ={this.props.classes} style={{backgroundColor: color, boxShadow: `2px 2px 0px 0px ${boxShadowColor}`}}>
        {label}
      </a>
    )
  }


}

export default AddToCartButton;
