import { configure, addDecorator } from '@storybook/react';
import React from 'react'

const req = require.context('../src/components', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

const styles = {
  style: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'auto',
  },
  innerStyle: {
    margin: 'auto',
  },
};

const CenterDecorator = (storyFn) => (
  <div style={styles.style}>
    <div style={styles.innerStyle}>{storyFn()}</div>
  </div>
);
addDecorator(CenterDecorator);

configure(loadStories, module);

