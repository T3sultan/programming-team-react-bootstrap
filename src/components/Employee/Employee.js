import React from 'react';
import { useEffect, useState } from 'react';
import { Container, Form, FormControl } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import { NavLink } from 'react-router-dom';

const Employee = () => {
    const [employees, setEmployees] = useState([]);
    //match employee
    const [matchEmployee, setMatchEmployee] = useState([]);

    //input change receive handler
    const handleSearch = event => {
        const searchValue = event.target.value.toLowerCase();
        const matchEployee = employees.filter(employee => employee.name.toLowerCase().includes(searchValue))
        setMatchEmployee(matchEployee)

    }
    useEffect(() => {
        fetch('/employeeData.json')
            .then(res => res.json())
            .then(data => {
                setEmployees(data)
                setMatchEmployee(data)
            
             } )
    }, []);

    return (
        <Container className="my-5">
            <Form style={{ width: '400px' }} className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={handleSearch}
                />

            </Form>
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
                        matchEmployee.map(employee => (
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