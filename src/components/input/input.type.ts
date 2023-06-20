export interface InputProps {
  label: string;
  value: string;
  type: 'text' | 'password' | 'email' | 'number';
  onChange: (value: string) => void;
  placeholder: string;
}
