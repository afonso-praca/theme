import React from 'react';
import './CategoryPanel.less';
//import { stores } from 'sdk';
import CategoryList from 'components/Category/CategoryList';
import PanelNav from 'components/Category/PanelNav';
//import BrandList from 'components/Category/BrandList';

/*function getBrands(facetsStore, currentURL) {
  let facets = facetsStore.get(currentURL);
  return facets ? facets.filters.brand : [];
}*/

function getCategories(facetsStore, currentURL) {
  let facets = facetsStore.get(currentURL);
  return facets ? facets.filters.category[0] : {children: []};
}

class CategoryPanel extends React.Component {
    render() {
      let isOpen = this.props.isOpen;
      let facets = this.props.facets;

      let currentURL = (window.location.pathname + window.location.search);
      //let brands = getBrands(facets, currentURL);
      let category = getCategories(facets, currentURL);

      return (
        <aside className="CategoryPanel" data-is-open={isOpen}>
          <div className="frame">
          <PanelNav closePanel={this.props.closeCategoryPanel} navType='button'/>
            <div className="content">
              <h1 className="category-header container">Departamentos</h1>
              <CategoryList categories={this.props.categories} closeCategoryPanel={this.props.closeCategoryPanel}
                category={category}/>
              { /* <BrandList brands={brands} splat={splat} /> */ }
            </div>
          </div>
        </aside>
      );
    }
}

export default CategoryPanel;
