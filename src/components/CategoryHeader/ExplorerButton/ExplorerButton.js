import React from 'react';
import './ExplorerButton.less';
import SVGIcon from 'utils/SVGIcon';
import downArrowIcon from 'assets/icons/down-arrow_icon.svg';
import downArrowImg from 'assets/icons/down-arrow_icon.png';

class ExplorerButton extends React.Component {
  handleClick = () => {
    this.props.openExplorerPanel();
  }

  render() {
    return (
      <button className="ExplorerButton" onClick={this.handleClick}>
        <SVGIcon
          className="ExplorerButton__icon"
          svg={downArrowIcon}
          fallback={downArrowImg}
          width={18}
          cleanupExceptions={['width', 'height']}
          fill='#777777'
        />
      </button>
    );
  }
}

export default ExplorerButton;
