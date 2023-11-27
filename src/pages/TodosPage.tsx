import { useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { ITask } from "../interface/ITask";

const TodoPage = () => {
  const [toDolist, setTodoList] = useState<ITask[]>([]);
  console.log(toDolist);
  
  
  const addToDo = (newTodo: ITask) => {
    const updatedTodoList = [...toDolist, newTodo];
    setTodoList(updatedTodoList);
  };

  const deleteTask = (id: string) => {
    const updateTodoList = toDolist.filter((todo) => todo.id !== id);
    setTodoList(updateTodoList);
  };

  const completeTask = (id: string)=> {
     const toDo = toDolist.find(t => t.id === id);
     if (toDo) {

     
     const completedToDo= {
      ...toDo,
      isDone : true 
     }
     
     const filtredTodoList = toDolist.filter((todo) => todo.id !== id);
     const updateTodoList=[
      ...filtredTodoList,
      completedToDo
     ]
    setTodoList(updateTodoList);
  }
     

  }

  const updateTask = (id: string,newName:string)=> {
    const toDo = toDolist.find(t => t.id === id);
    if (toDo) {

    
    const completedToDo= {
     ...toDo,
    name:newName
    }
    
    const filtredTodoList = toDolist.filter((todo) => todo.id !== id);
    const updateTodoList=[
     ...filtredTodoList,
     completedToDo
    ]
   setTodoList(updateTodoList);
 }
    

 }

  return (
    <div>
      <TodoForm addTodo={addToDo} />
      <TodoList toDolist={toDolist} deleteTask={deleteTask} completeTask ={completeTask} updateTask={updateTask}/>
      
    </div>
  );
};

export default TodoPage;
