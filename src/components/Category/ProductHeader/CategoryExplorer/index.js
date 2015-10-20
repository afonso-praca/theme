import React from 'react';
import './style.less';
import SVGIcon from 'utils/SVGIcon';
import downArrowIcon from 'assets/icons/down-arrow_icon.svg';
import downArrowImg from 'assets/icons/down-arrow_icon.png';

class CategoryExplorer extends React.Component {
  render() {
    return (
      <button className="CategoryExplorer">
        <SVGIcon className="icon"
                   svg={downArrowIcon}
                   fallback={downArrowImg} width={18}
                   cleanupExceptions={['width', 'height']}
                   fill='#777777' />
      </button>
    );
  }
}

export default CategoryExplorer;
