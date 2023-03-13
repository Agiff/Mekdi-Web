import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
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
    <div className='py-1 px-3' style={{width: '25vw'}}>
      <h2>AKSES BARU KE MCDELIVERY</h2>
      <h6>Masuk dengan akun aplikasi McDonald's untuk mulai pesan</h6>
      <Form onSubmit={submitLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" name='email' placeholder="Email aplikasi McDonald's" onChange={changeLoginFormHandler}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" name='password' placeholder="Password" onChange={changeLoginFormHandler}/>
        </Form.Group>
        <div className='d-flex justify-content-between'>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Ingat saya" />
          </Form.Group>
          <a href="/" className='text-decoration-none'>Lupa Password?</a>
        </div>
        <Button variant="danger" type="submit" className='bg-gradient fs-3 w-100 fw-bold'>
          LOG MASUK
        </Button>
      </Form>
      <hr />
      <Button variant="light" type="submit" className='w-100 fw-semibold d-flex flex-column align-items-center'>
        <label className='fs-4' style={{cursor: 'pointer'}}>BUAT AKUN</label>
        <label style={{cursor: 'pointer'}}>KURANG DARI 2 MENIT</label>
      </Button>
      <p className='mt-3 fw-semibold'>Nikmati Keuntungan Anggota</p>
    </div>
  )
}

export default Login
