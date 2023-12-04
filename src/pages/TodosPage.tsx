import { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { ITask } from "../interface/ITask";
import axios from "axios";

const TodoPage = () => {
  const [toDolist, setTodoList] = useState<ITask[]>([]);
  console.log(toDolist);
  
  
  const addToDo = (newTodo: ITask) => {
    axios.post('http://localhost:4008/api/task/create',{task: newTodo.task}).then(()=> fetchTasks())
  };

  const deleteTask = (id: string) => {
    axios.delete("http://localhost:4008/api/task/delete/"+id).then(()=> fetchTasks())
  };

  const completeTask = (id: string)=> {
    axios.put('http://localhost:4008/api/task/update/'+id, {isDone: true}).then(()=> fetchTasks())
  }
     
  const updateTask = (id: string,newName:string)=> {
    axios.put('http://localhost:4008/api/task/update/'+id, {task: newName}).then(()=> fetchTasks())
  }

 const fetchTasks =async () => {
    try {
      const res = await axios.get('http://localhost:4008/api/task/display');
      if(res.data && res.data.length> 0) {
        setTodoList(res.data);
      }else {
        setTodoList([]);
      }
    } catch (err) {
      console.error(err)
    }
 }

 useEffect(()=>{
  fetchTasks()
  // axios.get('http://localhost:4008/api/task/display')
  //       .then((res) => {
  //         if (res.data && res.data.length> 0) {
  //           setTodoList(res.data);
  //         } else {
  //           setTodoList([]);
  //         }
  //       })
  //       .catch((err) => console.error(err))
 },[]);

  return (
    <div>
      <TodoForm addTodo={addToDo} />
      <TodoList toDolist={toDolist} deleteTask={deleteTask} completeTask ={completeTask} updateTask={updateTask}/>
      
    </div>
  );
};

export default TodoPage;
