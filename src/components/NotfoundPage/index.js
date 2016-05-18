import { actions } from 'sdk';
import NotfoundPage from './NotfoundPage';

let components = [
  {
    name: 'NotfoundPage@pilateslovers.pilateslovers-theme',
    constructor: NotfoundPage
  }
];

actions.ComponentActions.register(components);
