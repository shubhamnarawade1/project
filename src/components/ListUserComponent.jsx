import React, { Component } from 'react';
import UserService from '../services/UserService';

class ListUserComponent extends Component {
   constructor(props){
       super(props)
       this.state={
           user: []
       }
   }
   
   componentDidMount ()
   {
        UserService.getuser().then((res) => {
            this.setState({ user:res.data});
        });
   }

    render() {
        return (
            <div>
              <h2 className="text-center">User List</h2> 
              <div className="row">
                  <table className="table table-striped table-bordered">
                         <thead>
                             <tr>
                                 <th>User Id</th>
                                 <th>User first name</th>
                                 <th>User last name</th>
                                 <th>User email </th>
                                 <th>User contact</th>
                                 <th>user role</th>
                                 

                             </tr>
                         </thead>

                         <tbody>
                           {
                               this.state.user.map(
                                   user=>
                                   <tr key={user.id}>
                                  <td>{user.id}</td>
                                   <td>{user.firstName}</td>
                                   <td>{user.lastName}</td>
                                   <td>{user.emailId}</td>
                                   <td>{user.contact_number}</td>
                                   <td>{user.user_role}</td>
                                    </tr>
                               )
                           }
                         </tbody>
                  </table>
                  </div> 
            </div>
        );
    }
}

export default ListUserComponent;