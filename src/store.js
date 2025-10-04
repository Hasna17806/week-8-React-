// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";

// export default function App() {
//   const count = useSelector((state) => state.counter.count);
//   const todos = useSelector((state) => state.todos);
//   const dispatch = useDispatch();

//   const [todoInput, setTodoInput] = useState("");

//   return (
//     <div>
//       <h1>Classic Redux Demo</h1>

//       {/* Counter Section */}
//       <h2>Counter: {count}</h2>
//       <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
//       <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>

//       {/* Todos Section */}
//       <h2>Todos</h2>
//       <input
//         type="text"
//         value={todoInput}
//         onChange={(e) => setTodoInput(e.target.value)}
//         placeholder="Enter todo"
//       />
//       <button
//         onClick={() => {
//           if (todoInput.trim()) {
//             dispatch({ type: "ADD_TODO", payload: todoInput });
//             setTodoInput("");
//           }
//         }}
//       >
//         Add Todo
//       </button>

//       <ul>
//         {todos.map((t, index) => (
//           <li key={index}>{t}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }



//-----------------------------------------------------------------------------------------

import { createStore } from "redux";

const initialState = { count: 0

};

function countReducer (state = initialState, action) {
  switch(action.type) {
    case "INCREMENT":
      return{count: state.count + 1};
    case "DECREMENT":
      return{ count: state.count - 1};
    default:
      return state;
  }
}

const store = createStore(
  countReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;