import React from 'react';
import './style.less';
import CategoryList from './CategoryList';
import PanelNav from 'components/Category/common/PanelNav';

class CategoryPanel extends React.Component {
  getCategories(facetsStore, currentURL) {
    let facets = facetsStore.get(currentURL);
    return facets ? facets.filters.category[0] : {children: []};
  }

  render() {
    let isOpen = this.props.isOpen;
    let facets = this.props.facets;
    let currentURL = (window.location.pathname + window.location.search);
    let category = this.getCategories(facets, currentURL);

    return (
      <aside className="CategoryPanel" data-is-open={isOpen}>
        <div className="frame">
          <PanelNav closePanel={this.props.closeCategoryPanel}
                    navType='button' />
          <div className="content">
            <h1 className="category-header container">
              Departamentos
            </h1>
            <CategoryList categories={this.props.categories}
                          closeCategoryPanel={this.props.closeCategoryPanel}
                          category={category}/>
          </div>
        </div>
      </aside>
    );
  }
}

export default CategoryPanel;

