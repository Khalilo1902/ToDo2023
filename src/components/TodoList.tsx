import TodoItem from "./TodoItem";


const TodoList = () => {
  return (
    <ul className=" flex flex-col items-center py-10 gap-2">
     <TodoItem/>
     <TodoItem/>
     <TodoItem/>
     <TodoItem/>
    </ul>
  );
};

export default TodoList;
