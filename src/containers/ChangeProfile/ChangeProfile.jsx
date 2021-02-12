import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';
import InputWrapper from '../../components/InputWrapper';
import Input from '../../components/Input';
import { ToggleButton } from '../../components/Button/Button';
import { getCurrentUserSelector } from '../../store/users/selectors';
import { nameErrors, emailErrors, imgErrors } from '../../constants/validation';
import { changeCurrentUserThunk } from '../../store/users/thunks';
import NoImg from '../../images/icons/avatar.svg';


const ChangeProfile = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(getCurrentUserSelector);
  const [avaUrl, setAvaUrl] = useState(currentUser.avatar || '');
  const { register, errors, handleSubmit, setValue } = useForm();

  useEffect(() => {
    setValue("firstName", currentUser.firstName);
    setValue("surname", currentUser.surname);
    setValue("email", currentUser.email);
  }, [setValue, currentUser]);

  const onSubmit = ({ firstName, surname, email }) => {
    dispatch(changeCurrentUserThunk({
      firstName,
      surname,
      email,
      avatar: avaUrl
    }))
  }

  const handleChangeAva = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];    

    reader.onloadend = () => {
      setAvaUrl(reader.result);
    }

    reader.readAsDataURL(file)
  }

  return (
    <>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper
          className='change-avatar'
          forHtml="avatar"
          label={
            <img src={avaUrl || currentUser.avatar ? avaUrl || currentUser.avatar : NoImg} alt="Avatar" />
          }
          error={errors.file || ''}
        >
          <Input
            id="avatar"
            type="file"
            name="file"
            invalid={'file' in errors}
            onChange={handleChangeAva}
            ref={register(imgErrors(false))}
          />
        </InputWrapper>
        <InputWrapper className="change" label="First name" error={errors.firstName || ''}>
          <Input
            primary
            type="text"
            name="firstName"
            placeholder="Enter first name"
            invalid={'firstName' in errors}
            ref={register(nameErrors)}
          />
        </InputWrapper>

        <InputWrapper className="change" label="Surname" error={errors.surname || ''}>
          <Input
            primary
            type="text"
            name="surname"
            placeholder="Enter surname"
            invalid={'surname' in errors}
            ref={register(nameErrors)}
          />
        </InputWrapper>

        <InputWrapper className="edit" label="Email" error={errors.email || ''}>
          <Input
            primary
            type="email"
            name="email"
            placeholder="Enter your Email"
            invalid={'email' in errors}
            ref={register(emailErrors)}
          />
        </InputWrapper>
        <ToggleButton type="submit">Save changes</ToggleButton>
      </form>
    </>
  );
}

export default ChangeProfile;