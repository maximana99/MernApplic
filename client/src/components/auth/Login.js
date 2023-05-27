import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const {email, password} = formData;

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  const onSubmit = async e => {
    e.preventDefault();
    console.log('Succes');
    
  }

 
  return (
    <Fragment>
      <div style={{ }}>
        <h1 className="large text-primary">Sign in</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Sing into Your Account
        </p>
        <form className="form" onSubmit={e => onSubmit(e)
        }>
          <div className="form-group">
            <input type="email" placeholder="Email Address" name="email" value ={email} 
            onChange={e => onChange(e)}
            style={{ width: '50vw' }}
            required/>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value ={password} 
            onChange={e => onChange(e)}
            style={{ width: '50vw' }}
              minLength="6"
            />
          </div>
          <input type="submit" className="btn btn-primary" value="LogIn" />
        </form>
        <p className="my-1">
          Don't have an account? <Link to='/register'>Sign Up</Link>
        </p>
      </div>
    </Fragment>
  );
};

export default Login;