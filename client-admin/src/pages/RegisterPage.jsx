import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RegisterPage = () => {
  const [registerForm, setRegisterForm] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: ''
  });

  const changeRegisterFormHandler = (e) => {
    const { value, name } = e.target;
    const newRegisterForm = {
      ...registerForm,
      [name]: value
    }
    setRegisterForm(newRegisterForm);
  }

  const submitRegister = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(registerForm)
    });
  }

  return (
    <>
      <h1>Register</h1>
      <Form onSubmit={submitRegister}>
        <Form.Group className="mb-3" controlId="formRegisterUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name='username' placeholder="Username" onChange={changeRegisterFormHandler}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formRegisterEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" onChange={changeRegisterFormHandler}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formRegisterPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" onChange={changeRegisterFormHandler}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formRegisterPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" name='phoneNumber' placeholder="Phone Number" onChange={changeRegisterFormHandler}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formRegisterAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" name='address' placeholder="Address" onChange={changeRegisterFormHandler}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </>
  );
}

export default RegisterPage;