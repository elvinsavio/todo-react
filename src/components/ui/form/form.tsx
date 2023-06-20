import { ReactNode } from 'react';

interface FormProps {
  children: ReactNode;
}
export default function Form({ children }: FormProps) {
  return <form className="flex flex-col gap-3 p-4">{children}</form>;
}
