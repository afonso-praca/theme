import React from 'react';
import './style.less';
import PanelNav from 'components/Category/common/PanelNav';
import FilterList from './FilterList';
import OrderList from './OrderList';

class FilterPanel extends React.Component {
  render() {
    let isOpen = this.props.isOpen;

    return (
      <aside className="FilterPanel" data-is-open={isOpen}>
        <div className="frame">
          <PanelNav closePanel={this.props.closeFilterPanel} navType='button' />
          <div className="content">
            <h3 className="header container">Ordenação</h3>
              <OrderList />
            <h1 className="header container">Filtros</h1>
            <FilterList />
          </div>
        </div>
      </aside>
    );
  }
}

export default FilterPanel;
