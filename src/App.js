import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Create from './components/Create';
import Added from './components/Added';
import Deleted from './components/Deleted';
import NotFound from './components/NotFound';
import './index.css';
import {BrowserRouter as Router ,Route, Switch } from 'react-router-dom'
import BlogDetails from './components/BlogDetails';

function App(){
      return (
        <Router>
        <div className='App'>
          <NavBar/>
          <div className='content'>
            <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>
              <Route path='/create'>
                <Create />
              </Route>
              <Route path='/blogs/:id'>
                <BlogDetails />
              </Route>
              <Route path='/add'>
                <Added />
              </Route>
              <Route path='/delete'>
                <Deleted />
              </Route>
              <Route path='*'>
                <NotFound />
              </Route>
              
            </Switch>
            </div>
        </div>  
        </Router>
      )
}

export default App;
