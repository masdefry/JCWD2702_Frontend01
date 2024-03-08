import { Formik, Form, Field } from 'formik';

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
                onSubmit={(values) => {
                    console.log(values)
                }}
           >
                <Form>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Firstname</span>
                        </div>
                        <Field type="text" name='firstName' placeholder="Type here" className="input input-bordered w-full max-w-xs rounded-none" />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Lastname</span>
                        </div>
                        <Field type="text" name='lastName' placeholder="Type here" className="input input-bordered w-full max-w-xs rounded-none" />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Email</span>
                        </div>
                        <Field type="text" name='email' placeholder="Type here" className="input input-bordered w-full max-w-xs rounded-none" />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Username</span>
                        </div>
                        <Field type="text" name='username' placeholder="Type here" className="input input-bordered w-full max-w-xs rounded-none" />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Password</span>
                        </div>
                        <Field type="text" name='password' placeholder="Type here" className="input input-bordered w-full max-w-xs rounded-none" />
                    </label>
                    <button type='submit'>
                        Register
                    </button>
                </Form>
           </Formik>
        </div>
    )
}