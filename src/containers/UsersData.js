import React, { Component } from 'react';

class UsersData extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {id: 1, firstname: 'Andres', lastname: 'Ramirez', email: 'gandres.ramirez@gmail.com'},
        {id: 2, firstname: 'Felipe', lastname: 'cardona', email: 'felipe@gmail.com'},
        {id: 3, firstname: 'Alex', lastname: 'Cardona', email: 'alex@gmail.com'},
      ]
    }
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default UsersData;