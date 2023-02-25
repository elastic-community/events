import { init as initApm } from '@elastic/apm-rum'
var apm = initApm({

  // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
  serviceName: 'events-assistant',

  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'https://c9f68453570140e1bc57b00e42fa6db3.apm.us-central1.gcp.cloud.es.io:443',

  // Set the service version (required for source map feature)
  serviceVersion: '1.0',

  // Set the service environment
  environment: 'production'
})
export default apm;