import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import SidebarNav from "./nav/SidebarNav";
import MainNav from "./nav/MainNav";
import Footer from "./Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Profile from "../admin/profile/Profile";


class App extends Component {
    render() {
        return (
            <Router>
                <div className="wrapper">
                    <SidebarNav/>
                    <div className="main">
                        <MainNav/>
                        <main className="content">
                            <Switch>
                                <Route path="/">
                                    {/*<Span data="abasdasdnkjashkd"/>*/}
                                </Route>
                                <Route path="/profile">
                                    <Profile/>
                                </Route>
                            </Switch>
                        </main>
                        <Footer/>
                    </div>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
