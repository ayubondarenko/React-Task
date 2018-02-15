/**
 * Created by alexander on 17.01.18.
 */
import React from 'react';
import {Redirect, Route, Switch} from 'react-router'
import Departments from './Departments.jsx'
import Employees from './Employees.jsx'

const Main = () => (
    <div>

        <Switch>
            <Redirect exact from="/" to="/departments"/>
            <Route exact path='/departments/' component={Departments}/>
            <Route exact path='/employees/' component={Employees}/>
        </Switch>
    </div>
);

export default Main
