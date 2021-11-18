import client from './sanity';
import {
  exampleGalleryQuery,
  galleriesQuery,
  personQuery,
  principalsQuery,
} from './queries';

export async function getPersons() {
  return await client.fetch(personQuery);
}

export async function getPrincipals() {
  return await client.fetch(principalsQuery);
}

export async function getGalleries() {
  return await client.fetch(galleriesQuery);
}

export async function getExampleGallery() {
  return await client.fetch(exampleGalleryQuery);
}
