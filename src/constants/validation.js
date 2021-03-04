export const loginErrors = {
    required: {
      value: true,
      message: 'Login is required',
    },
  
    minLength: {
      value: 3,
      message: `Login should include at least 3 characters`
    },
  
    maxLength: {
      value: 16,
      message: 'Login must include no more than 16 characters'
    },
  
    pattern: {
      value: /^[a-zA-Z0-9_-]+$/,
      message: 'Login can include large and small latin characters and numbers'
    }
  }
  
  export const emailErrors = {
    required: {
      value: true,
      message: 'Email is required',
    },
  
    pattern: {
      value: !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: 'The email should look like this: \'example@mail.com\''
    }
  }
  
  export const passwordErrors = {
    required: {
      value: true,
      message: 'Password is required',
    },
  
    minLength: {
      value: 8,
      message: 'Password must include at least 8 characters'
    },
  
    maxLength: {
      value: 16,
      message: 'Password must include no more than 16 characters'
    },
  
    pattern: {
      value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      message: 'Password can include large and small latin letters and numbers'
    }
  }
  
  export const nameErrors = {
    maxLength: {
      value: 50,
      message: 'Name should include no more than 50 letters'
    },
  
    pattern: {
      value: /^[a-zA-Z ]+$/,
      message: 'Name can include large and small latin letters'
    }
  }

  export const commentErrors = {
    required: {
      value: true,
      message: 'Field shouldn\'t be empty. Type something'
    },
    maxLength: {
      value: 100,
      message: 'Comment should include no more than 100 letters'
    }
  }
  
  export const imgErrors = (isRequired = true) => {
    return {
      required: {
        value: isRequired,
        message: 'Upload image',
      },
  
      pattern: {
        value: /^.*\.(jpg|JPG|jpeg|JPG|png|PNG)$/,
        message: 'Type of image must be jpg, jpeg or png'
      }
    }

  
  }