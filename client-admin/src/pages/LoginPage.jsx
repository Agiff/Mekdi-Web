import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

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

  const submitLogin = (e) => {
    e.preventDefault();
    localStorage.access_token = loginForm;
    navigate('/');
  }

  return (
    <div className='container'>
      <h1>Login</h1>
      <Form onSubmit={submitLogin}>
        <Form.Group className="mb-3" controlId="formLoginEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" onChange={changeLoginFormHandler}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLoginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" onChange={changeLoginFormHandler}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    </div>
  );
}

export default LoginPage;