import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import CalanderDay from './CalanderDay';

storiesOf('Welcome', module)
  .add('with docgeninfo', () => (
      <pre><code> {JSON.stringify(Welcome.__docgenInfo, null, 2) } </code></pre>
  ));
storiesOf('Button', module)
  .add('with docgeninfo', () => (
      <pre><code> {JSON.stringify(Button.__docgenInfo, null, 2) } </code></pre>
  ));
storiesOf('CalanderDay', module)
  .add('with docgeninfo', () => (
      <pre><code> {JSON.stringify(CalanderDay.__docgenInfo, null, 2) } </code></pre>
  ));
storiesOf('Global Object', module)
  .add('with docgeninfo', () => (
      <pre><code> {JSON.stringify(STORYBOOK_REACT_CLASSES, null, 2) } </code></pre>
  ));
