import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { failureAlert, successAlert } from '../helpers/sweetalert';

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
    try {
      const baseUrl = 'http://localhost:3000/'
      const response = await fetch(baseUrl + 'users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.access_token
        },
        body: JSON.stringify(registerForm)
      });
      if (!response.ok) throw await response.json();
      navigate('/login');
      successAlert('New admin account has been created');
    } catch (error) {
      failureAlert(error.message);
    }
  }

  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <div className='card w-50 p-4 mt-2'>
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
          <Button variant="danger" type="submit" className='px-4 text-warning'>
            Sign Up
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default RegisterPage;