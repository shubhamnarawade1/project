import React, { Component } from 'react';

class Contact extends Component {

    constructor(props){
        super(props)
        this.state={
            user: []
        }
    }
    render() {
        return (
            <div>
                        
                      <center>
                      <h1>Contact Us</h1>
                      <p><h5>How Can We Help ? Reach Us via Email or Contact Number</h5><br/><br/><br/>
                      Email Id:examportal@gmail<br/>
                      Contact No:8888535324
                      </p>
                      <hr></hr>
                      </center>
            </div>
        );
    }
}

export default Contact;