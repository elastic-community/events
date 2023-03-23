import { init as initApm } from '@elastic/apm-rum'
var apm = initApm({

  // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
  serviceName: 'events-assistant-frontend',

  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl:"https://55bb8f51cb3e4d20918063edafc37244.apm.us-east-2.aws.elastic-cloud.com:443",
  // Set the service version (required for source map feature)
  serviceVersion: '1.0',

  // Set the service environment
  environment: 'production'
})
export default apm;
