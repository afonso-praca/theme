import React from 'react';
import './style.less';
import PanelNav from 'components/Category/common/PanelNav';
import CategoryList from './CategoryList';
import SVGIcon from 'utils/SVGIcon';
import pullArrowIcon from 'assets/icons/pullArrow_icon.svg';
import pullArrowImg from 'assets/icons/pullArrow_icon.png';


class ExplorerPanel extends React.Component {
  render() {
    let isOpen = this.props.isOpen;

    return (
      <aside className="ExplorerPanel" data-is-open={isOpen}>
        <div className="ExplorerPanel-content clearfix">
          <PanelNav closePanel={this.props.closeExplorerPanel} navType='xbar' />
          <div className="ExplorerPanel-header clearfix container">
            <h1 className="ExplorerPanel-title">Blusas</h1>
            <span className="ExplorerPanel-subtitle">Subcategorias</span>
          </div>
          <CategoryList />
          <button className="ExplorerPanel-pull-button col-xs-2 col-xs-push-5">
            <SVGIcon className="CategoryOption-icon"
                       svg={pullArrowIcon}
                       fallback={pullArrowImg} width={30}
                       cleanupExceptions={['width', 'height']}
                       fill='#5C6F7F' />
          </button>
        </div>
      </aside>
    );
  }
}

export default ExplorerPanel;
