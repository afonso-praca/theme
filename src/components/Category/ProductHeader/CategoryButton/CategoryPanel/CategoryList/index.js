import React from 'react';
import Category from './Category';
import './style.less';

class CategoryList extends React.Component {
  getSubCategory(category, subCategory) {
    if(category.children) {
      return category;
    }

    let children = category.children.filter(function(c) {
      return c.slug === subCategory;
    });

    return children[0];
  }

  getCurrentCategory(category, currentURL, categories) {
    if(categories.length < 2) {
      return category;
    }

    categories.split('/').map(function(newCategory, i) {
      if (i != 0) {
        category = this.getSubCategory(category, newCategory);
      }
    });

    return category;
  }

  render() {
    let closeSidePanel = this.props.closeSidePanel;
    let currentURL = (window.location.pathname + window.location.search);
    let categories = this.props.categories;
    let currentCategory = this.getCurrentCategory(this.props.category, currentURL, categories);

    return (
      <nav className="CategoryList" role="navigation">
        <ul className="list">
          {
            currentCategory.children.map(function(category) {
              return (
                <Category {...category} key={category.name}
                          categories={categories}
                          closeSidePanel={closeSidePanel} />
              );
            })
          }
        </ul>
      </nav>
    );
  }
}

export default CategoryList;

