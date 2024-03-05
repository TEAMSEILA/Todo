import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodosList from './components/TodosList';

type Todo = {
  id: string;
  todo: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(newItem: string) {
    console.log('Hello World', newItem);
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), todo: newItem, completed: false },
    ]);
  }

  function toggleTodo(id: string, completed: boolean) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
      });
    });
  }

  function removeTodo(id: string) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="bg-slate-900 h-screen w-screen flex items-center justify-center text-white">
      <div className="w-full max-w-[600px]">
        <h1 className="text-5xl mb-8 font-bold">Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <div>
          <h1 className="text-5xl mb-8 font-bold">Todos</h1>
          {todos.length === 0 ? (
            <p className="text-slate-400">No todos yet.</p>
          ) : (
            <TodosList
              todos={todos}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
