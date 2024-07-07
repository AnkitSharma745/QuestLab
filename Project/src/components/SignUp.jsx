// src/components/SignUp.jsx
import React, { useContext, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const SignUp = () => {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        await signup(values.email, values.password);
        setSubmitting(false);
        navigate('/');
      }}
    >
      <Form className="auth-form">
        <label htmlFor="email">Email</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" component="div" />

        <label htmlFor="password">Password</label>
        <div className="password-container">
          <Field name="password" type={showPassword ? 'text' : 'password'} />
          <button type="button" onClick={togglePasswordVisibility}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <ErrorMessage name="password" component="div" />

        <button type="submit">Sign Up</button>
      </Form>
    </Formik>
  );
};

export default SignUp;
