import React from 'react';
import './style.less';
import SVGIcon from 'utils/SVGIcon';
import frontArrowIcon from 'assets/icons/frontArrow_icon.svg';
import frontArrowImg from 'assets/icons/frontArrow_icon.png';

class CategoryOption extends React.Component {
  render() {

    let selection = true;
    let selectionChecked = selection ? 'checked' : null;

    let option = (
      <li className="CategoryOption" data-is-selected={true} checked={selectionChecked}>
        <button className="CategoryOption-button">
          <span className="CategoryOption-label">SubCategoria 1</span>
        <SVGIcon className="CategoryOption-icon"
                   svg={frontArrowIcon}
                   fallback={frontArrowImg} width={15}
                   cleanupExceptions={['width', 'height']}
                   fill='#5C6F7F' />
        </button>
      </li>
    );
    return (
      <div>
        {option}
        {option}
        {option}
      </div>
    );
  }
}

export default CategoryOption;
