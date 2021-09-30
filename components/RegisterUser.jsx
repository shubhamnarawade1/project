import React, { Component } from 'react';
import UserService from '../services/UserService';

class RegisterUser extends Component {
    constructor(props){
        super(props)
        this.state={
            firstname:'',
            lastname:'',
            emailId:'',
            password:'',
            confirm_password:'',
            contact_number:'',
            user_role:'',


        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changepasswordHandler = this.changepasswordHandler.bind(this);
        this.changeconfirm_passwordHandler = this.changeconfirm_passwordHandler.bind(this);
        this.changecontact_numberHandler = this.changecontact_numberHandler.bind(this);
        this.changeuser_roleHandler = this.changeuser_roleHandler.bind(this);

         this.registerUser = this.registerUser.bind(this);
    }
    registerUser=(s)=>{
        s.preventDefault();
        let user = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId,
            password: this.state.password,confirm_password: this.state.confirm_password,contact_number: this.state.contact_number,user_role: this.state.user_role};
        console.log('user => ' + JSON.stringify(user));
        
        UserService.registerUser(user).then(res =>{
          this.props.history.push("/");
        });
    }
    cancel(){
        this.props.history.push('/');
    }
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }
    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }
    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    changepasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    changeconfirm_passwordHandler= (event) => {
        this.setState({confirm_password: event.target.value});
    }

    changecontact_numberHandler= (event) => {
        this.setState({contact_number: event.target.value});
    }
    changeuser_roleHandler= (event) => {
        this.setState({user_role: event.target.value});
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                       
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                               
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changepasswordHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Confirm Paasword:</label>
                                            <input placeholder="Confirm Paasword" name="confirm_password" className="form-control" 
                                                value={this.state.confirm_password} onChange={this.changeconfirm_passwordHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Contact Number: </label>
                                            <input placeholder="Contact Number" name="contact_number" className="form-control" 
                                                value={this.state.contact_number} onChange={this.changecontact_numberHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> User Role:</label>
                                            <input placeholder="User Role" name="user_role" className="form-control" 
                                                value={this.state.user_role} onChange={this.changeuser_roleHandler}/>
                                        </div>
                                        

                                        <button className="btn btn-success" onClick={this.registerUser}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        );
    }
}

export default RegisterUser;