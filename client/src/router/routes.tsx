import React from "react";
import { Switch, Route } from "react-router-dom";
import TestList from "../pages/testList/TestList";
import {HomePage} from "../pages/home/HomePage";
import {AuthPage} from "../pages/auth/AuthPage";
import {NotFoundPage} from "../pages/notFound/NotFoundPage";
import {HomeAdminPage} from "../modules/admin/pages/homeAdmin/HomeAdminPage";
import {TestsPageAdmin} from "../modules/admin/pages/testsAdmin/TestsPageAdmin";
import {AuthAdminPage} from "../modules/admin/pages/authAdmin/AuthAdminPage";
import AuthAdminGuard from "../hoc/AuthAdminGuard";
import AuthGuard from "../hoc/AuthGuard";
import TestInfo from "../pages/testInfo/TestInfo";
import Profile from "../pages/profile/Profile";
import PassingTest from "../pages/passingTest/PassingTest";
import ResultTest from "../pages/resultTest/ResultTest";

export const useRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/home" component={HomePage}/>
            <Route exact path="/tests" component={AuthGuard(TestList)}/>
            <Route exact path="/profile/" component={AuthGuard(Profile)}/>
            {/*<Route exact path="/profile/passed-tests" component={AuthGuard(Profile)}/>*/}
            {/*<Route exact path="/profile/settings" component={AuthGuard(Profile)}/>*/}
            <Route exact path="/t/:id" component={AuthGuard(TestInfo)}/>
            <Route exact path="/pt/:id" component={AuthGuard(PassingTest)}/>
            <Route exact path="/rt/:id" component={AuthGuard(ResultTest)}/>
            <Route exact path="/auth" component={AuthPage}/>
            <Route exact path="/admin" component={HomeAdminPage}/>
                <Route exact path="/admin/home" component={HomeAdminPage}/>
                <AuthAdminGuard exact path="/admin/testInfo" component={TestsPageAdmin}/>
                <Route exact path="/admin/auth" component={AuthAdminPage}/>
            <Route exact component={NotFoundPage}/>
        </Switch>
    )
}
