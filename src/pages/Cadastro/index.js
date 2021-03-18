import React from 'react'
import {useState} from 'react';  
import Axios from "axios";
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

function Cadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirme, setConfirme] = useState("");
    const [erros, setErros] = useState([]);
    const [statusErro, setStatusErro] = useState(false);
    const v = []
    const cadastrar = ()=>{
        Axios.post("https://conscire-api.herokuapp.com/register", {
            nome: nome,
            email: email,
            senha: senha,
            confirme: confirme
        }).then((response) => {
            if(response.data.message){
                v.push(response.data.message)
                setStatusErro(true);
            }else{
                for(var i=0;i<response.data.validacao.errors.length;i++){
                    if(!response.data.auth){
                        v.push(response.data.validacao.errors[i].msg)
                        setStatusErro(true);
                    }
                }
           }
            setErros(v)
        })
        setTimeout(() => {
            setStatusErro(false);
          }, 10000);
        
        setNome('');
        setEmail('');
        setSenha('');
        setConfirme('');
    }
    return (
        <>
            <Header />
                <section className="form center my-4 mt-5 pt-5 mx-5">
                    <div className="container">
                        <div className="row roww no-gutters">
                        <div className="col-lg-5">
                        <img src={require('../../assets/images/login.png').default} className="img-fluid" alt=""/>  
                    </div>
                    <div className="col-lg-7 px-5 pt-5">
                    <img id="logo" src={require('../../assets/images/logo.png').default} alt="Conscire"/>
                    <h5 className= "my-3 p-2">Cadastre-se</h5>      
                
                    <div >
                        <div className="form-row">
                            <div className="col-lg-7">
                            <input type="text" id="nome" name="nome" value={nome} onChange={event => setNome(event.target.value)} pattern="^[^-\s][a-zA-ZÀ-ú ]*" required placeholder="Nome Completo" className="form-control my-3 p-4"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-lg-7">
                        <input type="email" id="email" name="email" value={email} onChange={event => setEmail(event.target.value)} required placeholder="Seu email aqui" className="form-control my-3 p-4"/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-lg-7">
                        <input type="password" name="senha" id="senha" value={senha} onChange={event => setSenha(event.target.value)} required placeholder="Digite uma senha" className="form-control my-3 p-4"/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-lg-7">
                        <input type="password" name="confirme" id="confirme" value={confirme} onChange={event => setConfirme(event.target.value)} required placeholder="Digite a mesma senha" className="form-control my-3 p-4"/>
                        </div>
                    </div>

                    <div className="form-row">
                    <div className="col-lg-7">
                    <button onClick={cadastrar} className="btn1 mt-3 mb-5">Cadastrar</button>
                    </div>
                    </div>

                    <p>
                        Já possui uma conta? <br/> <Link href="/login"> Faca o login aqui</Link>
                    </p>

                    </div>
                    </div>
                    </div>
                    </div>
                    {erros.map((item) =>{
                          return(
                            statusErro &&  <div className="alert alert-danger mx-auto mt-4 w-75" role="alert">{item}</div>
                          )            
                      })}
                </section>
            <Footer />
        </>
    )
}
export default Cadastro




