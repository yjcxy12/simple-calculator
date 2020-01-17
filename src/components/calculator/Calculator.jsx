import React, { useState } from 'react';
import { Display } from './Display';
import { NumberPanel } from './NumberPanel';
import { OperatorPanel } from './OperatorPanel';
import { State, Actions } from './context';
import './Calculator.css';

const clear = {
  id: 'reset',
  label: 'AC',
  className: 'calculator-button-container--reset',
};

const numbers = [
  { id: '7', label: '7' },
  { id: '8', label: '8' },
  { id: '9', label: '9' },
  { id: '4', label: '4' },
  { id: '5', label: '5' },
  { id: '6', label: '6' },
  { id: '1', label: '1' },
  { id: '2', label: '2' },
  { id: '3', label: '3' },
  { id: '0', label: '0', className: 'calculator-button-container--0' },
  { id: '.', label: '.' },
];

const operators = [
  {
    id: 'equals',
    label: '=',
  },
  {
    id: 'plus',
    label: '+',
  },
  {
    id: 'minus',
    label: '-',
  },
  {
    id: 'multiply',
    label: '×',
  },
  {
    id: 'divide',
    label: '÷',
  },
];

export const Calculator = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [currentOperator, setCurrentOperator] = useState(null);
  const [cachedNumber, setCachedNumber] = useState(null);
  const [cachedOperator, setCachedOperator] = useState(null);
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false);
  return (
    <State.Provider value={{ currentNumber, currentOperator, cachedNumber, cachedOperator, shouldResetDisplay }}>
      <Actions.Provider
        value={{ setCurrentNumber, setCurrentOperator, setCachedNumber, setCachedOperator, setShouldResetDisplay }}
      >
        <div className="calculator-container">
          <Display value={currentNumber} />
          <div className="calculator-panel">
            <NumberPanel clear={clear} numbers={numbers} />
            <OperatorPanel operators={operators} />
          </div>
        </div>
      </Actions.Provider>
    </State.Provider>
  );
};
