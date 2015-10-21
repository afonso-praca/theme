import React from 'react';
import './style.less';
import ExplorerPanel from './ExplorerPanel';
import SVGIcon from 'utils/SVGIcon';
import downArrowIcon from 'assets/icons/down-arrow_icon.svg';
import downArrowImg from 'assets/icons/down-arrow_icon.png';

class ExplorerButton extends React.Component {
  state = {
    explorerPanelOpen: false,
    currentView: 'navigation'
  }

  openExplorerPanel = () => {
    this.setState({explorerPanelOpen: true});
  }

  closeExplorerPanel = (ev) => {
    if (ev.currentTarget === ev.target) {
      this.setState({explorerPanelOpen: false});
    }
  }

  render() {

    let isExplorerPanelOpen = this.state.explorerPanelOpen;

    return (
      <div>
        <button className="ExplorerButton" onTouchTap={this.openExplorerPanel}>
          <SVGIcon className="icon"
                     svg={downArrowIcon}
                     fallback={downArrowImg} width={18}
                     cleanupExceptions={['width', 'height']}
                     fill='#777777' />
        </button>
        <ExplorerPanel isOpen={isExplorerPanelOpen} closeExplorerPanel={this.closeExplorerPanel} />
     </div>
    );
  }
}

export default ExplorerButton;
