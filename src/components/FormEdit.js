import React, {Component} from 'react';

class FormEdit extends Component{
  constructor(props){
    super(props);

    //properties
    this.state = {
      firstname: props.firstname,
      lastname: props.lastname,
      editCondition: false,
    }

    ///preserve the initial state in a new object
    this.baseState = this.state

    //binding functions
    this.Edit = this.Edit.bind(this);
    this.Save = this.Save.bind(this);
    this.Cancel = this.Cancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    /*
    this.handleFirstChange = this.handleFirstChange.bind(this);
    this.handleLastChange = this.handleLastChange.bind(this);
    */
  }
  
  //called when edit is clicked
  Edit = () => {this.setState({editCondition: true})}

  Save = () => {
    this.setState({
      editCondition: false
      })
  }

  Cancel = () => {
    this.setState(this.baseState)
    }
  
  /*
  //handler for firstname
  handleFirstChange(evt){
    this.setState({firstname: evt.target.value});
  }

  //handler for lastname
  handleLastChange(evt){
    this.setState({lastname: evt.target.value});
  }
  */

  //handler for first and last name
  handleChange(evt){
    this.setState({[evt.target.name]: evt.target.value});
  }
 
  render(){
    //if edit is not clicked then keep the information
    if (this.state.editCondition === false){
      return (
        <div className="formEdit">
          <div>
            <label>{this.state.firstname}</label>
          </div>

          <div>
           <label>{this.state.lastname}</label>
          </div>
          <button id="edit" onClick={this.Edit}> Edit </button>
        </div>
      );
    }
    //else if edit is clicked
    return (
      <form className="formEdit">
        <label>First Name:</label>
        <input type="text" name="firstname" onChange={this.handleChange}/>
        <label>Last Name: </label>
        <input type="text" name="lastname" onChange={this.handleChange}/> <br/>
        <button id ="save" onClick={this.Save}> Save </button> 
        <button id="cancel" onClick={this.Cancel}> Cancel </button>
      </form>
    );
  }
}



export default FormEdit;
