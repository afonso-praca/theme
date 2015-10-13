import React from 'react';
import './style.less';
import { Link } from 'react-router';
import SubCategoryListButton from './SubCategoryListButton';

class SubCategoryList extends React.Component {
  render() {
    let children = this.props.children;
    let categories = this.props.categories;
    let slug = this.props.slug;
    let closeSidePanel = this.props.closeSidePanel;

    if (children.length === 0) {
      return null;
    }

    return (
      <ul className="SubCategoryList row" data-is-open="true">
        {
          children.map(function(result) {
            return (
              <li key={result.name} className="sublist-item">
                <Link className="sublist-link"
                      onClick={closeSidePanel}
                      to="category"
                      params={{splat: categories + '/' + slug + '/' + result.slug}}>
                  { result.name }
                  <SubCategoryListButton/>
                </Link>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

export default SubCategoryList;

