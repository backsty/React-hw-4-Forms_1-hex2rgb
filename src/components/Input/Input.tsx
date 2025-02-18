import React from 'react';
import { InputProps } from '../../types';

export const Input: React.FC<InputProps> = ({ value, onChange, hasError }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="#000000"
      maxLength={7}
      className={hasError ? 'error' : ''}
    />
  );
};