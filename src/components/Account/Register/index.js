import React from "react";
import { Link, navigate } from "gatsby"
import styles from "./styles.module.css"
import { Background } from "components"
import { handleRegister, isLoggedIn } from "src/utils/auth"
import RegisterForm from "./RegisterForm"

class Login extends React.Component {
  state = {
    username: ``,
    email: ``,
    password: ``,
    repeatPassword: ``
  }

  handleUpdate(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    handleRegister(this.state)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/account/profile`)
    }

    return (
      <>
        <Background />
        <div className={styles.registerForm}>
          <RegisterForm
            handleUpdate={e => this.handleUpdate(e)}
            handleSubmit={e => this.handleSubmit(e)}
          />
          <Link 
            to="/account/login"
            className={styles.registerLink}
          >
            Already have an account? Login now!
          </Link>
        </div>

      </>
    )
  }
}

export default Login
