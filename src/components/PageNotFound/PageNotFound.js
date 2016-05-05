import React from 'react';
import './PageNotFound.less';
import SVGIcon from 'utils/SVGIcon/SVGIcon.js';
import pageNotFoundIcon from 'assets/icons/pageNotFound_icon.svg';
import pageNotFoundImg from 'assets/icons/pageNotFound_icon.png';

class PageNotFound extends React.Component {
  render() {
    return (
      <div className="PageNotFound">
        <div className="PageNotFound__inner">
          <SVGIcon
            className="PageNotFound__icon"
            svg={pageNotFoundIcon}
            fallback={pageNotFoundImg}
          />
          <h1 className="PageNotFound__text">
            { this.props.message }
          </h1>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
