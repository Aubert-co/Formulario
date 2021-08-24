import React,{useEffect, useState} from 'react'
import SendDatas from '../services/index'
function Login(){
    const [inputName,setName] = useState("")
    const [inputEmail,setEmail] = useState("")
    const [inputCpf,setCpf] = useState("")
    const [errorMsg,setMsg] = useState("")
    const ChangeName = ({target})=>setName(target.value)
    const ChangeEmail = ({target})=>setEmail(target.value)
    const ChangeCpf = ({target})=>setCpf(target.value)

    const ConfirmFormu = ()=>{
         //ISSO AQUI MANDA UM ERROR SE NENHUMA DADO FOR DIGITADO
        if(inputName === '' || inputEmail === '' || inputCpf ===""){
           
            setMsg("Digite algo valido")
            setInterval(()=>{
                setMsg("")
            },5000)
            return
        }
        //VERIFICA SE O O INPUT DE CPF É IGUAL A 12
        
        if(inputCpf.length !== 12 ){
            console.log(inputCpf,inputCpf.length ===12)
            setMsg("cpf invalido")
            setInterval(()=>{
                setMsg("")
            },5000)
            return
        }
        /*ISSO AQUI MANDA O CPF PARA O BACK NO FORMATO 123.456.789.-12
        const vl = inputCpf.toString()
        const v = new RegExp(/(\d{3})(\d{3})(\d{3})(\d{2})/)
        const Cpf = vl.replace(v,"$1.$2.$3-$4")
        Removi pq estava dando erro com o BD
        */
        //ENVIA OS DADOS SE TUDO ESTIVER OK
        SendDatas(inputName,inputEmail,inputCpf)
    }
    return (
        <div className="login">
            <div className="item">
                <h1>{errorMsg}</h1>
                <input placeholder="NAME" onChange={ChangeName}/>

                <input placeholder="EMAIL" onChange={ChangeEmail}/>

                <input placeholder="CPF" onChange={ChangeCpf}/>

                <button onClick={ConfirmFormu}>Send</button>
            </div>
        </div>
    )

}

export default Login