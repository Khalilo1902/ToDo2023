import { ITask } from "../interface/ITask";
import TodoItem from "./TodoItem";
type ToDoListProps = {
  toDolist: ITask[];
  deleteTask: (id: string) => void;
  completeTask: (id:string)=> void;
  updateTask: (id:string,newName:string)=> void;
};

const TodoList = ({ toDolist,deleteTask,completeTask,updateTask}: ToDoListProps) => {
  return (
    <ul className=" flex flex-col items-center py-10 gap-2">
      {/* <TodoItem/>
     <TodoItem/>
     <TodoItem/>
     <TodoItem/> */}
      {toDolist.sort( (a, b) => a.createdAt.getTime() - b.createdAt.getTime()).map((todo) => (
        <TodoItem key={todo.id} toDo={todo} deleteTask={deleteTask} completeTask={completeTask} updateTask={updateTask}/>
      ))}
    </ul>
  );
};

export default TodoList;
