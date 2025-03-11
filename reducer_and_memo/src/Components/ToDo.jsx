import React, { useReducer } from "react";

const reducer = (state, action) => {
  // console.log("State", state);
  // console.log("action", action);
  // return ["Assignments"];

  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "DELETE_TASK":
      return state.filter((task, idx) => idx !== action.payload);

    default:
      return state;
  }
};

const initialState = [];
function ToDo() {
  const [toDos, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <input
        type="text"
        onBlur={(e) => {
          dispatch({ type: "ADD_TASK", payload: e.target.value });
        }}
      />

      <ul className="list-group">
        {toDos.map((task, idx) => {
          return (
            <li className="list-group-item" key={idx}>
              {task}

              <button
                className="btn btn-danger ms-3"
                onClick={() => dispatch({ type: "DELETE_TASK", payload: idx })}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ToDo;
