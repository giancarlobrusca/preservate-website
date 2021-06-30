import { groq } from 'next-sanity';

export const personQuery = groq`
    *[_type == "person"]{
        title,
        age,
        rol,
        "imageUrl": photo.asset->url,
        bio,
    }
`;
