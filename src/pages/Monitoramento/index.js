import React,  {useState, useEffect} from 'react';
import Axios from 'axios';
import  {Chart}  from "react-google-charts";

import Header from '../../components/Header'
import Footer from '../../components/Footer'

//import './styles.css'

function Monitoramento() {
    const [q1, setQ1] = useState(0);
    const [q2, setQ2] = useState(0);
    const [q3, setQ3] = useState(0);

    const [erros, setErros] = useState([]);
    const [statusErro, setStatusErro] = useState(false);
    const [mensagens, setMensagens ] = useState([]);
    const [render, setRender] = useState(false);
    const v =[]

    const [data, setData] = useState([]);
    const total=[]

    const [dataq1, setDataq1] = useState([]);
    const totalq1=[]
    const [dataq2, setDataq2] = useState([]);
    const totalq2=[]
    const [dataq3, setDataq3] = useState([]);
    const totalq3=[]

    useEffect(() => {
        async function fetchData(){
            
            const url =  "https://conscire-api.herokuapp.com/monitoramento/retorna"; //http://localhost:5000/monitoramento/retorna 
            const response = await fetch(url);
            setMensagens(await response.json());
            var questao1=100
            var questao2=100
            var questao3=100
            for(var i=0;i<mensagens.length;i++){
                questao1+=mensagens[i].q1 
                questao2+=mensagens[i].q2 
                questao3+=mensagens[i].q3 
            }
            total.push(['Questões', 'Total por questão'], ['1 – Você gostou da nossa plataforma?', questao1], ['2 – Você aprendeu sobre bebidas alcoólicas em nossa plataforma?',questao2], ['3 – Você considera que o teste Audit contribui para o conhecimento sobre seu consumo de bebidas alcoólicas?', questao3])
            setData(total);
            
            //QUESTÃO 1
            var ponto0q1=0
            var ponto1q1=0
            var ponto2q1=0
            var pontosq1=[]
            var listq1=0
            for(var j=0;j<mensagens.length;j++){ 
                listq1=mensagens[j].q1 
                pontosq1.push(listq1)   
            }
            for(var x=0;x<pontosq1.length;x++){ 
                if(0===pontosq1[x]){
                    ponto0q1+=1
                }
                if(1===pontosq1[x]){
                    ponto1q1+=1
                }
                if(2===pontosq1[x]){
                    ponto2q1+=1
                } 
            }    
            totalq1.push(['Alternativas', 'Total da questão 1', { role: "style" }], ['Não gostei', ponto0q1, "#8B4513"], ['Gostei, mas não indicaria para jovens', ponto1q1, "#8B4513"], ['Gostei, indicaria para jovens', ponto2q1, "#8B4513"])
            setDataq1(totalq1);

            //QUESTÃO 2
            var ponto0q2=0
            var ponto1q2=0
            var ponto2q2=0
            var pontosq2=[]
            var listq2=0
            for(var y=0;y<mensagens.length;y++){ 
                listq2=mensagens[y].q2 
                pontosq2.push(listq2)   
            }
            for(var z=0;z<pontosq2.length;z++){ 
                if(0===pontosq2[z]){
                    ponto0q2+=1
                }
                if(1===pontosq2[z]){
                    ponto1q2+=1
                }
                if(2===pontosq2[z]){
                    ponto2q2+=1
                } 
            }
            totalq2.push(['Alternativas', 'Total da questão 2', { role: "style" }], ['Não', ponto0q2, "#8B008B"], ['Sim, pouco', ponto1q2, "#8B008B"], ['Sim, muito', ponto2q2, "#8B008B"])
            setDataq2(totalq2)

            //QUESTÃO 3
            var ponto0q3=0
            var ponto1q3=0
            var ponto2q3=0
            var pontosq3=[]
            var listq3=0
            for(var w=0;w<mensagens.length;w++){ 
                listq3=mensagens[w].q3 
                pontosq3.push(listq3)   
            }
            for(var k=0;k<pontosq2.length;k++){ 
                if(0===pontosq3[k]){
                    ponto0q3+=1
                }
                if(1===pontosq3[k]){
                    ponto1q3+=1
                }
                if(2===pontosq3[k]){
                    ponto2q3+=1
                } 
            }
            totalq3.push(['Alternativas', 'Total da questão 3', { role: "style" }], ['Não', ponto0q3, "#008080"], ['Sim, pouco', ponto1q3, "#008080"], ['Sim, muito', ponto2q3, "#008080"])
            setDataq3(totalq3);


            setRender(!render);  
        }fetchData();    
        }, [render]);      
                     
   
    const registerMonitoramento = ()=>{
        Axios.post("https://conscire-api.herokuapp.com/monitoramento/register", { //http://localhost:5000/monitoramento/register  
            q1: q1,
            q2: q2,
            q3: q3	
        }).then((response) => {
            if(response.data.message){
                v.push(response.data.message)
                setStatusErro(true);    
           }
            setErros(v)
          })
          setRender(!render);  
          setTimeout(() => {
              setStatusErro(false);
              setRender(true);
            }, 10000);
            
          setQ1(0);
          setQ2(0);
          setQ3(0);
        
    }


    const [options, setOptions] = useState({
        title: 'Como fomos avaliados em cada uma das 3 perguntas (melhor avaliados na de maior percentual)',
        is3D: true,
        colors:['#8B4513','#8B008B','#008080'],
        legend: {position: 'right'},
        pieStartAngle: -90,
    })
    
    const [options1, setOptions1] = useState({
        title: '1 – Você gostou da nossa plataforma?',
        legend: {position: 'none'},
      
    })

    const [options2, setOptions2] = useState({
        title: '2 – Você aprendeu sobre bebidas alcoólicas em nossa plataforma?',
        legend: {position: 'none'},
     
    })

    const [options3, setOptions3] = useState({
        title: '3 – Você considera que o teste Audit contribui para o conhecimento sobre seu consumo de bebidas alcoólicas?', 
        legend: {position: 'none'},
    })
    
    return (
        <div>
            <Header /> 
            <div className="bg-light rounded mt-5 pt-5 ">
                <div className="container bg-light rounded mt-4  backgroudAudit">
                    <h2 className="container-fluid text-center w-75">Monitoramento</h2>
                    
                    
                    {erros.map((item) =>{
                        return(
                        statusErro &&  <div className="container alert alert-success mx-auto mt-4 w-75" role="alert">{item}</div>
                        )            
                    })}
                    
                    <hr className="container bg-white  w-75"/>
                        <div className="container-fluid form-group">
                            <div className="container-fluid form-check texto-m">
                            <p className="container-fluid texto-m">1 – Você gostou da nossa plataforma?</p>
                            <input type="radio" name="q1" value="0"  required onChange={(e) =>{setQ1(0);}}/> Não gostei. <br />
                            <input type="radio" name="q1" value="1" required onChange={(e) =>{setQ1(1);}}/> Gostei, mas não indicaria para jovens. <br />
                            <input type="radio" name="q1" value="2" required onChange={(e) =>{setQ1(2);}}/> Gostei, indicaria para jovens. <br />
                        </div>
                        <br/>
                    <div className="container-fluid form-check texto-m">
                        <p className="container-fluid texto-m">2 – Você aprendeu sobre bebidas alcoólicas em nossa plataforma?</p>
                        <input type="radio" name="q2" value="0" required onChange={(e) =>{setQ2(0);}}/> Não.<br/>
                        <input type="radio" name="q2" value="1" required onChange={(e) =>{setQ2(1);}}/> Sim, pouco.<br/>
                        <input type="radio" name="q2" value="2" required onChange={(e) =>{setQ2(2);}}/> Sim, muito.<br/>
                    </div>
                    <br/>
                    <div className="container-fluid form-check texto-m">
                        <p className="container-fluid texto-m">3 – Você considera que o teste Audit contribui para o conhecimento sobre seu consumo de bebidas alcoólicas?</p>
                        <input type="radio" name="q3" value="0" required onChange={(e) =>{setQ3(0);}}/> Não. <br/>
                        <input type="radio" name="q3" value="1" required onChange={(e) =>{setQ3(1);}} /> Sim, pouco. <br/>
                        <input type="radio" name="q3" value="2" required onChange={(e) =>{setQ3(2);}} /> Sim, muito. <br/>
                    </div>
                    <br />
            
                    <p align="center"> 
                        <button className="container-fluid btn btn-light bg-secondary text-light rounded" onClick={registerMonitoramento}>Enviar feedback</button>
                    </p>
                    <p>&nbsp;</p>
                </div>
            </div>
            <div className="text-center text-dark"> <h4 > Respostas sobre Nossa plataforma </h4> </div>

                <div >
                    <div className="container">
                        <Chart
                            width={'1100px'}
                            height={'400px'}
                            chartType="PieChart"
                            data={data}
                            options={options}   
                        />
                    </div>
                </div>
                <div  className="container"> 
                    <h6 className="container-fluid text-center py-1 w-75"><b> Com mais detalhes, as respostas foram...</b> </h6>
                    <div className="alert py-0  my-0">     
                        <table border="3">   
                            <tbody>  
                                <tr >
                                    <td className="text-light text-center" bgcolor='#8B4513' width='1280'> 1 – Você gostou da nossa plataforma? <br/><br/> <i>0-Não gostei <br/> 1-Gostei, mas não indicaria para jovens<br/> 2-Gostei, indicaria para jovens</i></td>
                                    <td className="text-light text-center" bgcolor='#8B008B' width='1280'> 2 – Você aprendeu sobre bebidas alcoólicas em nossa plataforma? <br/><br/><i> 0-Não <br/> 1-Sim, pouco <br/> 2-Sim, muito</i></td>
                                    <td className="text-light text-center" bgcolor='#008080' width='1200'> 3 – Você considera que o teste Audit contribui para o conhecimento sobre seu consumo de bebidas alcoólicas? <br/><br/> <i>0-Não <br/> 1-Sim, pouco <br/> 2-Sim, muito</i></td>
                                </tr>
                            </tbody>
                        </table> 
                    </div>
                   
                    {mensagens.map((item) =>{
                    return(
                        <div className="alert py-0  my-0" >
                            <table border="3">                                
                                <tbody>
                                    <tr>
                                        <td className="text-center" width='1200'> {item.q1}</td>
                                        <td className="text-center" width='1200'> {item.q2}</td>
                                        <td className="text-center" width='1200'> {item.q3}</td>
                                    </tr>
                                </tbody>
                            </table> 
                        </div>
                        )            
                    })}
                </div>   
               
                <br />
                <br />
                <br />
                <div className="container-fluid" >
                <h6 className="container-fluid text-center w-75"><b> Analisando esta tabela: os gráficos abaixo apresentam o <i>número de pessoas</i> que votaram em cada <i>alternativa</i>...</b></h6>
                    <div className="row" >
                        
                    <div> 
                            <div >
                                <Chart
                                    width={'460px'}
                                    height={'300px'}
                                    chartType="ColumnChart"
                                    data={dataq1}
                                    options={options1}
                                />
                            </div>
                        </div>
                        
                        <div> 
                            <div >
                                <Chart
                                    width={'430px'}
                                    height={'300px'}
                                    chartType="ColumnChart"
                                    data={dataq2}
                                    options={options2}
                                />
                            </div>
                        </div>

                        <div>
                            <div >
                                <Chart
                                    width={'450px'}
                                    height={'300px'}
                                    chartType="ColumnChart"
                                    data={dataq3}
                                    options={options3}
                                />
                            </div>
                        </div>
                
                    </div>
                </div>

            </div>
            <Footer />
        </div> 
    )
}

export default Monitoramento