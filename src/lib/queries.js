import { groq } from 'next-sanity';

export const personQuery = groq`
    *[_type == "person" && !principal]{
        title,
        age,
        ig,
        rol,
        bio,
        "imageUrl": photo.asset->url
    }
`;

export const principalsQuery = groq`
    *[_type == "person" && principal]{
        title,
        age,
        ig,
        rol,
        bio,
        "imageUrl": photo.asset->url
    }
`;

export const galleriesQuery = groq`
    *[_type == "galleries"]{
      _id,
      title,
      "photos": photos.images[].asset->url
    }
`;

export const exampleGalleryQuery = groq`
    *[_type == "galleries" && title == "Ejemplo de Galería"]{
      "photos": photos.images[].asset->url
    }
`;
