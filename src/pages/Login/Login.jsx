import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../store/users/thunks';
import { loginErrors, passwordErrors } from '../../constants/validation';
import { FormAuth, FormAuthTitle, AuthLink } from '../../containers/Auth/styled';
import Input from '../../components/Input';
import { Button } from '../../components/Button/Button';
import InputWrapper from '../../components/InputWrapper';

import { routes } from '../../constants/routes';

const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = ({ login, password }) => {
    dispatch(loginThunk({
      login,
      password
    }))
  }

  return (
    <>
      
      <FormAuth onSubmit={handleSubmit(onSubmit)}>
        <FormAuthTitle>Sing In</FormAuthTitle>
        <InputWrapper label="Login" error={errors.login || ''}>
          <Input
            className="auth"
            type="text"
            name="login"
            placeholder="Enter your login"
            invalid={'login' in errors}
            ref={register(loginErrors)}
          />
        </InputWrapper>
        <InputWrapper mb label="Password" error={errors.password || ''}>
          <Input
            className="auth"
            type="password"
            name="password"
            placeholder="Enter your password"
            invalid={'password' in errors}
            ref={register(passwordErrors)}
          />
        </InputWrapper>
        <Button type="submit">Sing In</Button>
      </FormAuth>
      <AuthLink>
        Don't have an account yet? Go to <Link to={routes.registration.path}>Registration</Link>
      </AuthLink>
    </>
  );
}

export default Login;