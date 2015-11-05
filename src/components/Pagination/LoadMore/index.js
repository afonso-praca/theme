import React from 'react';
import './style.less';

class LoadMore extends React.Component {
  render() {
    return (
      <div className="container">
        <button className="LoadMore">
          <span>Ver mais</span>
        </button>
      </div>
    );
  }
}

export default LoadMore;
