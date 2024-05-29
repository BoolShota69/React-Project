import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Functional Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Stateful Functional Component with Hooks
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

// Main Component
function App() {
  return (
    <div>
      <Welcome name="World" />
      <Counter />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
