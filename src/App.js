
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

 class App extends Component {
   
  render() {
    return (
      <>
      <Router>

       <Navbar/>
      <Routes>
        <Route path="/" element={<News key={"general"} pageSize={20} category={"general"}/>}/>
        <Route path="/business" element={<News key={"business"} pageSize={20} category={"business"}/>}/>
        <Route path="/entertainment" element={<News key={"entertainment"} pageSize={20} category={"entertainment"}/>}/>
        <Route path="/health" element={<News key={"health"} pageSize={20} category={"health"}/>}/>
        <Route path="/science" element={<News  key={"science"}pageSize={20} category={"science"}/>}/>
        <Route path="/sports" element={<News key={"sports"} pageSize={20} category={"sports"}/>}/>
        <Route path="/technology" element={<News key={"technology"} pageSize={20} category={"technology"}/>}/>

      </Routes>
      
      </Router>
       
      
      </>
    )
  }
}


export default App;
