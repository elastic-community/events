import { tracer, context } from '../../OTEL-initializer.js';

export default async function handler(req, res) {

  res.status(200).json({ greetings: `Hello !` });

}
