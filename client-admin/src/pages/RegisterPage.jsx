import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [registerForm, setRegisterForm] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    role: 'admin'
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
    navigate('/login');
  }

  return (
    <div className='container vh-100 d-flex justify-content-center align-items-center'>
      <div className='card w-50 p-4'>
        <h1 className='mb-5'>Register</h1>
        <Form onSubmit={submitRegister} style={{textAlign: 'start'}}>
          <Form.Group className="mb-3" controlId="formRegisterUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name='username' onChange={changeRegisterFormHandler}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formRegisterEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' onChange={changeRegisterFormHandler}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formRegisterPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' onChange={changeRegisterFormHandler}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formRegisterPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" name='phoneNumber' onChange={changeRegisterFormHandler}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formRegisterAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" name='address' onChange={changeRegisterFormHandler}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default RegisterPage;