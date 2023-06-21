import { useEffect, useState } from 'react';
import { getTodo } from '../../utils/apis';

interface ITodo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

interface ITodoResponse {
  data: { data: { todo: ITodo[] } };
}

export default function Todo() {
  const [todo, setTodo] = useState<ITodo[]>([]);

  useEffect(() => {
    getTodo<ITodoResponse>().then((res) => {
      setTodo(res.data.data.todo);
    });
  }, []);
  return (
    <div className="flex flex-col gap-2 mt-1">
      {todo.map((t) => {
        return <TodoItem key={t.id} t={t} />;
      })}
    </div>
  );
}

interface ITodoItemProps {
  t: ITodo;
}
const TodoItem = ({ t }: ITodoItemProps) => {
  return (
    <div className="p-2 rounded mx-2 bg-neutral-900 flex gap-2">
      <label className="cursor-pointer select-none">Checkbox</label>
    </div>
  );
};
