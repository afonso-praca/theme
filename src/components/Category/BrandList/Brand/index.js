import React from 'react';
import './Brand.less';
import CategoryListButton from 'components/Category/CategoryListButton';

class Brand extends React.Component {
    render() {
      return (
        <div className="Brand container-narrow">
           <section className="container filter-container">
                  <div className="row">
                     <ul className="list">
                        <li className="list-item" data-is-open="true">Marcas
                          <CategoryListButton/>
                        </li>
                         <ul className="sublist">
                             {children.map(function(result) {
                               return <li className="sublist-item">
                                  <Link onClick={closeSidePanel} to="category" params={{splat: categories + '/' + slug + '/' + result.slug}}>
                                    {result.name}
                                  </Link>
                               </li>;
                             })}
                         </ul>
                      </ul>
                  </div>
           </section>
        </div>
        );
    }
}

export default Brand;
