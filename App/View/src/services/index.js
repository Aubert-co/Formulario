async function SendDatas(name,email,cpf){
  
  const data = await  fetch('http://localhost:8080/envio',{
      method:'POST',
      body:JSON.stringify({name,email,cpf}),
      headers:{'Content-Type':'application/json'}
  })
  return data
}

export default SendDatas