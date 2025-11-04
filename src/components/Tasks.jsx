import { ChevronRightIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDatailsClick(task) {
    // const query = new URLSearchParams();
    // query.set("title", task.title);
    // query.set("description", task.description);
    // navigate(`/task${query.toStryng()}`);
    navigate(
      `/task?title=${encodeURIComponent(
        task.title
      )}&description=${encodeURIComponent(task.description)}`
    );
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`w-full text-left p-2 rounded-md ${
              task.isCompleted
                ? "bg-slate-500 text-white line-through"
                : "bg-slate-400 text-white hover:bg-slate-500"
            }`}
          >
            {task.title}
          </button>

          {/* Botão de detalhes */}
          <Button onClick={() => onSeeDatailsClick(task)}>
            <ChevronRightIcon />{" "}
          </Button>

          {/* Botão de excluir */}
          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <Trash2Icon />{" "}
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
