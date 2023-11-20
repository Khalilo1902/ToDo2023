import { IoTrashOutline } from "react-icons/io5";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { MdDone } from "react-icons/md";

const TodoItem = () => {
  return (
    <li className=" w-2/3 p-2  border-2 rounded shadow-md flex justify-between ">
      <p>task one</p>
      <div className=" flex items-center gap-2 justify-center">
        <button>
          <HiOutlinePencilAlt />
        </button>
        <button>
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
