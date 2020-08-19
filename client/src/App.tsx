import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import {useRoutes} from "./router/routes";
import {useAuth} from "./services/auth/auth.service";
import './App.css';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root : {
            background: grey[200]
        },
        content: {
            paddingTop: '60px'
        }
    })
)


function App() {
  const classes = useStyles()
  const routes = useRoutes()
  return (
      <div className={classes.root}>

          <div className={classes.content}>
              <Router>
                  <Navbar/>
                  {routes}
              </Router>
          </div>

      </div>
  );
}

export default App;
