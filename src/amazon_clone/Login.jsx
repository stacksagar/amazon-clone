import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AmazonBlack from './assets/images/amazon-black.png';
import { useContextValue } from './ContextReducer';
import Loading from './Loading';
import ValidationMsg from './ValidationMsg';
import './Login.css';
import { auth } from './firebase';

const Login = () => {
  const [state, dispatch] = useContextValue();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const changeHandler = (e) => {
    if (e.target.id === 'email') {
      setEmail(e.target.value);
      validation(e.target.value, password);
    }
    if (e.target.id === 'password') {
      setPassword(e.target.value);
      validation(email, e.target.value);
    }
  };

  const signIn = (e) => {
    e.preventDefault();
    const isValid = validation(email, password);
    if (isValid) {
      dispatch({ type: 'startLoading' });
      auth
        .signInWithEmailAndPassword(email, password)

        .then(() => {
          dispatch({ type: 'stopLoading' });
          setTimeout(() => {
            history.push('/');
          }, 10);
        })

        .catch((err) => {
          dispatch({ type: 'stopLoading' });
          setTimeout(() => {
            alert(err.message);
          }, 10);
        });
    }
  };

  const signup = () => {
    const isValid = validation(email, password);
    if (isValid) {
      dispatch({ type: 'startLoading' });
      auth
        .createUserWithEmailAndPassword(email, password)

        .then(() => {
          dispatch({ type: 'stopLoading' });
          setTimeout(() => {
            history.push('/');
          }, 10);
        })

        .catch((err) => {
          dispatch({ type: 'stopLoading' });
          setTimeout(() => {
            alert(err.message);
          }, 10);
        });
    }
  };

  function validation(email, password) {
    const checkIndex = email.lastIndexOf('.');
    const createErrors = {};

    if (
      !email.includes('@') ||
      !email.includes('.') ||
      email.length - 1 === checkIndex
    ) {
      createErrors.email = 'is-invalid';
    } else {
      createErrors.email = 'is-valid';
    }

    if (password.length < 6) {
      createErrors.password = 'is-invalid';
    } else {
      createErrors.password = 'is-valid';
    }
    setErrors(createErrors);

    return (
      createErrors.email === 'is-valid' && createErrors.password === 'is-valid'
    );
  }

  return (
    <div className="Login">
      {state.isLoading && <Loading />}
      <Link to="/">
        <img src={AmazonBlack} alt="" />
      </Link>
      <form onSubmit={signIn} className="login_area">
        <label htmlFor="email">
          <small>Email</small>
        </label>
        <input
          className={`form-control ${errors.email}`}
          onChange={changeHandler}
          type="email"
          id="email"
          value={email}
          placeholder="Email address"
        />

        <ValidationMsg
          isValid={errors.email && errors.email.includes('is-valid')}
          errorMessage="a valid email is required"
        />

        <label htmlFor="password" className="mt-3">
          <small>Password</small>
        </label>
        <input
          className={`form-control ${errors.password}`}
          onChange={changeHandler}
          type="password"
          id="password"
          value={password}
          placeholder="Your Password"
        />

        <ValidationMsg
          isValid={errors.password && errors.password.includes('is-valid')}
          errorMessage="a valid password is required (min 6 chars)"
        />

        <button type="submit" className="btn-warning btn-block mt-2">
          Sign in
        </button>

        <p className="my-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ipsa
          exercitationem doloremque aliquid!
        </p>

        <button type="button" onClick={signup} className="btn-light btn-block">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Login;
