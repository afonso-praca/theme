import React from 'react';
import './style.less';
import LoadMore from './LoadMore';
//import NumberedPagination from './NumberedPagination';

class Pagination extends React.Component {
  render() {

    let renderedPagination = <LoadMore/>;

    return (
      <div>
        {renderedPagination}
      </div>
    );
  }
}

export default Pagination;
