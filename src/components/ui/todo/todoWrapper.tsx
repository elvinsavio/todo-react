import { format } from 'date-fns';
import { ITodo } from '../../../pages/home/todo';
import { useState } from 'react';
import { motion } from 'framer-motion';
interface TodoProps {
  children: React.ReactNode;
}
export default function TodoWrapper({ children }: TodoProps) {
  return <div className="flex gap-2 mt-1">{children}</div>;
}

interface TodoColProps {
  children: React.ReactNode;
}
function TodoCol({ children }: TodoColProps) {
  return <div className="p-2 flex flex-col gap-1 flex-1 ">{children}</div>;
}

function TodoItem({ t }: { t: ITodo }) {
  const [isDragged, setIsDragged] = useState(false);

  return (
    <motion.div
      className={`p-1 rounded mx-2 px-2 bg-neutral-900 flex gap-2 items-center justify-between ${
        isDragged && 'invisible'
      }`}
      draggable
    >
      <div className="flex gap-2 items-center">
        <label className="cursor-pointer select-none">{t.title}</label>
      </div>
      <span className="text-xs italic text-neutral-600">{format(new Date(t.updatedAt), 'yyyy-MM-dd')}</span>
    </motion.div>
  );
}

TodoWrapper.item = TodoItem;
TodoWrapper.col = TodoCol;
