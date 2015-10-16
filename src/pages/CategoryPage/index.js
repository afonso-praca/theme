import { actions } from 'sdk';
import CategoryPage from './CategoryPage';

let components = [
  {
    constructor: CategoryPage
  }
];

actions.ComponentActions.register(components);

// Enable react hot loading with external React
// see https://github.com/gaearon/react-hot-loader/tree/master/docs#usage-with-external-react
if (module.hot) {
  window.RootInstanceProvider = require('react-hot-loader/Injection').RootInstanceProvider;
}
