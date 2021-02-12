import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registrationThunk } from '../../store/users/thunks';
import Input from '../../components/Input';
import { Button } from '../../components/Button/Button';
import InputWrapper from '../../components/InputWrapper';
import { loginErrors, emailErrors, passwordErrors } from '../../constants/validation';
import { FormAuth, FormAuthTitle, AuthLink } from '../../containers/Auth/styled';
import { routes } from '../../constants/routes';

const Registration = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();

  const goToLogin = () => {
    history.push('/login');
  }

  const onSubmit = ({ login, email, password }) => {
    dispatch(registrationThunk({ login, email, password}, goToLogin))
  }

  return (
    <>
      <FormAuth onSubmit={handleSubmit(onSubmit)}>
        <FormAuthTitle>Sing Up</FormAuthTitle>
        <InputWrapper label="Login" error={errors.login}>
          <Input
            className="auth"
            type="text"
            name="login"
            placeholder="Enter your login"
            invalid={'login' in errors}
            ref={register(loginErrors)}
          />
        </InputWrapper>
        <InputWrapper label="Email" error={errors.email}>
          <Input
            className="auth"
            type="email"
            name="email"
            placeholder="Enter your Email"
            invalid={'email' in errors}
            ref={register(emailErrors)}
          />
        </InputWrapper>
        <InputWrapper mb label="Password" error={errors.password}>
          <Input
            className="auth"
            type="password"
            name="password"
            placeholder="Enter your password"
            invalid={'password' in errors}
            ref={register(passwordErrors)}
          />
        </InputWrapper>
        <Button type="submit">Sing Up</Button>
      </FormAuth>
      <AuthLink>
        Already have an account?!<Link to={routes.login.path} >Login</Link>
      </AuthLink>
    </>
  );
}

export default Registration;