import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  
  const [color, setColor] = useState(null);
  
  useEffect(() => {
    setColor(randomColor())
  }, [count])
  
  return (
    <div style={{ borderTop: `10px solid ${color}`}}>
      {count}
      <button onClick={() => setCount(currentCount => currentCount - 1)}>-</button>
      <button onClick={() => setCount(currentCount => currentCount + 1)}>+</button>
    </div>
  )
}

export default App;
