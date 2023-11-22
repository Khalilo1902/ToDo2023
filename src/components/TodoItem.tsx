import { IoTrashOutline } from "react-icons/io5";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { MdDone } from "react-icons/md";
import { ITask } from "../interface/ITask";

type ToDoItemProps = {
  toDo: ITask;
  deleteTask: (id: string) => void;
};
const TodoItem = ({ toDo, deleteTask }: ToDoItemProps) => {
  const { id, name } = toDo;

  return (
    <li className=" w-2/3 p-2  border-2 rounded shadow-md flex justify-between ">
      <p>{name}</p>
      <div className=" flex items-center gap-2 justify-center">
        <button>
          <HiOutlinePencilAlt />
        </button>
        <button onClick={() => deleteTask(id)}>
          <IoTrashOutline />
        </button>
        <button>
          <MdDone />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
