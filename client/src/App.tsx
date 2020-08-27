import React, {useEffect} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import {useRoutes} from "./router/routes";
import './App.css';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";
import {connect} from "react-redux";
import {ILocalStore, loginActionCreator, setCurrentUser} from "./store/action/currentUserAction";
import {getLocalStorage, isAuth} from "./services/auth.service";
import {Footer} from "./components/Navbar/footer";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root : {
            background: grey[200]
        },
        wrapper: {
          paddingTop: 60
        },
        content: {
            flex: '1 0 auto'
        },
        footer: {
            boxSizing: 'border-box',
            height: '100px',
            backgroundColor: '#eee',
            bordeTop: '1px solid #e0e0e0',
            paddingTop: '35px'
        }
    })
)


function App(props: any) {
    const classes = useStyles()
    const routes = useRoutes()
    useEffect(()=>{
        console.log('first download')
        if (isAuth()) {
            props.action.setCurrentUser(JSON.parse(getLocalStorage() as string))
        }

    },[])
    return (
        <div className={classes.root}>

            <div className={classes.wrapper}>
                <Router>
                    <Navbar/>
                    <div className={classes.content}>
                        {routes}
                    </div>
                    <footer>
                        <div className={classes.footer} >
                            <Footer />
                        </div>
                    </footer>


                </Router>
            </div>

        </div>
    );
}

function mapDispatchToProps(dispatch: any) {
    return {
        action: {
            setCurrentUser: (json: ILocalStore) => dispatch(setCurrentUser(json))
        }
    }
}

export default connect(null, mapDispatchToProps)(App);
