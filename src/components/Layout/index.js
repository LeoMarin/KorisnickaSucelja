import React, { Component } from "react";
import { SiteContainer } from "components";
import Main from "./Main";
import Header from "./Header";
import MenuButton from "./MenuButton";
import SideMenu from "./SideMenu";
import Overlay from "./Overlay";
import "styles/index.css";
import {Helmet} from "react-helmet";
import logo from "static/logo.png"

class Layout extends Component {
  state = {
    showSideMenu: false
  };

  componentDidUpdate(prevProps, prevState) {
    const { showSideMenu } = this.state;
    if (prevState.showSideMenu !== showSideMenu) {
      document.body.className = showSideMenu ? "open" : "closed";
    }

    const { pathname: prevPathname } = prevProps.location;
    const { pathname: newPathname } = this.props.location;
    if (prevPathname !== newPathname) {
      this.setState({ showSideMenu: false });
    }
  }

  showMenu = () => {
    this.setState({ showSideMenu: !this.state.showSideMenu });
  };

  render() {
    const { children } = this.props;
    const status = this.state.showSideMenu ? "open" : "closed";

    return (
      <SiteContainer>        
        <Helmet>
          <link rel="icon" type='image/png' href={logo} />
        </Helmet>
        <Header />
        <MenuButton status={status} onClick={this.showMenu} />
        <Overlay status={status} onClick={this.showMenu} />
        <SideMenu status={status} />
        <Main>{children}</Main>
      </SiteContainer>
    );
  }
}

export default Layout;
