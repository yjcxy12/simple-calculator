import React, { useCallback, useContext } from 'react';
import { CalculatorButton } from './CalculatorButton';
import { State, Actions } from './context';
import { getResult } from './utils';
import './OperatorPanel.css';

export const OperatorPanel = ({ operators }) => {
  const { currentNumber, currentOperator, cachedNumber, cachedOperator, shouldResetDisplay } = useContext(State);
  const {
    setCurrentNumber,
    setCurrentOperator,
    setCachedNumber,
    setCachedOperator,
    setShouldResetDisplay,
  } = useContext(Actions);

  const onOperatorClick = useCallback(
    id => {
      const result = getResult({ cachedOperator, cachedNumber, currentNumber });
      setCurrentOperator(id);
      setCachedOperator(id);

      if (shouldResetDisplay) {
        setCachedNumber(currentNumber);
      } else {
        setCurrentNumber(result);
        setCachedNumber(result);
      }

      setShouldResetDisplay(true);
    },
    [
      currentNumber,
      cachedNumber,
      cachedOperator,
      shouldResetDisplay,
      setCurrentNumber,
      setCurrentOperator,
      setCachedNumber,
      setCachedOperator,
      setShouldResetDisplay,
    ]
  );

  const onEqualsClick = useCallback(() => {
    const result = getResult({ cachedOperator, currentOperator, cachedNumber, currentNumber });
    if (currentOperator !== 'equals') {
      setCachedNumber(currentNumber);
    }
    setCurrentOperator('equals');
    setCurrentNumber(result);
    setShouldResetDisplay(true);
  }, [
    currentNumber,
    currentOperator,
    cachedNumber,
    cachedOperator,
    setCurrentNumber,
    setCurrentOperator,
    setCachedNumber,
    setShouldResetDisplay,
  ]);

  return (
    <ul className="operator-panel-container">
      {operators.map(({ id, label }) => (
        <CalculatorButton
          key={id}
          className="calculator-button-container--operator"
          id={id}
          label={label}
          onClick={id === 'equals' ? onEqualsClick : onOperatorClick}
        />
      ))}
    </ul>
  );
};
