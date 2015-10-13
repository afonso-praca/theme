import React from 'react';
import { Navigation } from 'react-router';
// import Brand from './Brand';
import './BrandList.less';
import CategoryListButton from 'components/Category/CategoryListButton';
import { uniq, remove, contains } from 'lodash';

class BrandList extends React.Component {
  static contextTypes = Navigation.contextTypes

  constructor(props, context) {
    super(props);
    let query = context.router.getCurrentQuery();
    this.state = {
      activeFilters: {
        brands: query.brand ? uniq(query.brand.split(',')): [],
        category: [query.category] || []
      }
    }
  }

  brandChange = (ev) => {
    let brand = ev.target.value;
    let activeFilters = this.state.activeFilters;

    contains(activeFilters.brands, brand)
      ? remove(activeFilters.brands, (b) => {return brand == b;})
      : activeFilters.brands.push(brand);

    this.setState({activeFilters: activeFilters});
    this.context.router.transitionTo('category', { splat: this.props.splat },
       {brand: activeFilters.brands.toString()});
  }

  render() {
    let brands = this.props.brands;
    let activeBrands = this.state.activeFilters.brands;
    console.log(activeBrands);

    return (
      <nav className="BrandList" role="navigation">
      <div className="container-narrow">
         <section className="container brand-container">
                <div className="row">
                   <ul className="brand-list">
                      <div className="brand-header" data-is-open="true">
                        Marcas
                        <CategoryListButton/>
                      </div>
                       <ul className="sublist">
                           {brands.map((brand) => {
                             return <li key={brand.slug} className="sublist-item">
                                <input type="radio" checked={contains(activeBrands, brand.slug)}
                                 value={brand.slug} onChange={this.brandChange}>
                                  {brand.name}
                                </input>
                             </li>;
                           })}
                       </ul>
                    </ul>
                </div>
          </section>
         </div>
      </nav>
    );
  }
}

export default BrandList;
