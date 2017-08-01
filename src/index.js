import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import Home from './home';
import About from './about';
import Contact from './contact';
import { NavLink } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();
ReactDOM.render(<Router>
    <div>
     <div className="container">
          <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#">Rohinsha</a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">
                    <li><NavLink exact activeClassName="activeNav" to="/">Home <span className="sr-only">(current)</span></NavLink></li>
                    <li><NavLink activeClassName="activeNav" to="/about">About</NavLink></li>
                    <li><NavLink activeClassName="activeNav" to="/contact">Contact</NavLink></li>
                  </ul>
                </div>
              </div>
            </nav>


      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About} history={history}/>
      <Route path="/contact" component={Contact} history={history}/>
    </div>
          </div>

  </Router>, document.getElementById('root'));
registerServiceWorker();
