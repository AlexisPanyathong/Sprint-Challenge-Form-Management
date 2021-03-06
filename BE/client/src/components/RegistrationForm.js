import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { RegisterForm, Button } from './StyledWidgets';

const RegistrationForm = ({errors, touched, status}) => {
    const [users, setUsers] = useState([]);
    console.log(users);

    useEffect(() => {
       if(status) {
            setUsers([...users, status]);
        }
    }, [status]);

    function clickHandler(event) {
        event.target.style.background= '#0A235C';
        event.target.style.color= '#F5F5F5';
        event.target.style.width= '60%';
        

    }

    return (
        <div className="user-form">
            
            <RegisterForm>
                <Form>
                    <Field type="text" name="username" placeholder="username" />
                    {touched.username && errors.username && (
                        <p className="error">{errors.username}</p>
                    )}

                    <Field type="password" name="password" placeholder="password" />
                    {touched.password && errors.password && (
                        <p className="error">{errors.password}</p>
                    )}

                    
                    <Button onClick={event => clickHandler(event)} type="submit">Submit</Button>
                    
                </Form>
            </RegisterForm>
            
        </div>
    )
}

const FormikRegistrationForm = withFormik({
    mapPropsToValues({username, password}) {
        return {
            username: username || '',
            password: password || ''
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required('* Required to have a username'),
        password: Yup.string().required('* Required to have a password')
    }),

    handleSubmit(values, {setStatus}) {
        axios.post('http://localhost:5000/api/register', values)
        //handle success
        .then(res => {
            setStatus(res.data);
        })
        //handle error
        .catch(err => console.log('Error, please try again', err.response));

    }
})(RegistrationForm);

export default FormikRegistrationForm;