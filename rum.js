import { init as initApm } from '@elastic/apm-rum'
console.log("ENV",process.env.OTEL_EXPORTER_OTLP_ENDPOINT)
var apm = initApm({

  // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
  serviceName: 'events-assistant-frontend',

  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: "https://7e11afb0a3d74b0ba039fff05c2fd0f6.apm.us-central1.gcp.cloud.es.io:443",

  // Set the service version (required for source map feature)
  serviceVersion: '1.0',

  // Set the service environment
  environment: 'production'
})
export default apm;