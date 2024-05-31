import { useState } from 'react';
import ProfilePage from './pages/ProfilePage';
import FormPage from './pages/FormPage';

function App() {
  const [ user, setUser ] = useState(null);

  return (
    <div className="app">
      {
        user ?
        <ProfilePage user={ user } setUser={ setUser } />
        :
        <FormPage setUser={ setUser } />
      }
    </div>
  )
}

export default App
