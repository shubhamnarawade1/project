import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom'
import ListUserComponent from './components/ListUserComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import RegisterUser from './components/RegisterUser';
import index from './components';
import login from './components/login';
import Mcq from './components/Mcq';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div>
      <Router>
       
    <HeaderComponent/>
    
    <div className="container">
      <Switch> http://localhost:3000/user
      <Route path= "/" exact component={index}></Route>
      <Route path= "/user" component={ListUserComponent}></Route>
      <Route path= "/register" component={RegisterUser}></Route>
      <Route path= "/login" component={login}></Route>
      <Route path= "/mcq" component={Mcq}></Route>
      <Route path= "/contact" component={Contact}></Route>
      <Route path= "/about" component={About}></Route>

     
     </Switch>
     </div>
     <FooterComponent/>
  
     </Router>
    </div>
  );
}

export default App;
