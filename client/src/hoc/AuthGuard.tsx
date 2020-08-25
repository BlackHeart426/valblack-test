import React, {Component} from 'react';
import { RouteComponentProps, Route } from "react-router-dom";
import {NonFoundPage} from "../pages/nonFound/NonFoundPage";
import {connect} from "react-redux";

export default function (Component: any) {
    class AuthGuard extends React.Component<any, any> {
        render(): React.ReactNode {
            return (
                <Route
                    render={(props: RouteComponentProps<{}>) => (this.props.isAuthorized ? <Component {...props} /> : <NonFoundPage/>)}
                />
            )
        }
    }

    const mapStateToProps = (state: { currentUser: { data: { isAuthorized: any; }; }; }) => {
        return {
            isAuthorized: state.currentUser.data.isAuthorized,
        };
    };

    return connect(
        mapStateToProps
    )(AuthGuard);
}
