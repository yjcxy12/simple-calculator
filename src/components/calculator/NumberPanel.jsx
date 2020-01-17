import React, { useCallback, useContext } from 'react';
import classNames from 'classnames';
import { CalculatorButton } from './CalculatorButton';
import { State, Actions } from './context';
import './NumberPanel.css';

export const NumberPanel = ({ clear, numbers }) => {
  const { currentNumber, shouldResetDisplay } = useContext(State);
  const { setCurrentNumber, setCachedNumber, setCachedOperator, setShouldResetDisplay } = useContext(Actions);

  const onClearClick = useCallback(() => {
    setCurrentNumber('0');
    setCachedNumber(null);
    setCachedOperator(null);
    setShouldResetDisplay(false)
  }, [setCurrentNumber, setCachedNumber, setCachedOperator, setShouldResetDisplay]);

  const onNumberClick = useCallback(
    (_, label) => {
      if (shouldResetDisplay) {
        setCurrentNumber(label);
        setShouldResetDisplay(false);
      } else {
        if (currentNumber.length < 9) {
          setCurrentNumber(`${currentNumber === '0' && label !== '.' ? '' : currentNumber}${label}`);
        }
      }
    },
    [currentNumber, shouldResetDisplay, setCurrentNumber, setShouldResetDisplay]
  );

  return (
    <ul className="number-panel-container">
      <CalculatorButton id={clear.id} label={clear.label} className={clear.className} onClick={onClearClick} />
      {numbers.map(({ id, label, className }) => (
        <CalculatorButton
          key={id}
          className={classNames('calculator-button-container--number', className)}
          id={id}
          label={label}
          onClick={onNumberClick}
        />
      ))}
    </ul>
  );
};
