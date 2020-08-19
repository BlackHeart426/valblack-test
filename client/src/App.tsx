import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {useRoutes} from "./router/routes";
import {useAuth} from "./services/auth.service";
import './App.css';
import 'materialize-css'

function App() {
  const {token} = useAuth() // Замена Context на Redux
  const isAuthenticated = !!token
  const routes = useRoutes(false)
  return (
    <Router>
      <div className="container">
        {routes}
      </div>
    </Router>
  );
}

export default App;
