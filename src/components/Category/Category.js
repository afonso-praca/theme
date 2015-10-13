import React from 'react';
import './Category.less';
import SubCategoryList from 'components/Category/SubCategoryList';

let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class Category extends React.Component {
  state = {
    isCategoryClicked: false
  }

  handleTouchTap = () => {
    this.setState({isCategoryClicked: !this.state.isCategoryClicked});

  }

  render() {
    let name = this.props.name;
    let content = this.state.isCategoryClicked ?
      (
        <SubCategoryList key={this.props.slug}
                         children={this.props.children}
                         category={this.props.category}
                         slug={this.props.slug}/>
      ) : null;

      let unfold = this.state.isCategoryClicked ? true : false;

    return (
      <li className="Category row" data-is-open="true">
        <a className="category-content row-fluid" onTouchTap={this.handleTouchTap}>
            <div>
              { name }
              <button className="plus-button" data-is-unfolded={unfold} />
            </div>
        </a>
          <div className="see-all row-fluid" data-is-unfolded={unfold}>
            <a href="" className="see-all-link">Ver todos da categoria</a>
          </div>

        <ReactCSSTransitionGroup transitionName="accordion_drop" transitionLeave={false}>
          { content }
        </ReactCSSTransitionGroup>
      </li>
    );
  }
}

export default Category;
