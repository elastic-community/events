import apm from '@/OTEL-initializer'



export default async function handler(req, res) {

    var span = apm.startSpan('call DB')


    const regions = []
    res.status(200).json(regions)

    if (span) span.end()

}
