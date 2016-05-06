import React from 'react';
import './ExplorerPanel.less';
import { stores } from 'sdk';
import CategoryList from 'components/CategoryList/CategoryList';
import pullArrowIcon from 'assets/icons/pullArrow_icon.svg';
import pullArrowImg from 'assets/icons/pullArrow_icon.png';

const SVGIcon = stores.ComponentStore.state.getIn(['SVGIcon@pilateslovers.pilateslovers-theme', 'constructor']);

class ExplorerPanel extends React.Component {
  handleTouchTap = () => {
    this.props.closeExplorerPanel();
  }

  componentDidMount() {
    this.previousOverflow = document.body.style.overflowY;
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflowY = this.previousOverflow;
  }

  render() {
    return (
      <aside className="ExplorerPanel" data-is-open={this.props.isOpen}>
        <div className="ExplorerPanel__content clearfix">
          <div className="ExplorerPanel__header clearfix container">
            <h1 className="ExplorerPanel__title">
              { this.props.category.get('name') }
            </h1>
            <span className="ExplorerPanel__subtitle">Subcategorias</span>
          </div>
          <CategoryList
            categories={this.props.category.get('children') }
            parentSlug={this.props.category.get('slug')}
            closeExplorerPanel={this.props.closeExplorerPanel}
          />
          <button
            className="ExplorerPanel__pull-button col-xs-2 col-xs-push-5"
            onClick={this.handleTouchTap}
          >
            <SVGIcon
              className="CategoryOption-icon"
              svg={pullArrowIcon}
              fallback={pullArrowImg}
              width={30}
              cleanupExceptions={['width', 'height']}
              fill='#5C6F7F'
            />
          </button>
        </div>
        <div
          className="ExplorerPanel__click-overlay"
          onClick={this.handleClick}
        />
      </aside>
    );
  }
}

export default ExplorerPanel;
