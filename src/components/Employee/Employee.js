import React from 'react';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import { NavLink } from 'react-router-dom';

const Employee = () => {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        fetch('/employeeData.json')
            .then(res => res.json())
            .then(data => setEmployees(data))
    }, []);

    return (
        <Container className="my-5">
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>image</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Details</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        employees.map(employee => (
                            <tr>
                                <td>{employee?.id}</td>
                                <td>image</td>
                                <td>{employee?.name}</td>
                                <td>{employee?.designation}</td>
                                <td>
                                    <NavLink
                                        to={`/employee/${employee?.id}`}
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "red"
                                        }}
                                    >
                                        details
                                    </NavLink>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default Employee;