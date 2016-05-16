import { actions } from 'sdk';
import TagManager from './TagManager';

let components = [
  {
    name: 'TagManager@pilateslovers.pilateslovers-theme',
    constructor: TagManager
  }
];

actions.ComponentActions.register(components);

