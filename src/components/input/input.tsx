import { InputProps } from './input.type';

export default function Input({ label, value, onChange, type, placeholder }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent border-b p-1 active:outline-none focus:outline-none focus:border-orange-500 "
        placeholder={placeholder}
      />
    </div>
  );
}
