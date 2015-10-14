import React from 'react';
import Category from './Category';
import './style.less';

class CategoryList extends React.Component {
  render() {
    let children = this.props.category.children.map((category) => {
      return (
        <Category {...category}
                  key={category.name}
                  closeSidePanel={this.props.closeSidePanel} />
      );
    });

    return (
      <nav className="CategoryList" role="navigation">
        <ul className="list">
          { children }
        </ul>
      </nav>
    );
  }
}

export default CategoryList;

