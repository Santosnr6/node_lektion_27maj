import axios from 'axios';

function ProfilePage({ user, setUser }) {

  const handleLogout = () => {
    axios.post('http://localhost:8080/auth/logout')
      .then(response => {
        if(response.data.success) {
          setUser(null);
        }
      })
      .catch(error => console.log(error));
  }

  return (
    <section className="profile">
      <h1>Profile Page</h1>
      <p>Welcome to your page, { user.username }!</p>
      <p>Email: { user.email }</p>
      <button onClick={ handleLogout }>Logout</button>
    </section>
    
  )
}

export default ProfilePage
