import { useState } from 'react';

function TodoForm({ addTodo }: { addTodo: (newItem: string) => void }) {
  const [newItem, setNewItem] = useState<string>('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    addTodo(newItem);
    setNewItem('');
  }
  return (
    <form className="mb-8" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label className="block mb-1 text-slate-400" htmlFor="item">
          New Todo
        </label>
        <input
          type="text"
          id="item"
          className="rounded px-4 py-3 w-full bg-slate-950 border border-slate-800"
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-orange-600 rounded py-3 font-bold"
      >
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
