import React from 'react'

import FormLogin from '../../components/form-login';
import FormRegister from '../../components/form-register';
import Navbar from '../../components/navbar';

const Login = () =>{

    return  (

        <>
        <Navbar />
        <div className="d-flex flex-column flex-lg-row my-5">
            <FormRegister/>
            <FormLogin/>
        </div>
        </>
    )
}


export default Login;