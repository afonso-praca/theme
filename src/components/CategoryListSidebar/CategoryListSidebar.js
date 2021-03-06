import React from 'react';
import { stores, connectToStores } from 'sdk';
import CategoryListOption from './CategoryListOption/CategoryListOption.js'
import './CategoryListSidebar.less';

@connectToStores()
class CategoryListSidebar extends React.Component {
  static getStores() {
    return [
      stores.ContextStore,
      stores.FacetsStore
    ];
  }

  static getPropsFromStores(props) {
    let location = stores.ContextStore.getState().get('location');
    let path = location.pathname + location.search;
    let facets = stores.FacetsStore.getState().getIn([path, props.id]);
    let category = facets ? facets.getIn(['filters', 'category']).first() : undefined;
    let name = category ? category.get('name') : undefined;
    let slug = category ? category.get('slug') : undefined;
    let children = category ? category.get('children') : undefined;

    return {
      name,
      slug,
      categories: children
    };
  }

  shouldComponentUpdate({ categories }) {
    return categories !== undefined;
  }

  render() {
    if (!this.props.categories) {
      return null;
    }

    let categoryOptions = this.props.categories.map((category) => {
      let slug = `/${this.props.slug}/${category.get('slug')}/c`;

      return (
        <CategoryListOption
          key={category.get('name')}
          name={category.get('name')}
          slug={slug}
        />
      );
    });

    let content = this.props.categories.count() > 0 ?
      (
        <nav className="CategoryListSidebar" role="navigation">
          <span className="CategoryListSidebar__title">Mais categorias</span>
          <h3 className="CategoryListSidebar__header">
            { this.props.name }
          </h3>
          <ul className="CategoryListSidebar__list">
            { categoryOptions }
          </ul>
        </nav>
      ) : null;

    return content;
  }
}

export default CategoryListSidebar;
