import React from 'react';
import './Display.css';

export const Display = ({ value = '0' }) => (
  <div data-testid="display" className="calculator-display">
    {value}
  </div>
);
