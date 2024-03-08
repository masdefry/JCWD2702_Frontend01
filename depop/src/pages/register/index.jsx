import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const registerSchema = Yup.object().shape({
    firstName: Yup.string().required('Firstname is Required!'),
    lastName: Yup.string().required('Firstname is Required!'),
    email: Yup.string().email('Email Must be Valid!').required('Email is Required'),
    username: Yup.string().min(6, 'Username Must Have Minimum 6 Characters').required('Username is Required'),
    password: Yup.string().min(6, 'Password Must Have Minimum 6 Characters').required('Password is Required')
})

export default function Register(){
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
                    console.log(values)
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
                                    {
                                        console.log(dirty) // By Default False
                                    }
                                    <button type='submit'
                                        className='btn bg-black text-white w-full rounded-none my-3'
                                        disabled={!(dirty && isValid)}
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