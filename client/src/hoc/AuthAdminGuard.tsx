import React, {Component} from 'react';
import { Switch, RouteComponentProps, Route, Redirect, RouteProps } from "react-router-dom";
import {HomePage} from "../pages/home/HomePage";
import {NotFoundPage} from "../pages/notFound/NotFoundPage";

export const AuthAdminGuard: React.FC<RouteProps> = ({component: Component, ...rest}) => {
    if (!Component) {
        return null;
    }
    const user = true // Получение из Redux
    return (
        <Route
            {...rest}
            render={(props: RouteComponentProps<{}>) => (!!user ? <Component {...props} /> : <NotFoundPage/>)}
        />
    );
};

export default AuthAdminGuard;
