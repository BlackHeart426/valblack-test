import React, {Component} from "react";
import { Switch, Route, Redirect, RouteProps } from "react-router-dom";
import {TestPage} from "../pages/TestsPage";
import {HomePage} from "../pages/HomePage";
import {AuthPage} from "../pages/auth/AuthPage";
import {NonFoundPage} from "../pages/nonFound/NonFoundPage";
import AuthGuard from "../hoc/AuthGuard";

// const AuthGuard: React.FC<RouteProps> = ({component: Component, ...rest}) => {
//     const user = null;
//     return (
//         <Route
//             {...rest}
//             render={props => (!!user ? <Component {...props} /> : <Unauthorized />)}
//         />
//     );
// }
// function Adm
// inGuardedRoute(user: { id: number } | null) {
//     return () =>  ({component: Component, ...rest}) => {
//         return (
//             <Route
//                 {...rest}
//                 render={props => (!!user ? <Component {...props} /> : <Unauthorized />)}
//             />
//         );
//     }
// }

const Unauthorized: React.FC = () => {
    return <h1> Whoa there, partner. You don't have access to that page.</h1>;
};

export const useRoutes = (isAuthenticated: boolean) => {
    console.log('isAuth',isAuthenticated)
    const user = null;
    if (isAuthenticated) {
        return (
            <Switch>
                <Route exact path="/tests" component={TestPage}/>
                <Route exact path="/home" component={HomePage}/>
                <Route exact component={NonFoundPage}/>
                <Redirect to="/home"/>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/home" component={HomePage}/>
            <AuthGuard exact path="/tests" component={TestPage}/>
            <Route exact path="/auth" component={AuthPage}/>
            <Route exact component={NonFoundPage}/>
        </Switch>
    )
}
