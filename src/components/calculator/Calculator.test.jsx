import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import { Calculator } from './Calculator';

describe('snapshots', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('behaviour', () => {
  it('should display correct initial state', () => {
    const { queryByTestId } = render(<Calculator />);
    expect(queryByTestId('display')).toHaveTextContent('0');
  });

  it('should add two integers correctly', () => {
    const { queryByTestId } = render(<Calculator />);

    fireEvent.click(queryByTestId('calculator-button-2'));
    expect(queryByTestId('display')).toHaveTextContent('2');

    fireEvent.click(queryByTestId('calculator-button-plus'));
    expect(queryByTestId('display')).toHaveTextContent('2');

    fireEvent.click(queryByTestId('calculator-button-3'));
    expect(queryByTestId('display')).toHaveTextContent('3');

    fireEvent.click(queryByTestId('calculator-button-equals'));
    expect(queryByTestId('display')).toHaveTextContent('5');
  });

  it('should subtract with two floating numbers correctly', () => {
    const { queryByTestId } = render(<Calculator />);

    fireEvent.click(queryByTestId('calculator-button-.'));
    fireEvent.click(queryByTestId('calculator-button-2'));
    expect(queryByTestId('display')).toHaveTextContent('0.2');

    fireEvent.click(queryByTestId('calculator-button-minus'));
    expect(queryByTestId('display')).toHaveTextContent('0.2');

    fireEvent.click(queryByTestId('calculator-button-1'));
    fireEvent.click(queryByTestId('calculator-button-.'));
    fireEvent.click(queryByTestId('calculator-button-3'));
    expect(queryByTestId('display')).toHaveTextContent('1.3');

    fireEvent.click(queryByTestId('calculator-button-equals'));
    expect(queryByTestId('display')).toHaveTextContent('-1.1');
  });

  it('should multiply two numbers correctly', () => {
    const { queryByTestId } = render(<Calculator />);

    fireEvent.click(queryByTestId('calculator-button-2'));
    fireEvent.click(queryByTestId('calculator-button-3'));
    expect(queryByTestId('display')).toHaveTextContent('23');

    fireEvent.click(queryByTestId('calculator-button-multiply'));
    expect(queryByTestId('display')).toHaveTextContent('23');

    fireEvent.click(queryByTestId('calculator-button-4'));
    fireEvent.click(queryByTestId('calculator-button-3'));
    expect(queryByTestId('display')).toHaveTextContent('43');

    fireEvent.click(queryByTestId('calculator-button-equals'));
    expect(queryByTestId('display')).toHaveTextContent((23 * 43).toString());
  });

  it('should handle consective equals button click', () => {
    const { queryByTestId } = render(<Calculator />);

    fireEvent.click(queryByTestId('calculator-button-2'));
    expect(queryByTestId('display')).toHaveTextContent('2');

    fireEvent.click(queryByTestId('calculator-button-plus'));
    expect(queryByTestId('display')).toHaveTextContent('2');

    fireEvent.click(queryByTestId('calculator-button-3'));
    expect(queryByTestId('display')).toHaveTextContent('3');

    fireEvent.click(queryByTestId('calculator-button-equals'));
    expect(queryByTestId('display')).toHaveTextContent(5);

    fireEvent.click(queryByTestId('calculator-button-equals'));
    expect(queryByTestId('display')).toHaveTextContent(8);

    fireEvent.click(queryByTestId('calculator-button-equals'));
    expect(queryByTestId('display')).toHaveTextContent(11);

    fireEvent.click(queryByTestId('calculator-button-equals'));
    expect(queryByTestId('display')).toHaveTextContent(14);
  });

  it('should handle consective equals button click after minus button', () => {
    const { queryByTestId } = render(<Calculator />);

    fireEvent.click(queryByTestId('calculator-button-2'));
    expect(queryByTestId('display')).toHaveTextContent('2');

    fireEvent.click(queryByTestId('calculator-button-minus'));
    expect(queryByTestId('display')).toHaveTextContent('2');

    fireEvent.click(queryByTestId('calculator-button-3'));
    expect(queryByTestId('display')).toHaveTextContent('3');

    fireEvent.click(queryByTestId('calculator-button-equals'));
    expect(queryByTestId('display')).toHaveTextContent(-1);

    fireEvent.click(queryByTestId('calculator-button-equals'));
    expect(queryByTestId('display')).toHaveTextContent(-4);

    fireEvent.click(queryByTestId('calculator-button-equals'));
    expect(queryByTestId('display')).toHaveTextContent(-7);

    fireEvent.click(queryByTestId('calculator-button-equals'));
    expect(queryByTestId('display')).toHaveTextContent(-10);
  });

  it('should reset correctly', () => {
    const { queryByTestId } = render(<Calculator />);

    fireEvent.click(queryByTestId('calculator-button-2'));
    expect(queryByTestId('display')).toHaveTextContent('2');

    fireEvent.click(queryByTestId('calculator-button-plus'));
    expect(queryByTestId('display')).toHaveTextContent('2');

    fireEvent.click(queryByTestId('calculator-button-3'));
    expect(queryByTestId('display')).toHaveTextContent('3');

    fireEvent.click(queryByTestId('calculator-button-equals'));
    expect(queryByTestId('display')).toHaveTextContent(5);

    fireEvent.click(queryByTestId('calculator-button-reset'));
    expect(queryByTestId('display')).toHaveTextContent(0);

    fireEvent.click(queryByTestId('calculator-button-equals'));
    expect(queryByTestId('display')).toHaveTextContent(0);

  })
});
