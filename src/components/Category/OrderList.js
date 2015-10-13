import React from 'react';
//import OrderOption from 'components/Category/OrderOption';
import './OrderList.less';
import './OrderOption.less';

let selection = true;
let selectionChecked;

if (selection = true) {
  selectionChecked = 'checked'
};

class OrderList extends React.Component {
  render() {
    return (
      <ul className="OrderList">
        {/* <OrderOption/> */}
        <li className="OrderOption" data-is-selected={true} checked={selectionChecked}>
          <label className="order-label">
            <span className="order-copy">Relevância</span>
            <input className="order-radio" type="radio" name="order-selection"/>
          </label>
        </li>
        <li className="OrderOption" data-is-selected={false} checked={selectionChecked}>
          <label className="order-label">
          <span className="order-copy">Mais vendidos</span>
            <input className="order-radio" type="radio" name="order-selection"/>
          </label>
        </li>
        <li className="OrderOption" data-is-selected={false} checked={selectionChecked}>
          <label className="order-label">
          <span className="order-copy">Menor preço</span>
            <input className="order-radio" type="radio" name="order-selection"/>
          </label>
        </li>
        <li className="OrderOption" data-is-selected={false} checked={selectionChecked}>
          <label className="order-label">
          <span className="order-copy">Maior preço</span>
            <input className="order-radio" type="radio" name="order-selection"/>
          </label>
        </li>
      </ul>

    );
  }
}

export default OrderList;
