import React from 'react';
import './style.less';
import { Link } from 'react-router';
import SubCategoryListButton from './SubCategoryListButton';

class SubCategoryList extends React.Component {
  render() {
    let children = this.props.categories.count() !== 0 ?
      this.props.categories.map((category) => {
        return (
          <li key={category.get('name')} className="sublist-item">
            <Link className="sublist-link"
                  onClick={this.props.closeSidePanel}
                  to="category">
              { category.get('name') }
              <SubCategoryListButton />
            </Link>
          </li>
        );
      }) : null;

    return (
      <ul className="SubCategoryList row" data-is-open="true">
        { children }
      </ul>
    );
  }
}

export default SubCategoryList;

