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
    *[_type == "gallery" && title == "Galería Preservate"]{
      "images": images[]{
        alt,
        imgType,
        "imageUrl": asset->url
      }
    }
`;

export const exampleGalleryQuery = groq`
    *[_type == "galleries" && _title == "Ejemplo de Galería"]{
      "photos": photos.images[].asset->url
    }
`;
