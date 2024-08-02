import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import SignupImg from '../../assets/auth/signup.svg';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/hooke';
import { loginAction } from '../../redux/store/actions/auth/loginUserAction';
import { toast } from 'sonner';
import LoadingIndicator from '../../component/common/loding/loadingIndicator';


const Login = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Must be at least 8 characters')
      .required('Required')
  
  });

  const dispatch = useAppDispatch()
  const navigate= useNavigate()
  const [isLoading,setLoading]=useState<any>(false)

  const handleSubmit = async (value:any)=>{
    setLoading(true)
     const response= await dispatch(loginAction(value))
     if(!response.payload.success){
      toast.error(response.payload.message||'Network error!')
      setLoading(false)
     }else{      
       toast.success('Logged successfully !')
       setLoading(false)
       navigate('/')

      }
  }
  return (


    <div className='flex flex-col md:flex-row h-screen justify-evenly bg-white  items-center md:p-0 p-7 font-Poppins'>
        <div className='flex justify-center items-center  w-full md:relative '>
        <img
          className="w-[65vh] 
          md:block max-w-md h-auto object-cover"
          src={SignupImg}
          alt="Sign Up Illustration"
        />

        </div>
        {isLoading&&<LoadingIndicator/>}
        <div className='flex justify-center  items-center w-full md:relative '>
        
        <div className="w-full max-w-md mx-auto  shadow-lg rounded-lg p-10 ">
          <div className="text-center h-auto">
            <h2 className="mt-3 text-2xl font-extrabold text-purple-600">
              Sign in
            </h2>
          </div>
          <div className="mt-3">
            <Formik
              initialValues={{  email: '', password: '' }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log('Form Data', values);
                handleSubmit(values)
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-2">
                 
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      className="block w-full px-3 py-1 placeholder-gray-400 border-b bg-white border-gray-300  focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
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
                      className="block w-full px-3 py-1 placeholder-gray-400 border-b bg-white border-gray-300   focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    />
                    <ErrorMessage
                      name="password"
                      component="small"
                      className="text-red-500 text-sm"
                    />
                  </div>
                 
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex justify-center py-2 px-4 border-b border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r to-purple-700 from-purple-800  hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    >
                      Login
                    </button>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      If you have an account,{' '}
                      <a onClick={()=> navigate('/signup')}  className="font-medium text-purple-600 hover:text-purple-500">
                        sign up 
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

export default Login;
