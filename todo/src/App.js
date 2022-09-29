//import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/Home';
import Navbar from './components/layout/Navbar';
//import { RemoveDoneRounded } from '@mui/icons-material';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from './components/user/View';
import React from "react";

function App(props) {

      return(   
        <Router>
    <div className="App"> 
       <Navbar />
          <Home />
            <Routes> 
          <Route exact path="/" component={Home} />
          <Route exact path="/todes/:id" component={User} 
          />
          </Routes>
    </div> 
    </Router> 
       )     
     }


export default App;
