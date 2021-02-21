// Este @ts-check serve para poder ver parte da documentacao.
//@ts-check
import React from 'react'
import {useEffect, useState} from 'react'; 
import Axios from 'axios';
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './styles.css'

function ResultadoAudit() {
    const [result, setResult] = useState([]);
    const [statusResult, setStatusResult] = useState(false);
    Axios.defaults.withCredentials = true;
   
    window.onload = ()=>{
        const emailsession = localStorage.getItem('email')
        console.log(emailsession)
        Axios.post("http://localhost:5000/audit/retorna",{
            email: emailsession,
        }).then((Response)=> {
            console.log(Response.data.message)
            setResult(Response.data.message)
            setStatusResult(true)
        })
     }



  
    return (
        <>
            <Header />
            <br /> <br /> <br /> <br /> <br /> <br /> <br />
                <div className="text-center text-dark py-3"> <h4 > Resultado Audit </h4> 
                <div >          
                    {
                        statusResult &&  <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
                        <p>{result}</p>
                    </div>
                    }
                    </div>
                </div>
                
            <Footer />
        </>
    )
}

export default ResultadoAudit;
