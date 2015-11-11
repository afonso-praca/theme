import React from 'react';
import './style.less';
import OrderPanel from './OrderPanel';
import SVGIcon from 'utils/SVGIcon';
import orderIcon from 'assets/icons/order_icon.svg';
import orderImg from 'assets/icons/order_icon.png';

class OrderButton extends React.Component {
  state = {
    orderPanelOpen: false,
    currentView: 'navigation'
  }

  openOrderPanel = () => {
    this.setState({orderPanelOpen: true});
  }

  closeOrderPanel = (ev) => {
    if (ev.currentTarget === ev.target) {
      this.setState({orderPanelOpen: false});
    }
  }

  render() {
    let iconColor = '#777777';
    let isOrderPanelOpen = this.state.orderPanelOpen;

    return (
      <div className="OrderButton">
        <a onTouchTap={this.openOrderPanel}>
          <SVGIcon className="icon" svg={orderIcon}
                   fallback={orderImg} height={24}
                   padding="4px" fill={iconColor} />
        </a>
        <OrderPanel categories={this.props.categories}
                    facets={this.props.facets}
                    isOpen={isOrderPanelOpen}
                    closeOrderPanel={this.closeOrderPanel} />
      </div>
    );
  }
}

export default OrderButton;
