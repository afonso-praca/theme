import React from 'react';
import { stores, actions, register, connectToStores } from 'sdk';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Newsletter from 'components/Newsletter/Newsletter';
import './ProductPage.less';
import Product from 'components/Product/Product';

@register({
  id: 'ProductPage@vtex.storefront-theme'
})
@connectToStores([
  stores.ProductStore
])
class ProductPage extends React.Component {
  componentWillMount() {
    // TODO fix scroll behavior
    var contentEl = document.getElementsByClassName('v-editor__app-container')[0];
    if (contentEl) {
      contentEl.scrollTop = 0;
    }

    let currentURL = (window.location.pathname + window.location.search);
    if (!stores.ResourceStore.getState().get(currentURL)) {
      let slug = stores.ContextStore.getState().getIn(['route', 'params', 'slug']);
      let params = {
        slug: slug
      };
      actions.ResourceActions.getRouteResources(currentURL, 'product', params);
    }
  }

  render() {
    let slug = stores.ContextStore.getState().getIn(['route', 'params', 'slug']);
    let productData = this.props.ProductStore.get(slug);

    return (
      <div>
        <Header/>
        {productData ? <Product {...productData}/> : <div>Carregando</div>}
        <Newsletter/>
        <Footer/>
      </div>
    );
  }
}

export default ProductPage;

// Enable react hot loading with external React
// see https://github.com/gaearon/react-hot-loader/tree/master/docs#usage-with-external-react
if (module.hot) {
  window.RootInstanceProvider = require('react-hot-loader/Injection').RootInstanceProvider;
}
