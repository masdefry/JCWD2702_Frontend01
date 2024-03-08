import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
    usernameOrEmail: Yup.string().required('Username or Emai is Required'),
    password: Yup.string().required('Password is Required')
})