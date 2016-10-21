import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';

storiesOf('Button', module)
  .add('with docgeninfo', () => (
      <pre><code> {JSON.stringify(Button.__docgenInfo, null, 2) } </code></pre>
  ));

storiesOf('All React Classes', module)
  .add('whole json', () => (
      <pre><code> {JSON.stringify(STORYBOOK_REACT_CLASSES, null, 2) } </code></pre>
  ));
