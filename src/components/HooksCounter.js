import { useDispatch, useSelector } from "react-redux";
import { decreament, increament } from "../redux/counter/actins";

function HooksCounter () {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const increamentHandler = (value) => {
    dispatch(increament(value));
  }
  const decreamentHandler = (value) => {
    dispatch(decreament(value));
  }
  return (
    <div>
        <div
          className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
        >
          <div className="text-2xl font-semibold" id="counter">{count}</div>
          <div className="flex space-x-3">
            <button
            onClick={() => increamentHandler(2)}
              className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
              id="increament"
            >
              Increment
            </button>
            <button
            onClick={() => decreamentHandler(5)}
              className="bg-red-400 text-white px-3 py-2 rounded shadow"
              id="decreament"
            >
              Decrement
            </button>
          </div>
        </div>
    </div>
  )
}



export default HooksCounter