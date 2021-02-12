import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Input from '../../components/Input';
import { ToggleButton } from '../../components/Button/Button';
import InputWrapper from '../../components/InputWrapper';
import { changePasswordThunk } from '../../store/users/thunks';
import { passwordErrors } from '../../constants/validation';



const ChangePassword = () => {
  const dispatch = useDispatch()
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = ({ password, confirmPassword }) => {
    if (password !== confirmPassword) {
      // alert('Passwords are not equavalent');
      return;
    }
    dispatch(changePasswordThunk({
      password,
      confirmPassword
    }))
  }

  return (
    <>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper className="change" label="New password" error={errors.password || ''}>
          <Input
            primary
            type="password"
            name="password"
            placeholder="Enter new password"
            invalid={'password' in errors}
            ref={register(passwordErrors)}
          />
        </InputWrapper>

        <InputWrapper className="edit" label="Confirm new password" error={errors.confirmPassword || ''}>
          <Input
            primary
            type="password"
            name="confirmPassword"
            placeholder="Confirm new password"
            invalid={'confirmPassword' in errors}
            ref={register(passwordErrors)}
          />
        </InputWrapper>

        <ToggleButton type="submit">Change password</ToggleButton>
      </form>
    </>
  );
}

export default ChangePassword;