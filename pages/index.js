
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
      <h1> Welcome to our event</h1>

      <form>
        <div className="form-group row">
          <label className="col-4">Language</label> 
          <div className="col-8">
            <div className="custom-control custom-radio custom-control-inline">
              <input name="lang" id="lang_0" type="radio" className="custom-control-input" defaultValue="rabbit" required="required" /> 
              <label htmlFor="lang_0" className="custom-control-label">English</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input name="lang" id="lang_1" type="radio" className="custom-control-input" defaultValue="duck" required="required" /> 
              <label htmlFor="lang_1" className="custom-control-label">Español</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input name="lang" id="lang_2" type="radio" className="custom-control-input" defaultValue="fish" required="required" /> 
              <label htmlFor="lang_2" className="custom-control-label">Portuguez</label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="name" className="col-4 col-form-label">Nombre</label> 
          <div className="col-8">
            <input id="name" name="name" type="text" className="form-control" required="required" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="lastName" className="col-4 col-form-label">Apellido</label> 
          <div className="col-8">
            <input id="lastName" name="lastName" type="text" className="form-control" required="required" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="email" className="col-4 col-form-label">Email</label> 
          <div className="col-8">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fa fa-address-book" />
                </div>
              </div> 
              <input id="email" name="email" type="text" className="form-control" required="required" />
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="employeer" className="col-4 col-form-label">Compañía, Universidad, otro:</label> 
          <div className="col-8">
            <input id="employeer" name="employeer" type="text" className="form-control" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-4">¿Está interesado en unirse a su grupo local de usuarios de la Comunidad Elastic?</label> 
          <div className="col-8">
            <div className="custom-control custom-radio custom-control-inline">
              <input name="radio" id="radio_0" type="radio" className="custom-control-input" defaultValue="rabbit" required="required" /> 
              <label htmlFor="radio_0" className="custom-control-label">Sí</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input name="radio" id="radio_1" type="radio" className="custom-control-input" defaultValue="duck" required="required" /> 
              <label htmlFor="radio_1" className="custom-control-label">No</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input name="radio" id="radio_2" type="radio" className="custom-control-input" defaultValue="fish" required="required" /> 
              <label htmlFor="radio_2" className="custom-control-label">Tal vez, ¡Cuéntame más!</label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-4 col-form-label">¿Qué tan familiarizado estás con Elastic Stack?</label> 
          <div className="col-8">
            <div className="custom-controls-stacked">
              <div className="custom-control custom-radio">
                <input name="radio1" id="radio1_0" type="radio" className="custom-control-input" defaultValue="rabbit" required="required" /> 
                <label htmlFor="radio1_0" className="custom-control-label">Nunca he escuché de Elastic</label>
              </div>
            </div>
            <div className="custom-controls-stacked">
              <div className="custom-control custom-radio">
                <input name="radio1" id="radio1_1" type="radio" className="custom-control-input" defaultValue="duck" required="required" /> 
                <label htmlFor="radio1_1" className="custom-control-label">Oído de Elastic, pero no demasiado familiar</label>
              </div>
            </div>
            <div className="custom-controls-stacked">
              <div className="custom-control custom-radio">
                <input name="radio1" id="radio1_2" type="radio" className="custom-control-input" defaultValue="fish" required="required" /> 
                <label htmlFor="radio1_2" className="custom-control-label">Estoy empezando a experimentar con Elastic</label>
              </div>
            </div>
            <div className="custom-controls-stacked">
              <div className="custom-control custom-radio">
                <input name="radio1" id="radio1_3" type="radio" className="custom-control-input" defaultValue required="required" /> 
                <label htmlFor="radio1_3" className="custom-control-label">Lo he estado usando regularmente</label>
              </div>
            </div>
            <div className="custom-controls-stacked">
              <div className="custom-control custom-radio">
                <input name="radio1" id="radio1_4" type="radio" className="custom-control-input" defaultValue required="required" /> 
                <label htmlFor="radio1_4" className="custom-control-label">Soy un usuario avanzado</label>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-4">¿Está interesado en unirse a su grupo local de usuarios de la Comunidad Elastic?</label> 
          <div className="col-8">
            <div className="custom-control custom-radio custom-control-inline">
              <input name="radio2" id="radio2_0" type="radio" className="custom-control-input" defaultValue="rabbit" required="required" /> 
              <label htmlFor="radio2_0" className="custom-control-label">Sí</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input name="radio2" id="radio2_1" type="radio" className="custom-control-input" defaultValue="duck" required="required" /> 
              <label htmlFor="radio2_1" className="custom-control-label">No</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input name="radio2" id="radio2_2" type="radio" className="custom-control-input" defaultValue="fish" required="required" /> 
              <label htmlFor="radio2_2" className="custom-control-label">Tal vez, ¡Cuéntame más!</label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-4 col-form-label">¿Te interesaría presentar una charla en nuestro próximo meetup de la comunidad de Elastic?</label> 
          <div className="col-8">
            <div className="custom-controls-stacked">
              <div className="custom-control custom-radio">
                <input name="radio3" id="radio3_0" type="radio" className="custom-control-input" defaultValue="rabbit" required="required" /> 
                <label htmlFor="radio3_0" className="custom-control-label">Sí</label>
              </div>
            </div>
            <div className="custom-controls-stacked">
              <div className="custom-control custom-radio">
                <input name="radio3" id="radio3_1" type="radio" className="custom-control-input" defaultValue="duck" required="required" /> 
                <label htmlFor="radio3_1" className="custom-control-label">No</label>
              </div>
            </div>
            <div className="custom-controls-stacked">
              <div className="custom-control custom-radio">
                <input name="radio3" id="radio3_2" type="radio" className="custom-control-input" defaultValue="fish" required="required" /> 
                <label htmlFor="radio3_2" className="custom-control-label">Tal vez, ¡Cuéntame más!</label>
              </div>
            </div>
            <div className="custom-controls-stacked">
              <div className="custom-control custom-radio">
                <input name="radio3" id="radio3_3" type="radio" className="custom-control-input" defaultValue required="required" /> 
                <label htmlFor="radio3_3" className="custom-control-label">Tal vez, pero prefiero compartir mi historia a través de una publicación de blog</label>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-4">¿Estás interesado en organizar un meetup de la comunidad de Elastic?</label> 
          <div className="col-8">
            <div className="custom-control custom-radio custom-control-inline">
              <input name="radio4" id="radio4_0" type="radio" className="custom-control-input" defaultValue="rabbit" required="required" /> 
              <label htmlFor="radio4_0" className="custom-control-label">Sí</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input name="radio4" id="radio4_1" type="radio" className="custom-control-input" defaultValue="duck" required="required" /> 
              <label htmlFor="radio4_1" className="custom-control-label">No</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input name="radio4" id="radio4_2" type="radio" className="custom-control-input" defaultValue="fish" required="required" /> 
              <label htmlFor="radio4_2" className="custom-control-label">Tal vez, ¡Cuéntame más!</label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-4">¿Qué tan familiarizado está con el Elastic Contributor Program?</label> 
          <div className="col-8">
            <div className="custom-control custom-radio custom-control-inline">
              <input name="radio5" id="radio5_0" type="radio" className="custom-control-input" defaultValue="rabbit" required="required" /> 
              <label htmlFor="radio5_0" className="custom-control-label">Nunca escuché de Elastic Contributor Program</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input name="radio5" id="radio5_1" type="radio" className="custom-control-input" defaultValue="duck" required="required" /> 
              <label htmlFor="radio5_1" className="custom-control-label">Oído de eso, pero no demasiado familiar</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input name="radio5" id="radio5_2" type="radio" className="custom-control-input" defaultValue="fish" required="required" /> 
              <label htmlFor="radio5_2" className="custom-control-label">Soy un colaborador anterior</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input name="radio5" id="radio5_3" type="radio" className="custom-control-input" defaultValue required="required" /> 
              <label htmlFor="radio5_3" className="custom-control-label">Estoy contribuyendo al ciclo actual</label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-4">¿Está interesado en suscribirse a nuestras actualizaciones de marketing?</label> 
          <div className="col-8">
            <div className="custom-control custom-radio custom-control-inline">
              <input name="radio6" id="radio6_0" type="radio" className="custom-control-input" defaultValue="rabbit" required="required" /> 
              <label htmlFor="radio6_0" className="custom-control-label">Si</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input name="radio6" id="radio6_1" type="radio" className="custom-control-input" defaultValue="duck" required="required" /> 
              <label htmlFor="radio6_1" className="custom-control-label">No</label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-4">¿Le gustaría estar conectado con nuestro equipo de ventas para cualquier solicitud comercial?</label> 
          <div className="col-8">
            <div className="custom-control custom-radio custom-control-inline">
              <input name="radio7" id="radio7_0" type="radio" className="custom-control-input" defaultValue="rabbit" required="required" /> 
              <label htmlFor="radio7_0" className="custom-control-label">Sí</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input name="radio7" id="radio7_1" type="radio" className="custom-control-input" defaultValue="duck" required="required" /> 
              <label htmlFor="radio7_1" className="custom-control-label">No</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input name="radio7" id="radio7_2" type="radio" className="custom-control-input" defaultValue="fish" required="required" /> 
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="textarea" className="col-4 col-form-label">¡Otros comentarios!</label> 
          <div className="col-8">
            <textarea id="textarea" name="textarea" cols={40} rows={5} className="form-control" defaultValue={""} />
          </div>
        </div> 
        <div className="form-group row">
          <div className="offset-4 col-8">
            <button name="submit" type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}