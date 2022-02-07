import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <Router>
      <div className="app">
        <Header />
        {/* header */}
        {/* header block */}
      </div>
    </Router>
  );
}

export default App;
