import React, { Component } from 'react';
import LoginService from '../services/LoginService';

class login extends Component {
    constructor(props){
        super(props)
        this.state={
            emailId:'',
            password:'',
        }
        this.login=this.login.bind(this);
        this.changeidHandler=this.changeidHandler.bind(this);
        this.changepasswordHandler=this.changepasswordHandler.bind(this);
    }
    changeidHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    changepasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    login=(l)=>{
        l.preventDefault();
        let user = { emailId: this.state.emailId,
            password: this.state.password};
        console.log('user => ' + JSON.stringify(user));
        
         LoginService.loginUser(user).then(res =>{
           console.log(res.data);
           if(res.data.user_role==="student")
           this.props.history.push("/mcq");
           else if(res.data.user_role==="faculty")
           this.props.history.push("/user");
           else
           document.write("Invalid User");
         });
        //  McqServices.login(user).then(res =>{
        //     this.props.push("/mcq");
        //   });
         
    }

    cancel(){
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                
               <h1>Login</h1>
               <div>
                <br></br>
                   <div className = "container">
                       
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                               
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Email </label>
                                            <input placeholder=" email" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeidHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input type="password" placeholder="Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changepasswordHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.login}>Login</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

                                  </form>      
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
            </div>
        );
    }
}

export default login;