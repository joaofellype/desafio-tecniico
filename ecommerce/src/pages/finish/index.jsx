import React from 'react'

import Payment from '../../components/payment';
import Address from '../../components/address';
//import Total from '../../components/total-finish';
import Navbar from '../../components/navbar';
import ResumePedido from '../../components/resume-pedido';

const Login = () =>{

    return  (

        <>
        <Navbar />
        <div className="d-flex flex-column flex-lg-row my-5">
            <div className="d-flex flex-column m-auto">
                <Address/>
                <Payment/>
            </div>

            <ResumePedido />
        </div>
        </>
    )
}


export default Login;