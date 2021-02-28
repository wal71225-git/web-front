
import React from 'react'
import TestState from './component/UseState'
import TestReducer from './component/UseReducer'
function App() {
  return (
    <div className="App">
      <div>TestState<TestState /></div>
      <div>TestReducer<TestReducer /></div>
    </div>
  );
}

export default App;
