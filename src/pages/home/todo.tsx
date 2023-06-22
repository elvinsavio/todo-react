import { useEffect, useState } from 'react';
import { getTodo, updateTodo } from '../../utils/apis';
import { format } from 'date-fns';

import TodoWrapper from '../../components/ui/todo/todoWrapper';

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
  loading: boolean;
}

interface State {
  todos: ITodo[];
  doing: ITodo[];
  done: ITodo[];
}

interface ITodoResponse {
  data: { data: { todo: ITodo[]; doing: ITodo[]; done: ITodo[] } };
}

export default function Todo() {
  const [state, setState] = useState<State>();

  useEffect(() => {
    getTodo<ITodoResponse>().then((res) => {
      setState({
        todos: res.data.data.todo,
        doing: res.data.data.doing,
        done: res.data.data.done,
      });
    });
  }, []);

  return (
    <TodoWrapper>
      <TodoWrapper.col>
        <h1>Todo</h1>
        {state?.todos.map((t) => {
          return <TodoWrapper.item key={t.id} t={t} />;
        })}
      </TodoWrapper.col>
      <TodoWrapper.col>
        <h1>doing</h1>
        {state?.doing.map((t) => {
          return <TodoWrapper.item key={t.id} t={t} />;
        })}
      </TodoWrapper.col>

      <TodoWrapper.col>
        <h1>doing</h1>
        {state?.done.map((t) => {
          return <TodoWrapper.item key={t.id} t={t} />;
        })}
      </TodoWrapper.col>
    </TodoWrapper>
  );
}
