import React from 'react';
import './style.less';
import PanelNav from 'components/Category/common/PanelNav';
import OrderList from './OrderList';

class ExplorerPanel extends React.Component {
  render() {
    let isOpen = this.props.isOpen;

    return (
      <aside className="ExplorerPanel" data-is-open={isOpen}>
        <PanelNav closePanel={this.props.closeExplorerPanel} navType='xbar' />
        <div className="ExplorerPanel-header clearfix container">
          <h1 className="ExplorerPanel-title">Blusas</h1>
          <span className="ExplorerPanel-subtitle">Subcategorias</span>
        </div>
        <OrderList />
        <ul className="ExplorerPanel-subcategory-list">
          <li>a</li>
          <li>b</li>
          <li>c</li>
        </ul>
      </aside>
    );
  }
}

export default ExplorerPanel;
