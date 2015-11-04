import React from 'react';
import './style.less';
import CategoryOption from './CategoryOption';


class CategoryList extends React.Component {
  render() {

    return (
      <ul className="CategoryList">
        <CategoryOption />
      </ul>
    );
  }
}

export default CategoryList;
