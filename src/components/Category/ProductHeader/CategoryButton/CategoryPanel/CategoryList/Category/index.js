import React from 'react';
import './style.less';
import SubCategoryList from './SubCategoryList';

class Category extends React.Component {
  state = {
    isCategoryClicked: false
  }

  handleTouchTap = () => {
    this.setState({ isCategoryClicked: !this.state.isCategoryClicked });
  }

  render() {
    let unfold = this.state.isCategoryClicked ? true : false;
    let content = this.state.isCategoryClicked ?
      (
        <SubCategoryList key={this.props.slug}
                         children={this.props.children}
                         slug={this.props.slug} />
      ) : null;

    return (
      <li className="Category row" data-is-open="true">
        <a className="category-content row-fluid" onTouchTap={this.handleTouchTap}>
          <div>
            { this.props.name }
            <button className="plus-button" data-is-unfolded={unfold} />
          </div>
        </a>
        <div className="see-all row-fluid" data-is-unfolded={unfold}>
          <a href="" className="see-all-link">Ver todos da categoria</a>
        </div>
        { content }
      </li>
    );
  }
}

export default Category;

