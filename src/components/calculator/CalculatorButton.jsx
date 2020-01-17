import React, { useCallback } from 'react';
import classNames from 'classnames';
import './CalculatorButton.css';

export const CalculatorButton = ({ className, id, label, onClick: onClickProp }) => {
  const onClick = useCallback(() => {
    onClickProp(id, label);
  }, [id, label, onClickProp]);

  return (
    <li className={classNames('calculator-button-container', className)}>
      <button data-testid={`calculator-button-${id}`} className="calculator-button" onClick={onClick} type="button">
        {label}
      </button>
    </li>
  );
};
