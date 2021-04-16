import React, { Component } from "react";
export class Row extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<tr>
				<td>{this.props.data.employee_name}</td>
				<td>{this.props.data.employee_salary}</td>
				<td>{this.props.data.employee_age}</td>
			</tr>
			
		);
	}
}
