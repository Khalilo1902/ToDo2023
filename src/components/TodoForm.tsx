const TodoForm = () => {
  return (
    <div className=" flex items-center justify-center mt-10 gap-2">
      <div className="">
        <input
          type="text"
          placeholder=" Add task"
          className=" border border-gray-300 outline outline-none bg-gray-100 text-white rounded py-1"
        />
      </div>
      <div>
        <button className=" bg-green-500 px-4 py-1 text-white rounded shadow-md">
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
