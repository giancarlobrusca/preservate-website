import client from './sanity'
import {personQuery} from './queries'

export async function getPersons() {
    return await client.fetch(personQuery)
}