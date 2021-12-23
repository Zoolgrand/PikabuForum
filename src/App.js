import { useState } from 'react';
import User from './components/User/User';
function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="App">
      <User />
    </div>
  );
}

export default App;
