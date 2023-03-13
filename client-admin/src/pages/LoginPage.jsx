import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginPage = () => {
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
    console.log(loginForm);
  }

  return (
    <>
      <h1>Login</h1>
      <Form onSubmit={submitLogin}>
        <Form.Group className="mb-3" controlId="formLoginEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" onChange={changeLoginFormHandler}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLoginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" onChange={changeLoginFormHandler}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    </>
  );
}

export default LoginPage;