import { ITask } from "../interface/ITask";
import TodoItem from "./TodoItem";
type ToDoListProps = {
  toDolist: ITask[];
  deleteTask: (id: string) => void;
  completeTask: (id:string)=> void;
};

const TodoList = ({ toDolist,deleteTask,completeTask }: ToDoListProps) => {
  return (
    <ul className=" flex flex-col items-center py-10 gap-2">
      {/* <TodoItem/>
     <TodoItem/>
     <TodoItem/>
     <TodoItem/> */}
      {toDolist.map((todo) => (
        <TodoItem key={todo.id} toDo={todo} deleteTask={deleteTask} completeTask={completeTask} />
      ))}
    </ul>
  );
};

export default TodoList;
