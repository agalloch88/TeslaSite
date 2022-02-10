import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Menu from "./Menu";
import HeaderBlock from "./HeaderBlock";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {isMenuOpen && <Menu />}
            <HeaderBlock />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
