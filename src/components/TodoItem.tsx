import { IoTrashOutline } from "react-icons/io5";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { MdDone } from "react-icons/md";
import { ITask } from "../interface/ITask";
import { useState } from "react";
import TodoItemInput from "./TodoItemInput";

type ToDoItemProps = {
  toDo: ITask;
  deleteTask: (id: string) => void;
  completeTask:(id:string) => void;
  updateTask:(id:string,newName:string) => void;

};
const TodoItem = ({ toDo, deleteTask, completeTask,updateTask }: ToDoItemProps) => {
  const [isUpdate,setIsUpdate]=useState<boolean>(false)
  const { id, task, isDone } = toDo;
if (isUpdate){
  return <TodoItemInput todoItem={toDo} updateTask={updateTask} setIsUpdate={setIsUpdate}/>
}
  return (
    <li className={`${isDone? "bg-green-400": "bg-white"} w-2/3 p-2  border-2 rounded shadow-md flex justify-between `} >
      <p>{task}</p>
      <div className=" flex items-center gap-2 justify-center">
        <button onClick={()=>setIsUpdate(!isUpdate)}>
          <HiOutlinePencilAlt />
        </button>
        <button onClick={() => deleteTask(id)}>
          <IoTrashOutline />
        </button>
         {!isDone && (<button onClick={()=> completeTask(id)}>

          <MdDone />
        </button>)
        }
      </div>
    </li>
  );
};

export default TodoItem;
