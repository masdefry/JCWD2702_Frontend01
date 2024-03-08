import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
import { registerSchema } from '../../supports/schema/registerSchema';
import { useState } from 'react';


export default function Register(){
    const [isLoading, setIsLoading] = useState(false)

    const onHandleRegister = async(values) => {
        try {
            setIsLoading(true)
            const res = await axios.post('http://localhost:5000/users', values)
            toast.success('Register Success!')
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    return(
        <div className="flex flex-col items-center">
           <Formik
                initialValues={{
                    firstName: '',
                    lastName: '', 
                    email: '',
                    username: '', 
                    password: ''
                }}
                validationSchema={registerSchema}
                onSubmit={(values) => {
                    onHandleRegister(values)
                }}
           >
            
                    {
                        ({dirty, isValid}) => {
                            return(
    
                                    <Form>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text font-bold">Firstname</span>
                                        </div>
                                        <Field type="text" name='firstName' placeholder="Type here" className="input input-bordered w-full max-w-xs rounded-none" />
                                        <ErrorMessage 
                                            name='firstName'
                                            component={'div'}
                                            style={{ color: 'red' }}
                                        />
                                    </label>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text font-bold">Lastname</span>
                                        </div>
                                        <Field type="text" name='lastName' placeholder="Type here" className="input input-bordered w-full max-w-xs rounded-none" />
                                        <ErrorMessage 
                                            name='lastName'
                                            component={'div'}
                                            style={{ color: 'red' }}
                                        />
                                    </label>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text font-bold">Email</span>
                                        </div>
                                        <Field type="text" name='email' placeholder="Type here" className="input input-bordered w-full max-w-xs rounded-none" />
                                        <ErrorMessage 
                                            name='email'
                                            component={'div'}
                                            style={{ color: 'red' }}
                                        />
                                    </label>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text font-bold">Username</span>
                                        </div>
                                        <Field type="text" name='username' placeholder="Type here" className="input input-bordered w-full max-w-xs rounded-none" />
                                        <ErrorMessage 
                                            name='username'
                                            component={'div'}
                                            style={{ color: 'red' }}
                                        />
                                    </label>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text font-bold">Password</span>
                                        </div>
                                        <Field type="text" name='password' placeholder="Type here" className="input input-bordered w-full max-w-xs rounded-none" />
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
                                        Register
                                    </button>                    
                                    </Form>
   
                            )
                        }
                    }

           </Formik>
        </div>
    )
}