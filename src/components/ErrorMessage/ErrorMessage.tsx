import React from 'react';
import { ErrorMessageProps } from '../../types';

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <div className="error-message">{message}</div>;
};
