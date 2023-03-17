import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { failureAlert, successAlert } from '../helpers/sweetalert';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const changeLoginFormHandler = (e) => {
    const { value, name } = e.target;
    const newLoginForm = {
      ...loginForm,
      [name]: value
    }
    setLoginForm(newLoginForm);
  }

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      const baseUrl = 'http://localhost:3000/'
      const response = await fetch(baseUrl + 'users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginForm)
      });
      if (!response.ok) throw await response.json();
      const { access_token } = await response.json();
      localStorage.access_token = access_token;
      navigate('/');
      successAlert('Logged in');
    } catch (error) {
      failureAlert(error.message);
    }
  }

  return (
    <div className='container vh-100 d-flex justify-content-center align-items-center'>
      <div className='card w-50 p-4'>
        <div className='d-flex justify-content-center'>
          <img src="https://cdn.discordapp.com/attachments/1069920314357727233/1086404041594114108/pngwing.com_8.png" alt="Logo"
          width={100}/>
        </div>
        <h3 className='mt-2 mb-4 fw-bold'>Sign in to your account</h3>
        <Form onSubmit={submitLogin} style={{textAlign: 'start'}}>
          <Form.Group className="mb-3" controlId="formLoginEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' onChange={changeLoginFormHandler}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formLoginPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' onChange={changeLoginFormHandler}/>
          </Form.Group>
          <Button variant="danger" type="submit" className='px-4 text-warning'>
            Sign In
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;