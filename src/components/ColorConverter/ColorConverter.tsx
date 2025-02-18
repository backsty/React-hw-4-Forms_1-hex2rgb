import React, { useState, useEffect } from 'react';
import { Input } from '../Input/Input';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { hex2rgb, isValidHex } from '../../utils/colorConverters';

export const ColorConverter: React.FC = () => {
  const [hexColor, setHexColor] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    validateColor(hexColor);
  }, [hexColor]);

  const validateColor = (value: string) => {
    // Если поле пустое, убираем ошибку
    if (!value) {
      setError(false);
      setErrorMessage('');
      return;
    }

    // Проверяем формат: должен начинаться с # и содержать правильные символы
    if (!value.startsWith('#')) {
      setError(true);
      setErrorMessage('Цвет должен начинаться с #');
      return;
    }

    // Если длина равна 7, проверяем на корректность HEX
    if (value.length === 7) {
      if (!isValidHex(value)) {
        setError(true);
        setErrorMessage('Неверный формат HEX-цвета');
        return;
      }
      setError(false);
      setErrorMessage('');
    }

    // Если длина больше 7, показываем ошибку
    if (value.length > 7) {
      setError(true);
      setErrorMessage('Слишком много символов');
    }
  };

  const handleChange = (value: string) => {
    setHexColor(value);
  };

  const rgb = hex2rgb(hexColor);
  const backgroundColor = rgb ? hexColor : '#ffffff';
  const rgbString = rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : '';

  return (
    <div className="converter" style={{ backgroundColor }}>
      <div className="converter-content">
        <Input value={hexColor} onChange={handleChange} hasError={error} />
        {error && <ErrorMessage message={errorMessage} />}
        {!error && rgbString && <div className="rgb-value">{rgbString}</div>}
      </div>
    </div>
  );
};
