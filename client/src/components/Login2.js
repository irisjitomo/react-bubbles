import React, {useState} from "react";
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Form, Field, withFormik } from 'formik';
import * as yup from 'yup';

const Login1 = (props) => {
    const {errors, touched} = props

    return (
        <div>
        <h1>Welcome to the Bubble App!</h1>
        <h2>Please Login</h2>
        <Form>
            <div>
            <Field type='text' name='username' placeholder='username'/>
            {touched.username && errors.username && <p>{errors.username}</p>}
            </div>
            <div>
            <Field type='password' name='password' placeholder='password'/>
            {touched.password && errors.password && <p>{errors.password}</p>}
            </div>

            <button type='submit'>Login</button>
        </Form>
        </div>
    );
}

const Login2 = withFormik({
    mapPropsToValues({username, password}) {
        return {
            username: username || '',
            password: password || ''
        };
    },
    validationSchema: yup.object().shape({
        username: yup.string().required("Username is needed"),
        password: yup.string().required('Password needed')
    }),
    handleSubmit(values, {props}){
        axiosWithAuth()
        .post('/login', values)
        .then(res => {
            // Setting Token to Local Storage
            localStorage.setItem('token', res.data.payload)
            // Setting Token to Cookies
            document.cookie = `token=${res.data.payload}; expires =` + new Date(2021, 0, 1)
            .toUTCString()
            props.history.push('/protected')
            console.log('hello', res)
        })
        .catch(err => console.log(err))
    }
})(Login1)


export default Login2