import React from 'react';
import Category from './Category';
import './style.less';

class CategoryList extends React.Component {
  render() {
    let children = this.props.category.get('children').map((category) => {
      return (
        <Category key={category.get('name')}
                  category={category}
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

