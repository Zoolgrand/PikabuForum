import { useState } from 'react';
import Forum from './components/Forum/Forum';
function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="App">
    <Forum/>
    </div>
  );
}

export default App;
