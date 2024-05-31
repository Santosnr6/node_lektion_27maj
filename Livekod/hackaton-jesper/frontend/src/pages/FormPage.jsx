import LoginForm from "../components/LoginForm"
import RegisterForm from "../components/RegisterForm"

function FormPage({ setUser }) {
  return (
    <section className="form-wrapper">
        <LoginForm setUser={ setUser } />
        <RegisterForm />
    </section>
  )
}

export default FormPage
