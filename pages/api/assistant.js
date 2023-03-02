import { tracer, context } from '../../OTEL-initializer.js';

export default async function handler(req, res) {

  

  const span = tracer.startSpan('handler', undefined, context.active());
  const ms = Math.floor(Math.random() * 1000);
  span.setAttribute('sleep', ms);
  await new Promise((resolve) => setTimeout(resolve, ms));
  res.status(200).json({ greetings: `Hi there ${ms}!` });
  span.end();


}
