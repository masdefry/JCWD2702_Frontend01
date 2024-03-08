import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { loginSchema } from '../../supports/schema/loginSchema';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { userContext } from '../../supports/context/useUserContext';

export default function LoginPage(){
    const [isLoading ,setIsLoading] = useState(false)
    const {setUserData} = useContext(userContext)

    const onHandleLogin = async(values, resetForm) => {
        try {
            setIsLoading(true)
            let findEmail
            if(values.usernameOrEmail.includes('@')){
                findEmail = await axios.get(`http://localhost:5000/users?email=${values.usernameOrEmail}&password=${values.password}`)
            }else{
                findEmail = await axios.get(`http://localhost:5000/users?username=${values.usernameOrEmail}&password=${values.password}`)
            }
            
            if(findEmail.data.length === 0) throw new Error('Login Failed!')
            console.log(findEmail.data[0].username)
            toast.success('Login Success')
            setUserData(findEmail.data[0].username)
        } catch (error) {
            toast.error(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    return(
        <div className="flex flex-col items-center">
           <Formik
                initialValues={{
                    usernameOrEmail: '', 
                    password: ''
                }}
                validationSchema={loginSchema}
                onSubmit={(values, {resetForm}) => {
                    onHandleLogin(values, resetForm)
                }}
           >
            
                    {
                        ({dirty, isValid}) => {
                            return(
    
                                    <Form>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text font-bold">Username or Email</span>
                                        </div>
                                        <Field type="text" name='usernameOrEmail' className="input input-bordered w-full max-w-xs rounded-none" />
                                        <ErrorMessage 
                                            name='usernameOrEmail'
                                            component={'div'}
                                            style={{ color: 'red' }}
                                        />
                                    </label>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text font-bold">Password</span>
                                        </div>
                                        <Field type="text" name='password' className="input input-bordered w-full max-w-xs rounded-none" />
                                        <ErrorMessage 
                                            name='password'
                                            component={'div'}
                                            style={{ color: 'red' }}
                                        />
                                    </label>
                                    <button type='submit'
                                        className='btn bg-black text-white w-full rounded-none my-3'
                                        disabled={!(dirty && isValid) || isLoading}
                                    >
                                        Login
                                    </button>                    
                                    </Form>
   
                            )
                        }
                    }
           </Formik>
        </div>
    )
}