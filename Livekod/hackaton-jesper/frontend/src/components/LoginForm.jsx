import { useState } from 'react';
import axios from 'axios';

function LoginForm({ setUser }) {
    const [ message, setMessage ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const user = { username, password };
        axios.post('http://localhost:8080/auth/login', user)
          .then(response => {
            setUser(response.data.data);
            setMessage('');
          })
          .catch(error => setMessage(error.response.data.error));
    }

  return (
    <>
        <h2>Login</h2>
        <form className="form">
            { message !== '' && <p>{ message }</p>}
            <input onChange={ (e) => setUsername(e.target.value) } type="text" placeholder="Username" />
            <input onChange={ (e) => setPassword(e.target.value) } type="password" placeholder="Password" />
            <button onClick={ handleLogin }>Login</button>
        </form>
    </>
  )
}

export default LoginForm
