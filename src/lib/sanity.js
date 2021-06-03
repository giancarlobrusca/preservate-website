import { createClient } from 'next-sanity'

const config = {
    dataset: 'production',
    projectId: '4nzaz1x2'
} 

const client = createClient(config)

export default client