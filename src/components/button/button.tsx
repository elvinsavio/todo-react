import { ButtonProps, SubmitProps } from './button.type';

export const Button = ({ label, className, onClick }: ButtonProps) => {
  return (
    <button type="button" className={`text-white p-2 rounded  transition-all ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

const Submit = ({ onClick }: SubmitProps) => {
  return <Button label="Submit" className="bg-orange-500 w-full" onClick={onClick} />;
};

Button.Submit = Submit;
