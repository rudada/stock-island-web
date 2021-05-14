import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./App.scss";

import Home from "./pages/Home";
import Board from "./pages/Board";
import Weekly from "./pages/Weekly";
import Mypage from "./pages/Mypage";
import LogIn from "./containers/auth/LogIn";
import SignUp from "./containers/auth/SignUp";
import Search from "./pages/Search";
import NavigationBar from "./pages/NavigationBar";

function App() {
  
  return (
    <Router>
      <NavigationBar></NavigationBar>
      <div className="wrapper">
        <Route exact path="/" component={Home} />
        <Route path="/board" component={Board} />
        <Route path="/weekly" component={Weekly} />
        <Route path="/mypage" component={Mypage} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/search/:keyword" component={Search} />
      </div>
    </Router>
  );
}

export default App;
