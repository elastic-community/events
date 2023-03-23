import { tracer, context } from '../../OTEL-initializer.js';
import en from '../../components/languages/en'
const { Client } = require('@elastic/elasticsearch')

const client = new Client({
  cloud: {
    id: process.env.cloudID
  },
  auth: {
    username: process.env.elastic_user,
    password:  process.env.elastic_password
  }
})


export default async function handler(req, res) {



    let data = JSON.parse(req.body)
    let person = { name:data.name,
        lastName: data.lastName,
        email: data.email,
        work: data.work,
        comments:data.comments,
        code: data.code
    }
    person.localGroupField = en["localGroupField_"+data.localGroupField]
    person.familyWithElastic = en["familyWithElastic_"+data.familyWithElastic]
    person.interestElasticCommunity = en["interestElasticCommunity_"+data.interestElasticCommunity]
    person.organizerMeetup = en["organizerMeetup_"+data.organizerMeetup]
    person.familyContributeProgram = en["familyContributeProgram_"+data.familyContributeProgram]
    person.comercialTeam = en["comercialTeam_"+data.comercialTeam]
    person.acceptMarketing = en["acceptMarketing_"+data.acceptMarketing]
    person["@timestamp"] = new Date().toISOString()

  const span = tracer.startSpan(req.url, undefined, context.active());
  span.setAttribute('http.method', req.method);
    span.setAttribute('http.url', req.url);
    span.setAttribute('http.status_code', 200);
    span.setAttribute('trace.id', req.traceId);

  await client.index({
    index: 'assistants',
    body: person
  })
 
  console.log("Person: ", person)
  res.status(200).json(person);
  span.end();
}
