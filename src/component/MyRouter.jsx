import React from 'react'
import {Switch, Route} from 'react-router-dom';
import About from './About';
import App from '../App';

function MyRouter() {
    return (
        <Switch>
            <Route path="/about" component={About}></Route>
            <Route path="/" component={App} ></Route>
        </Switch>
    )
}
export default  MyRouter;