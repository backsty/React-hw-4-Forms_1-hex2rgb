export interface RGB {
  r: number;
  g: number;
  b: number;
}

export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  hasError: boolean;
}

export interface ErrorMessageProps {
  message: string;
}
