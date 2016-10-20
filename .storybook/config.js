import { configure } from '@kadira/storybook';
import '../src/index.css';

window.STORYBOOK_REACT_CLASSES = {};

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
