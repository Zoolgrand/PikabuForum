import Modal from './components/Modal/Modal';
import { useState } from 'react';
function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="App">
      {/* <button onClick={()=>setIsActive(true)}>show</button> */}
      <Modal isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
}

export default App;
