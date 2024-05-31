import { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
  const [ message, setMessage ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = { username, password, email };
    axios.post('http://localhost:8080/auth/register', newUser)
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => setMessage(error.response.data.error));
  }


  return (
    <>
        <h2>Register</h2>
        <form className="form">
            { message !== '' && <p>{ message }</p>}
            <input onChange={ (e) => setUsername(e.target.value) } type="text" placeholder="Username" />
            <input onChange={ (e) => setPassword(e.target.value) } type="password" placeholder="Password" />
            <input onChange={ (e) => setEmail(e.target.value) } type="email"  placeholder="Email" />
            <button onClick={ handleRegister }>Register</button>
        </form>
    </>
  )
}

export default RegisterForm
