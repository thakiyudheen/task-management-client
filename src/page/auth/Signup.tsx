import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import SignupImg from '../../assets/auth/signup.svg';
import { useAppDispatch } from '../../hooks/hooke';
import { signupAction } from '../../redux/store/actions/auth/signupUserAction';
import { useNavigate } from 'react-router-dom';
import {toast} from 'sonner'

const SignUp = () => {
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Must be at least 8 characters')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Required')
  });

  const handleSubmit = async (values:any)=>{
    const response:any =await dispatch(signupAction(values))
    console.log(response.payload)
    if(response.payload&&!response?.payload?.success){
      toast.error(response?.payload?.message)
    }else{
      toast.success('Signup successfully !')
    }

  }
  const dispatch = useAppDispatch()
  const navigate= useNavigate()

  return (


    <div className='flex flex-col md:flex-row justify-evenly items-center bg-white  md:p-0 p-7 font-Poppins'>
        <div className='flex justify-center items-center  w-full  mt-[47px]'>
        <img
          className="w-[63vh] max-w-md h-auto object-cover"
          src={SignupImg}
          alt="Sign Up Illustration"
        />
        </div>
        <div className='flex justify-center items-center w-full'>
        
        <div className="w-full max-w-md mx-auto lg:w-96 ">
          <div className="text-center h-auto">
            <h2 className="mt-6 text-3xl font-extrabold text-purple-600">
              Sign Up
            </h2>
          </div>
          <div className="mt-8">
            <Formik
              initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
              validationSchema={validationSchema}
              onSubmit={async(values, { setSubmitting }) => {
                console.log('Form Data', values);
                handleSubmit(values)
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Username
                    </label>
                    <Field
                      type="text"
                      name="username"
                      className="block w-full px-3 py-1 placeholder-gray-400 border-b border-gray-300  focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    />
                    <ErrorMessage
                      name="username"
                      component="small"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      className="block w-full px-3 py-1 placeholder-gray-400 border-b border-gray-300  focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    />
                    <ErrorMessage
                      name="email"
                      component="small"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      className="block w-full px-3 py-1 placeholder-gray-400 border-b border-gray-300   focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    />
                    <ErrorMessage
                      name="password"
                      component="small"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Confirm Password
                    </label>
                    <Field
                      type="password"
                      name="confirmPassword"
                      className="block w-full px-3 py-1 placeholder-gray-400 border-b border-gray-300  focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="small"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex justify-center py-2 px-4 border-b border-transparent text-sm font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      If you have an account,{' '}
                      <a onClick={()=> navigate('/login')}  className="font-medium text-purple-600 hover:text-purple-500">
                        sign in
                      </a>
                    </p>
                  </div>
                  
                </Form>
              )}
            </Formik>
          </div>
        </div>
        </div>
    </div>
  );
};

export default SignUp;
