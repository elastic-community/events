
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
  const [register, setRegister] = useState(false);
  const person = {};

  const handleSubmit = async (event) => {
    event.preventDefault();
    const span = apm.startSpan('receiving body')
    const transaction = apm.startTransaction('Click get Data', 'custom')
    const url = `/api/assistant`
    const httpSpan = transaction.startSpan('POST ' + url, 'external.http')
  

    let results = await fetch(url,{
      method: 'POST',
      body: JSON.stringify(person),
    });

  
    httpSpan.end()
    transaction.end()
    span.end()
    setRegister(true);
  

  };
  return (
    <div className={styles.container}>
      <h1> Welcome to our event</h1>

      {register?<form onSubmit={handleSubmit}>
        <Language lang={lang} setLang={setLang} />
        <Profile lang={lang} person={person} />
        <Interest lang={lang} person={person} />
        <Agree lang={lang} person={person} />
        <Comments lang={lang} person={person} />
      </form>:<h1>{lang.success}</h1>}
    </div>
  )
}