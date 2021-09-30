import React, { Component } from 'react';

class About extends Component {

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
                      <h1>About Us</h1>
                      <p>Exam Portal is known for best and excellent examination management system. With its automated system process, It helps to schedule and handle the examination much easier by reducing the time for the institute in scheduling the exam for all the classes, hall ticket generation, exam hall allocation, etc.

It gives up to date information on date, time, subjects, exam hall, reports, hall tickets, absent student lists, etc. which will be shared with every stakeholders based on their roles.

The examination management software for various organizations makes it much easier for the staff to manage and set exams systematically making them more productive. 

Hence, if you are looking for a examination management system for your school or institute, get in touch with our <a href="">contact us</a> page for communication with us.
                      </p>
                      <hr></hr>
                      </center>
            </div>
        );
    }
}

export default About;