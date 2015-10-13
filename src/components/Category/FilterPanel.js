import React from 'react';
import './FilterPanel.less';
import PanelNav from 'components/Category/PanelNav';
import FilterList from 'components/Category/FilterList';


class FilterPanel extends React.Component {
    render() {
      let isOpen = this.props.isOpen;

      return (
        <aside className="FilterPanel" data-is-open={isOpen}>
          <div className="frame">
          <PanelNav closePanel={this.props.closeFilterPanel} navType='button'/>
            <div className="content">
              <h1 className="header container">Filtrar por</h1>
              <FilterList/>
            </div>
          </div>
        </aside>
      );
    }
}

export default FilterPanel;
