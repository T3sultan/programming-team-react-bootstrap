import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useParams } from "react-router-dom";
const SingleEmployee = () => {
    const [employeesDetails, setEmployeeDetails] = useState([]);
    const [singleEmployee, setSingleEmployee] = useState({});
    const { id } = useParams();
    useEffect(() => {
        fetch('/employeeDetails.json')
            .then(res => res.json())
            .then(data => setEmployeeDetails(data.employee))
    }, []);
    useEffect(() => {
        const foundEmployee = employeesDetails.find(employee => employee.login.id === id);
        setSingleEmployee(foundEmployee)
    }, [employeesDetails])
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={singleEmployee?.picture?.thumbnail} />

                    </Card>
                </Col>
                <Col md={5}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{singleEmployee?.name}</Card.Title>
                            <Card.Text>
                               <b>Email: {singleEmployee?.email}</b>
                               <b>Phone: {singleEmployee?.phone}</b>
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                </Col>

            </Row>
        </Container>

    );
};

export default SingleEmployee;