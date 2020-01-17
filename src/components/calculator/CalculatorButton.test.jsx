import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import { CalculatorButton } from './CalculatorButton';

describe('snapshots', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<CalculatorButton className="test-class" id="plus" label="+" onClick={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('behaviour', () => {
  const onClick = jest.fn();
  const { queryByTestId } = render(<CalculatorButton className="test-class" id="plus" label="+" onClick={onClick} />);
  fireEvent.click(queryByTestId('calculator-button-plus'));
  expect(onClick).toHaveBeenCalledWith('plus', '+');
});
