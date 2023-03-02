
import styles from '../styles/Home.module.css';
import { BsSearch } from "react-icons/bs";
import { useState, useEffect } from 'react';
import Link from 'next/link'
import apm from '../rum'

import en from '../components/languages/en'
import Language from '../components/form/1_language';
import Profile from '@/components/form/2_profile';
import Interest from '@/components/form/3_interest';
import Agree from '@/components/form/4_agree';
import Comments from '@/components/form/5_comments';


export default  function index() {
  const [lang, setLang] = useState(en);

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
        <Language lang={lang} setLang={setLang} />
        <Profile lang={lang} />
        <Interest lang={lang} />
        <Agree lang={lang} />
        <Comments lang={lang} />
      </form>
    </div>
  )
}