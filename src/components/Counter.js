import { connect } from "react-redux"
import { decreament, increament } from "../redux/counter/actins"

function Counter ({count, increament, decreament}) {
  return (
    <div>
        <div
          className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
        >
          <div className="text-2xl font-semibold" id="counter">{count}</div>
          <div className="flex space-x-3">
            <button
            onClick={increament}
              className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
              id="increament"
            >
              Increment
            </button>
            <button
            onClick={decreament}
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


const mapStateToProps = (state) => {
  return {
    count: state.value,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increament: (value) => dispatch(increament(value)),
    decreament: (value) => dispatch(decreament(value)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)