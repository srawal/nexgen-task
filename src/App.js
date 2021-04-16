import React, { Component } from 'react';
import { Row } from './Components/Row';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee_name: ''
      , employee_salary: '',
      employee_age: '',
      employeeDetails: [],
      searchString: ''
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { employee_name, employee_salary, employee_age, employeeDetails } = this.state;
    if (this.submitInput.value == 'Submit') {
      const obj = { employee_name, employee_salary, employee_age };
      this.setState({ employeeDetails: [...employeeDetails, obj], employee_name: '', employee_salary: '', employee_age: '' });
    }
  }



  getRefVal = (inputVal) => {
    return (ref) => this[inputVal] = ref
  }

  handleChange = (event) => {
    debugger;
    this.setState({searchString:event.target.value});
  }

  getChangeVal = (key,e) => {
    this.setState({ [key]: e.target.value })
  }

 
  render() {
    const { employee_name, employee_salary, employee_age, employeeDetails,searchString } = this.state;
    var searchStringInfo = searchString.trim().toLowerCase();
    var getdetails = employeeDetails;
    if(searchStringInfo.length > 0){
      getdetails = getdetails.filter(function(name){
        return name.employee_name.toLowerCase().match( searchString );
      });
    }

    return (
      <div className="container">
        <input type="text" onChange={this.handleChange} placeholder="Search!" />
        <form className="form"  onSubmit={this.onSubmit}>
          <div className="-wrapper">
            <span className="name">Name</span>
            <input required type="text" ref={this.getRefVal('inputName')}
              onChange={(e)=>this.getChangeVal('employee_name',e)} 
                value={employee_name} placeholder="employee name" arial-describedby="name" />
          </div>

          <div className="wrapper">
            <span className="isalary">Salary</span>
            <input type="number" required ref={this.getRefVal('inputSalary')} 
              onChange={(e)=>this.getChangeVal('employee_salary',e)} 
              value={employee_salary}  placeholder="salary" arial-describedby="salary" />
          </div>

          <div className="wrapper">
          <span className="iinput-wrapper-Age">Age</span>
            <input type="number" required ref={this.getRefVal('inputAge')} 
              onChange={(e)=>this.getChangeVal('employee_age',e)} 
              value={employee_age} className="form-control" 
              placeholder="employee_age"
              aria-describedby="age" />
          </div>

            <div className="wrapper">
              <input type="submit" ref={this.getRefVal('submitInput')} value='Submit' />
          </div>
        </form>
        <div className="container" >
          <table className="table">
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Employee Salary</th>
                <th>Emaployee Age</th>
              </tr>
            </thead>
            <tbody>
              {getdetails.map((data, index) => {
                return <Row users={getdetails} data={data} key={data} row={index} />
              })}

            </tbody>
          </table>
        </div>
      </div>
    );
  }
}


export default App;               
