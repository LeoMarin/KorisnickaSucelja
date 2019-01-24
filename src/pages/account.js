import React from 'react'
import { Router } from "@reach/router"
import { Login, Register, Profile, Account } from "components"
import {Helmet} from "react-helmet";

const AccountPage = () => (
  <>
  
  <Helmet>
      <title>Worlds - Account</title>
    </Helmet>
  <Router>
    <Account path="/account/profile" component={Profile} />
    <Register path="/account/register" />
    <Login path="/account/login" />
  </Router>
  </>
)

export default AccountPage