import React from 'react';
import TodoItem from './TodoItem';

type Todo = {
  id: string;
  todo: string;
  completed: boolean;
};

function TodosList({
  todos,
  toggleTodo,
  removeTodo,
}: {
  todos: Todo[];
  toggleTodo: (id: string, completed: boolean) => void;
  removeTodo: (id: string) => void;
}) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}

export default TodosList;
