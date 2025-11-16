// Photography data structure
// Add your photos to public/photography/[event-or-place-name]/ folder
// Then add the event/place details here

export interface Photo {
  src: string;
  alt: string;
}

export interface PhotoCollection {
  id: string;
  title: string;
  description?: string;
  date?: string;
  location?: string;
  photos: Photo[];
}

export const photoCollections: PhotoCollection[] = [
  {
    id: "keelung",
    title: "Zhengbin Harbor",
    description: "Colorful harbor views at Zhengbin Fishing Harbor",
    location: "Keelung, Taiwan",
    photos: [
      {
        src: "/photography/keelung/DSCF1183.JPG",
        alt: "Zhengbin Harbor waterfront with colorful buildings and fishing boats"
      },
    ]
  },
  // Add more collections below:
  // {
  //   id: "hokkaido",
  //   title: "Hokkaido Trip",
  //   description: "Beautiful landscapes from Hokkaido",
  //   date: "2024",
  //   location: "Hokkaido, Japan",
  //   photos: [
  //     {
  //       src: "/photography/hokkaido/photo1.jpg",
  //       alt: "Description of photo"
  //     },
  //   ]
  // },
];
