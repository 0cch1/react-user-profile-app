import { useState } from 'react';
import { UserContext } from './UserContext';
import FormComponent from './FormComponent.jsx';
import DisplayComponent from './DisplayComponent.jsx';
import './App.css';


function App() {
  const [user, setUser] = useState(null);

  console.log("App is rendering.");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <h1>User Profile</h1>
        <FormComponent />
        <DisplayComponent />
      </div>
    </UserContext.Provider>
  );
}

export default App;

