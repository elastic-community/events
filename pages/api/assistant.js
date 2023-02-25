import apm from 'elastic-apm-node'

export default async function handler(req, res) {

    return res.status(200).json({ name: 'John Doe' })

}
