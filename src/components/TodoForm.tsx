import { useState } from "react";
import { ITask } from "../interface/ITask";
import { v4 as uuidv4 } from "uuid";

type ToDoFormProps = {
  addTodo: (newTodo: ITask) => void
  
};

const TodoForm = ({addTodo }: ToDoFormProps) => {
  const [toDoName, setToDoName] = useState("");

const submitHandler = ()=>{
  const newTodo:ITask = {id:uuidv4(),name:toDoName}
  addTodo(newTodo)
  setToDoName("")
}

  return (
    <div className=" flex items-center justify-center mt-10 gap-2">
      <div className="">
        <input
          type="text"
          placeholder=" Add task"
          value={toDoName}
          onChange={(e) => setToDoName(e.target.value)}
          className=" border border-gray-300 outline outline-none bg-gray-100 text-black rounded py-1"
        />
      </div>
      <div>
        <button onClick={submitHandler} className=" bg-green-500 px-4 py-1 text-white rounded shadow-md">
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
