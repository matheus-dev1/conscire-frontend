/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import Axios from 'axios'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

import './styles.css'

function Login() {
    
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [erros, setErros] = useState('');

    const [loginStatus, setLoginStatus] = useState(false);
    const [statusErro, setStatusErro] = useState(false);

    Axios.defaults.withCredentials = true;

    const login = ()=>{
        Axios.post("http://localhost:5000/login", {
            email: email,
            senha: senha
        }).then((response) => {
            if(!response.data.auth){
                console.log(response.data.message);
                setErros(response.data.message);
                setLoginStatus(false);
                setStatusErro(true);
            }else{
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("email", response.data.results)
                setLoginStatus(true);
                console.log(localStorage.getItem('token'))
                console.log(response.data.results)
            }
        })
        setTimeout(() => {
            setStatusErro(false);
          }, 5000);

    }


    return (
        <>
        <Header /> 
<section className="form my-4 mt-5 pt-5 mx-5">
    <div className="container ">
        <div className="row roww no-gutters">
            <div className="col-lg-5">
                <img src={require('../../assets/images/login.png').default} className="img-fluid" alt=""/>  
            </div>
            <div className="col-lg-7 px-5 pt-5">
                <img id="logo" src={require('../../assets/images/logo.png').default} alt="Conscire"/>
                {/*  */}
                <h5 className= "my-3 p-2">Entre na sua conta</h5>
                    <div className="form-row">
                        <div className="col-lg-7">
                            <input type="email" name="email" placeholder="Seu email aqui" className="form-control my-3 p-4" onChange={(e) =>{setEmail(e.target.value);}}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-lg-7">
                            <input type="password" name="senha" placeholder="********" className="form-control my-3 p-4" onChange={(e) =>{setSenha(e.target.value);}}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-lg-7">
                            <button onClick ={login} className="btn1 mt-3 mb-5">Login</button>
                        </div>
                    </div>
			 {
                        statusErro &&  <div class="alert alert-danger mx-auto mt-4 w-75" role="alert">
                        <p>{erros}</p>
                    </div>
                    }
                    {
                        loginStatus && window.location.assign("http://localhost:3000/moodle")
                    }
                    <p>Não possui uma conta?<br/> <Link to="/cadastro">Registre-se aqui</Link></p>
                    <p><Link to="/">Voltar para Conscire</Link></p>
            </div>
        </div>
    </div>
</section>
<Footer /> 
        </>
    )
}

export default Login
