import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { WrapperContent } from '../../containers/Wrapper/Wrapper';
import { createPostThunk } from '../../store/users/thunks';
import Header from '../../containers/Header';
import InputWrapper from '../../components/InputWrapper';
import { ToggleButton } from '../../components/Button/Button';
import Input from '../../components/Input';
import { imgErrors } from '../../constants/validation';

const CreatePost = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const { register, handleSubmit, errors, setError } = useForm();
  const goToProfile = () => history.push('/profile');

  const onSubmit = ({ file, title }) => {
    const image = file[0];
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);

    if (image.size > 2e6) {
      setError("file", {
        type: "filesize",
        message: "File size should be less than 2 Mb"
      });
      return;
    }

    dispatch(createPostThunk({ formData, goToProfile }))
    
  }

  return (
    <>
      <Header />
      <WrapperContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper error={errors.file || ''}>
            <Input
              type="file"
              name="file"
              invalid={'file' in errors}
              ref={register(imgErrors())}
            />
          </InputWrapper>

          <InputWrapper error={errors.title || ''}>
            <Input
              type="text"
              name="title"
              placeholder="What do you think about?"
              invalid={'title' in errors}
              ref={register({ required: true })}
            />
          </InputWrapper>

          <ToggleButton>Give To The World</ToggleButton>
        </form>
      </WrapperContent>
    </>
  );
}

export default CreatePost;