import { ReactNode } from 'react';
import { motion } from 'framer-motion';
interface FormProps {
  children: ReactNode;
  animate: number;
}
export default function Form({ children, animate }: FormProps) {
  return (
    <motion.div
      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
      initial={{ x: 200 * animate, height: 'auto' }}
      animate={{ x: 0 }}
      exit={{ x: 200 * animate * -1, height: 0 }}
      className="flex flex-col gap-3 p-4 bg-transparent"
    >
      {children}
    </motion.div>
  );
}
