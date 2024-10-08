import { useReducer} from 'react';

function App() {
  const [state,dispatch] = useReducer(reducer,{count:0})

  // const initValue=0

function reducer(state,action){
  if (action.type === 'increment'){
    return {...state,count:state.count+ action.payload}
  } 
  if (action.type == 'decrement'){
    return {...state,count:state.count- action.payload}

  }}


  return (
    <div className="App">

      <h1>Use Reducer {" "}{state.count}</h1>
      <button onClick={() =>dispatch({type:"increment", payload:5})}>Increment</button>
      <button onClick={() =>dispatch({type:"decrement",payload:3})}>Decrement</button>

    </div>
  )
}

export default App
