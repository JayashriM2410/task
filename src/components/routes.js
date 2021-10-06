// Routes Component

import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import PersonalDetails from "../components/personal_details.js";
import CompanyDetails from "../components/company_detail.js";
import EmailVerification from "../components/email_verification.js";
import history from './history';

function Routes() {
    return (
        <div className="root">
                    <Router history={history}>
                        <Switch>
                            <Route path='/' exact component={PersonalDetails} />
                            <Route path='/CompanyDetails' component={CompanyDetails} />
                            <Route path='/EmailVerification' component={EmailVerification} />
                         </Switch>
                    </Router>
            </div>   
        );
}

export default Routes;
