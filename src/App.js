import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Home from './pages/Home';
import News from './pages/News';
import Default from './pages/Default';
import SingleNews from './pages/SingleNews'
import Navbar from './Component/Navbar';

function App() {
  return (
   <Router>
    <main>
      <Navbar></Navbar>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/news" exact component={News} />
      <Route path="/news/:id" exact component={SingleNews} />
      <Route component={Default} />
      </Switch>      
    </main>
   </Router>
  );
}

export default App;
