import React from 'react';
import './style.less';
import PanelNav from 'components/Category/common/PanelNav';

class ExplorerPanel extends React.Component {
  render() {
    let isOpen = this.props.isOpen;

    return (
      <aside className="ExplorerPanel" data-is-open={isOpen}>
        <div className="frame">
          <PanelNav closePanel={this.props.closeExplorerPanel} navType='xbar' />
          <div className="content">
            <h3 className="header container">Ordenação</h3>
          </div>
        </div>
      </aside>
    );
  }
}

export default ExplorerPanel;
