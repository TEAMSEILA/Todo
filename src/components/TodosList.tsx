import React from 'react';

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
  toggleTodo: () => void;
  removeTodo: () => void;
}) {
  return (
    <div>
      {todos.map((todo, key) => (
        <div
          key={key}
          className="border-b border-b-slate-700 py-4 flex items-center"
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => toggleTodo(todo.id, e.target.checked)}
          />
          <span className="flex-grow ml-4">{todo.todo}</span>
          <span
            className="bg-red-600 p-2 w-auto cursor-pointer"
            onClick={() => removeTodo(todo.id)}
          >
            Remove
          </span>
        </div>
      ))}
    </div>
  );
}

export default TodosList;
