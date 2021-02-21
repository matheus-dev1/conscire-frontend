import React from 'react'
import {useState, useEffect} from 'react';  
import Axios from "axios";
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Contato() {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [msg, setMsg] = useState("");
    const [erros, setErros] = useState([]);
    const [statusErro, setStatusErro] = useState(false);
    const [mensagens, setMensagens ] = useState([]);
    const [render, setRender] = useState(false);
    const v =[]
    useEffect(() => {
      async function fetchData(){
          const url =  "http://localhost:5000/comentarios/retorna"; 
          const response = await fetch(url);
          setMensagens(await response.json());
      }fetchData();    
    }, [render]);

    const mensagem = ()=>{
        Axios.post("http://localhost:5000/comentarios/envia", {
            nome: nome,
            sobrenome: sobrenome,
            msg: msg
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
        setRender(!render);  
        setTimeout(() => {
            setStatusErro(false);
            setRender(true);
          }, 50000);

      setNome('');
      setSobrenome('');
      setMsg('');
    }

    return(
      <div>
        <Header />
          <section class="contact">
            <div class="container py-5">
              <div class="row">
                <div class="col-lg-6 mx-auto">
                  <div class="card">
                    <div class="card-body">
                      <div class="col-lg-12">
                        <div class="head text-center text-white py-3">
                          <h3>Contato</h3>
                        </div>
                      </div>
                    </div>

                    {erros.map((item) =>{
                      return(
                        statusErro &&  <div class="alert alert-danger mx-auto mt-4 w-75" role="alert">{item}</div>
                      )            
                    })}

                    <div>
                      <div class="form p-3">
                        <div class="form-row my-5">

                          <div class="col-lg-6">
                            <input type="text" class="effect-1" value={nome} onChange={event => setNome(event.target.value)} pattern="^[^-\s][a-zA-ZÀ-ú ]*" placeholder="Nome" name='nome' required/>
                            <span class="Focus-border"></span>
                          </div>

                          <div class="col-lg-6">
                            <input type="text" class="effect-1"  name='sobrenome' value={sobrenome} onChange={event => setSobrenome(event.target.value)} pattern="^[^-\s][a-zA-ZÀ-ú ]*" placeholder="sobrenome" required/>
                            <span class="Focus-border"></span>
                          </div>
                        </div>

                        <div class="form-row pt-5">
                          <div class="col-lg-12">
                            <textarea name="msg" value={msg} onChange={event => setMsg(event.target.value)} cols="60" rows="4" placeholder= "msg" required></textarea>
                            <span class="Focus-border"></span>
                          </div>
                      </div>

                        <div class="form-row pt-4">
                          <div class="col-lg-6">
                            <p class="text-dark"><input type="checkbox"/> Não sou um robô </p>
                            <p><a href="./index.php"> Voltar para Conscire</a></p>
                        </div>

                      <div class= "offset-2 col-lg-4">
                        <button onClick={mensagem} class="btn1">ENVIAR</button>
                      </div>
                  </div>
                  
                </div>

                  </div>
                          <p class="text-center text-dark">Entre em contato conosco: <br/>
                          Telefone: (11)3656-5562 <br/>
                          Endereço: Rua Conscire, 569 <br/>
                          São Paulo - SP </p>
                      </div>
                  </div>
              </div>
            </div>
           

          </section>
          <div class="text-center text-dark py-3"> <h4 > Mensagens </h4> </div>
            <div >          
                {mensagens.map((item) =>{
                    return(
                      <div class="alert alert-success mx-auto mt-4 w-75" key={item.id}>
                          <hr/><hr/>
                          <div>
                              Data: {item.data}
                          </div>
                          <div>
                              {item.nome} {item.sobrenome} escreveu: {item.msg}
                          </div>
                          <hr/><hr/>
                      </div>
                    )            
                })}
            </div>
      <Footer />
    </div>
  )
}
export default Contato
