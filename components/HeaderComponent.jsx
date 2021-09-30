import React, { Component } from 'react';

class HeaderComponent extends Component {

    constructor(props){
        super(props)
        this.state={
            user: []
        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="text-muted">
                    <div>
                        
                      <center>
                      <h1>Exam Portal</h1>
                      <hr></hr>
                      </center>
                    </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;