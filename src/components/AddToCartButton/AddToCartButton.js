import React from 'react';
import { stores, actions } from 'sdk';
import { editable } from 'vtex-editor';
import './AddToCartButton.less';

@editable({
  name: 'AddToCartButton@pilateslovers.pilateslovers-theme',
  title: 'Adicionar ao Carrinho'
})
class AddToCartButton extends React.Component {
  static defaultProps = {
    quantity: 1,
    seller: '1'
  }

  componentWillMount() {
    const orderForm = stores.CartStore.getState().get('orderForm');
    const orderFormId = orderForm.orderFormId ? orderForm.orderFormId : '';
    const orderFormItems = orderForm.items ? orderForm.items : [];

    this.setState({
      orderFormId: orderFormId,
      orderFormItems: orderFormItems
    });
    stores.CartStore.listen(this.onChange);
  }

  componentWillUnmount() {
    stores.CartStore.unlisten(this.onChange);
  }

  onChange = (CartStore) => {
    this.setState({
      orderFormId: CartStore.get('orderForm').orderFormId ? CartStore.get('orderForm').orderFormId : '',
      orderFormItems: CartStore.get('orderForm').items ? CartStore.get('orderForm').items : []
    });
  }

  handleClick = () => {
    let product = {
      id: this.props.skuId,
      quantity: this.props.quantity,
      seller: this.props.seller
    };
    actions.CartActions.addToCart(this.state.orderFormId, [product]);
  }

  checkItemInCart = () => {
    return this.state.orderFormItems.find((element) => {
      if ((element.id) === this.props.skuId) {
        return true;
      }
    });
  }

  render() {
    let label = 'Adicionar ao carrinho';
    let color = '#703693';
    let boxShadowColor = '#737373';

    if (this.props.settings) {
      label = this.props.settings.get('label');
      color = this.props.settings.get('color');
      boxShadowColor = this.props.settings.get('boxShadowColor');
    }

    let labelAdded = 'Ir para o carrinho';

    if (this.checkItemInCart()) {
      return (
        <button
          className={`${this.props.className} AddToCartButton__inner add-btn`}
          style={{backgroundColor: color, boxShadow: `2px 2px 0px 0px ${boxShadowColor}`}}
          onClick={() => location.replace('/checkout')}
        >
          <span className="AddToCartButton__inner AddToCartButton__text">{labelAdded}</span>
        </button>
      )
    }

    return (
      <button className={`${this.props.className} add-btn AddToCartButton__text`}
              style={{backgroundColor: color, boxShadow: `2px 2px 0px 0px ${boxShadowColor}`}}
              onClick={this.handleClick}
              disabled={!this.props.skuId}
      >
        <div className="AddToCartButton__inner">
          <div className="hidden-md hidden-lg">
            <a href="/checkout">
            {label}
            </a>
          </div>
          <div className="hidden-xs hidden-sm">
          {label}
          </div>
        </div>
      </button>
    );
  }


}

export default AddToCartButton;
