import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useAuth } from "../../context/authProvider";



const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(4),
  });

export const SignIn: React.FC = () => {
    const [loginSuccess, setLoginSuccess] = useState<boolean>(false);
    const [isValidatedUser, setIsValidatedUser] = useState<string>()
    const navigate = useNavigate();
    
    const initialValues = {
        email: '',
        password: '',

      };
      const { login }: any = useAuth;
      const onSubmit = (values: any, { resetForm }: FormikHelpers<any>) => {
       
        const userData: any = localStorage.getItem('authentication') || [];

        
       
        if (userData) {
            const parseData = JSON.parse(userData);
 
            const userIndex = parseData.findIndex((user: any) => user.email === values.email && user.password === values.password);
            if (userIndex !== -1) {
                parseData[userIndex].status = true;
                localStorage.setItem('authentication', JSON.stringify(parseData));
                localStorage.setItem('currentUser', JSON.stringify(parseData[userIndex]));
                setLoginSuccess(true);
                navigate('/tasks');
                login();
            }else{
                setLoginSuccess(false);
                setIsValidatedUser("Invalid credentials supplied")
               }
                 
        
            
            
        }
        resetForm({
            values: {
                email: '',
                password: ''
            }
        })
    
      };
    return (
        <>
            <div className="authentication animate__animated animate__fadeInUp animate__delay-.1s">
                <div className="container-fluid h-100 p-0">
                    <div className="row g-0">
                        <div className="ccol-xxsm-3 col-sm-4 col-md-6 col-lg-7 authentication--img" />
                        <div className="col-xxsm-9 col-sm-8 col-md-6 col-lg-5">
                            <div className="card rounded-0 h-100 border-0 authentication__card">
                                    <div className="row m-2 pt-5 mt-5 py-5 my-5">
                                        <h3 className="text-center mb-3 authentication--title">Sign In </h3>
                                        <p className="mb-3 text-center authentication--text">Klakpad task tracker management app, seamily made easy for your productivity.</p>
                                        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                                   {
                                    (props) => {
                                        const {errors,touched,isSubmitting} = props;
                                        return(
                                            <Form className="my-5">
                                               <p className="text-danger">{isValidatedUser}</p>
                                                 <div className="col-12 mb-3">
                                                    <label htmlFor="email" className="mb-1">Email</label>
                                                 <Field 
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    className={errors.email && touched.email ?
                                                        "form-control p-3 authentication--invalidInput" : 
                                                        "form-control p-3 authentication--input"}
                                                    placeholder="Email Address"
                                                   
                                                />
                                                
                                                 <ErrorMessage name="email">
                                                    {(msg) => (
                                                    <div className="error authentication--inputError">{msg}</div>
                                                    )}
                                                </ErrorMessage>
                                                 </div>
                                                 <div className="col-12 mb-3">
                                                    <label htmlFor="password" className="mb-1"> Password</label>
                                                 <Field 
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    className={errors.password && touched.password ?
                                                        "form-control p-3 authentication--invalidInput" : 
                                                        "form-control p-3 authentication--input"}
                                                    placeholder="Password"
                                                   
                                                />
                                                 <ErrorMessage name="password">
                                                    {(msg) => (
                                                    <div className="error authentication--inputError">{msg}</div>
                                                    )}
                                                </ErrorMessage>
                                                 </div>
                                                 <p className="text-end mb-3">Have an account already? <b><Link to="/">Sign Up</Link></b></p>
                                                <button type="submit" className="authentication--btn p-3 "  disabled={isSubmitting }>
                                                    Submit
                                                </button>
                                            </Form>
                                        )
                                    }
                                   }
                                </Formik>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 