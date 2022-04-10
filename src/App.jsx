import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Cart from './Pages/Cart/Cart';

const App = () => {
    return (
        <>
            <div className="container">
                <Router>
                    <Switch>
                        <Route path='/cart'><Cart /></Route>
                        <Route expact path='/' ><Home /></Route>
                        <Redirect to='/' />
                    </Switch>
                </Router>
            </div>
        </>
    )
}

export default App