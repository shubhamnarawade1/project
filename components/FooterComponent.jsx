import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            user: []
        }
    }
    render() {
        return (
            <div>
               <footer className="footer">
                   <span className="text-muted">Exam Manegment System 2021 @Rishabh</span>
                   </footer> 
            </div>
        );
    }
}

export default FooterComponent;