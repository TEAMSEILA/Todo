import { AnimatePresence, motion } from 'framer-motion';

type Todo = {
  id: string;
  todo: string;
  completed: boolean;
};

function TodoItem({
  todo,
  toggleTodo,
  removeTodo,
}: {
  todo: Todo;
  toggleTodo: (id: string, completed: boolean) => void;
  removeTodo: (id: string) => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        animate={{ scaleY: 1, opacity: 1 }}
        initial={{ scaleY: 0, opacity: 0 }}
        exit={{ scaleY: 0, opacity: 0 }}
        className="border-b border-b-slate-700 py-4 flex items-center"
      >
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => toggleTodo(todo.id, e.target.checked)}
        />
        <span
          className={`flex-grow ml-4 ${
            todo.completed ? `line-through text-slate-400` : ``
          }`}
        >
          {todo.todo}
        </span>
        <span
          className="bg-red-500 font-bold text-sm p-2 w-auto cursor-pointer rounded-lg"
          onClick={() => removeTodo(todo.id)}
        >
          Remove
        </span>
      </motion.div>
    </AnimatePresence>
  );
}

export default TodoItem;
