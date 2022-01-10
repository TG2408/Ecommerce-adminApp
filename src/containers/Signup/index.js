import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Layout from "../../components/Layout";
import Input from '../../components/UI/Input';

const Signup = (props) => {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input 
                    label='First Name' 
                    type="text" 
                    placeholder="firstname" 
                    value=""
                    onChange={() => {}}
                  />
                </Col>
                <Col md={6}>
                  <Input 
                    label='Last Name' 
                    type="text" 
                    placeholder="lastname"
                    value=""
                    onChange={() => {}} 
                  />
                </Col>
              </Row>
              <Input
                label='Email address' 
                type="email" 
                placeholder="Enter email" 
                errorMessage="We'll never share your email with anyone else."
                value=""
                onChange={() => {}}
              />
              <Input 
                label='Password' 
                type="password" 
                placeholder="Password"
                value=""
                onChange={() => {}} 
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signup;
