import React from "react";
import { Link, navigate } from "gatsby"
import styles from "./styles.module.css"
import { Background } from "components"
import { handleLogin, isLoggedIn } from "src/utils/auth"
import LoginForm from "./LoginForm"
import cn from "classnames";

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
    bShowError: false
  }

  handleUpdate(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    if(!handleLogin(this.state)){
      this.setState({
        bShowError: true
      })
    }
    else{
      navigate(`/account/profile`)
    }
  }

  render() {
    const status = this.state.bShowError ? "open" : "closed";
    if (isLoggedIn()) {
      navigate(`/account/profile`)
    }

    return (
      <>
        <Background />
        <div className={styles.loginForm}>
          <div className={cn(styles[status], styles.error)}>Invalid username or password.</div>
          <LoginForm
            handleUpdate={e => this.handleUpdate(e)}
            handleSubmit={e => this.handleSubmit(e)}
          />
          <Link 
            to="/account/register"
            className={styles.registerLink}
          >
            Don't have an account? Register now!
          </Link>
        </div>

      </>
    )
  }
}

export default Login
