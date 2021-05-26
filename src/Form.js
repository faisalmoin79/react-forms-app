import React, { Component } from "react";

class Form extends Component {
  initialState = {
    name: "",
    job: "",
  };

  state = this.initialState;

  render() {
    console.log('render() is called...');
    const { name, job } = this.state;

    return (
      <form>
      <fieldset>
      <legend> Add New Resource</legend>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}
        />

        <label htmlFor="job">Role</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange}
        />

        <input type="button" value="Submit" onClick={this.submitForm} />
        </fieldset>
      </form>
    );
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state); // passing form state to the App method
     this.setState(this.initialState); // clear the form after submit
  };
}

export default Form;
