import React from "react";
import { Table } from 'react-bootstrap';

class ListHeader extends React.Component {

    state = {
        alphabetical: true,
        ascending: true,
        sortedEmployees: [],
        employees: []
    }

    componentDidMunt() {
        if (this.state.sortedEmployees.length < 1) {
            this.setState({
            
            })
        }
    }
}


function Directory(props) {
    return(
        <Table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
            </thead>
            <tbody>
                        <tr key={props.id} >
                            <td><img alt={props.image} src={props.image} /></td>
                            <td>{props.first} {props.last}</td>
                            <td>{props.phone}</td>
                            <td>{props.email}</td>
                            <td>{props.dob}</td>
                        </tr>
                    )
            </tbody>
        </Table>
    )
}

export default Directory;