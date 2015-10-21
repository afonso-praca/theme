import React from 'react';
import './style.less';
import SVGIcon from 'utils/SVGIcon';
import listIcon from 'assets/icons/list_icon.svg';
import listImg from 'assets/icons/list_icon.png';
import gridIcon from 'assets/icons/grid_icon.svg';
import gridImg from 'assets/icons/grid_icon.png';

class ExibitionButton extends React.Component {
  handleTouchTap = () => {
    this.props.changeExibitionMode();
  }

  render() {
    let iconColor = '#014673';
    let icon = {
      svg: this.props.grid ? listIcon : gridIcon,
      img: this.props.grid ? listImg : gridImg
    };

    return (
      <button className="ExibitionButton" onTouchTap={this.handleTouchTap}>
        <SVGIcon className="icon"
                   svg={icon.svg}
                   fallback={icon.img} width={18}
                   cleanupExceptions={['width', 'height']}
                   fill={iconColor} />
      </button>
    );
  }
}

export default ExibitionButton;
