import React from 'react';
import renderer from 'react-test-renderer';
import { Display } from './Display';

describe('snapshots', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Display value="23.12" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if no value is provided', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
