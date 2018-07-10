import React, { Component } from 'react'

export default class UserForm extends Component{
  render(){
    return ( 
      <form onSubmit={this.props.onAddUser}>
          <input type="text" placeholder="Nombre" name="firstname" />
          <input type="text" placeholder="Apellido" name="lastname" />
          <input type="email" placeholder="Email" name="email" />
          <input type="submit" value="Guardar" />
      </form>
    );
  }
}