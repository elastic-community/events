
import styles from '../styles/Home.module.css';
import { BsSearch } from "react-icons/bs";
import { useState, useEffect } from 'react';
import Link from 'next/link'
import apm from '../rum'

async function GetMoney(money){

  let moneyApi,moneyResult;
  switch(money) {
    case "dolar":
      moneyApi="dolar"
      moneyResult="Dolares";
      break;
    case "euro":
      moneyApi="euro"
      moneyResult="Euros";
      break;
    default:
      return
  }
  const span = apm.startSpan('receiving body')

   
    
    
  const transaction = apm.startTransaction('Click get Data', 'custom')
  const url = `https://api.cmfchile.cl/api-sbifv3/recursos_api/${moneyApi}/2023?apikey=1691a400e015a7310152a544db165df6bf613975&formato=json`
  const httpSpan = transaction.startSpan('GET ' + url, 'external.http')

  let results = await fetch(url);
  results = await results.json()
  httpSpan.end()
  transaction.end()

  if (span) span.end()

  return  0
}


export default  function index() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías enviar los datos del formulario al servidor para guardarlos en la base de datos
    console.log({ name, email, phone, reason });
    setName("");
    setEmail("");
    setPhone("");
    setReason("");
  };

  return (
    <div className={styles.container}>
      
      <form >
      <div className="mb-12">
        <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div className="mb-12">
        <label htmlFor="exampleFormControlInput1" className="form-label">Apellido</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div className="mb-12">
        <label htmlFor="exampleFormControlInput1" className="form-label">¿De qué país eres?</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div className="mb-12">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div className="mb-12">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>

    </form>
    </div>
  )
}