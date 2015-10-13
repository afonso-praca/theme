import React from 'react';
import './OrderPanel.less';
import PanelNav from 'components/Category/PanelNav';
import OrderList from 'components/Category/OrderList';


class OrderPanel extends React.Component {
    render() {
      let isOpen = this.props.isOpen;

      return (
        <aside className="OrderPanel" data-is-open={isOpen}>
          <div className="frame">
          <PanelNav closePanel={this.props.closeOrderPanel} navType='bar'/>
            <div className="content">
              <h1 className="header container">Ordenar por</h1>
              <OrderList/>
            </div>
          </div>
        </aside>
      );
    }
}

export default OrderPanel;
