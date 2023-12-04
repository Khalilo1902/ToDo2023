import { FaSave } from "react-icons/fa";

import { useState } from "react";
import { ITask } from "../interface/ITask";

type TodoItemInputProps = {
  todoItem: ITask;
  updateTask: (id: string, newName: string) => void;
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
};

const TodoItemInput = ({ todoItem,updateTask ,setIsUpdate}: TodoItemInputProps) => {
  const [newName, setNewName] = useState<string>(todoItem.task);
  const handelUpdate =()=>{
    updateTask(todoItem.id,newName)
    setIsUpdate(false)
  }
  return (
    <li
      className={` w-2/3 p-2  border-2 rounded shadow-md flex justify-between `}
    >
      <input
        className="border border-gray-300 outline outline-none bg-gray-100 text-black rounded py-1"
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button>
        <FaSave onClick={handelUpdate}/>
      </button>
    </li>
  );
};

export default TodoItemInput;
