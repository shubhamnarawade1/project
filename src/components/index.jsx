import React, { Component } from 'react';
import UserService from '../services/UserService';

class index extends Component {
   constructor(props){
       super(props)
       this.state={
           user: []
       }
       this.loginUser=this.loginUser.bind(this);
       this.registerUser=this.registerUser.bind(this);
       this.viewUser=this.viewUser.bind(this);
       this.contact=this.contact.bind(this);
       this.about=this.contact.bind(this);
   }
   
   componentDidMount ()
   {
        UserService.getuser().then((res) => {
            this.setState({ user:res.data});
        });
   }
   
   registerUser(){
     this.props.history.push('/register');  
   }
   viewUser(){
    this.props.history.push('/user');  
   }
   loginUser(){
    this.props.history.push('/login');  
   }
   contact(){
    this.props.history.push('/contact');
   }
   about(){
    this.props.history.push('/about');
   }
   

    render() {
        return (

             <div className="row" >
                 <div align="center">
                 <button className="btn btn-primary" onClick={this.loginUser}>Login </button>
                 <button className="btn btn-primary" onClick={this.registerUser}>Register </button>
                 <button className="btn btn-primary" onClick={this.contact}>Contact Us </button>
                 <button className="btn btn-primary" onClick={this.about}>About Us </button>
                 </div>                 
                 <h1 align="center">
                    Welcome to the Exam Portal. 
                </h1>

                <p>
                    Here's a quick checklist:
                    <ol>
                        <li>Check your computer, make sure it's stable, clear your browsers cache, remove screen capture/video tools.</li>
                        <li> Make sure you have a stable, reliable network connection.</li>
                        <li>Be in a quiet room, clear your work-space, do not interact with other people taking exams</li>
                    </ol>
                </p>
            </div>
             
        );
    }
}

export default index;