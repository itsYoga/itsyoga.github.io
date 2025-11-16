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
        src: "/photography/keelung/DSCF1160.JPG",
        alt: "Zhengbin Harbor waterfront"
      },
      {
        src: "/photography/keelung/DSCF1163.JPG",
        alt: "Zhengbin Harbor colorful buildings"
      },
      {
        src: "/photography/keelung/DSCF1183.JPG",
        alt: "Zhengbin Harbor waterfront with colorful buildings and fishing boats"
      },
      {
        src: "/photography/keelung/DSCF1652.JPG",
        alt: "Zhengbin Harbor scenic view"
      },
    ]
  },
  {
    id: "concert",
    title: "Concerts",
    description: "Live music performances",
    location: "Various locations",
    photos: [
      {
        src: "/photography/concert/aimyon.jpg",
        alt: "Aimyon concert performance"
      },
      {
        src: "/photography/concert/gracie_abrams.jpg",
        alt: "Gracie Abrams concert"
      },
      {
        src: "/photography/concert/gracie_abrams2.jpg",
        alt: "Gracie Abrams concert performance"
      },
    ]
  },
  {
    id: "cotter",
    title: "Cotter",
    description: "Life at Cotter",
    location: "Winona, MN, US",
    photos: [
      {
        src: "/photography/cotter/boys_varsity_soccer.jpg",
        alt: "Boys varsity soccer"
      },
      {
        src: "/photography/cotter/halloween.jpg",
        alt: "Halloween celebration"
      },
    ]
  },
  {
    id: "foody",
    title: "Food",
    description: "Delicious food moments",
    location: "Various locations",
    photos: [
      {
        src: "/photography/foody/DSCF0176.JPG",
        alt: "Food photography"
      },
      {
        src: "/photography/foody/DSCF0564.JPG",
        alt: "Food photography"
      },
      {
        src: "/photography/foody/DSCF1203.JPG",
        alt: "Food photography"
      },
    ]
  },
  {
    id: "kyoto",
    title: "Kyoto",
    description: "Exploring Kyoto",
    location: "Kyoto, Japan",
    photos: [
      {
        src: "/photography/kyoto/20241105_093249.jpg",
        alt: "Kyoto scenery"
      },
      {
        src: "/photography/kyoto/20241105_102425.jpg",
        alt: "Kyoto landscape"
      },
    ]
  },
  {
    id: "me",
    title: "Personal",
    description: "Personal moments and memories",
    location: "Various locations",
    photos: [
      {
        src: "/photography/me/04bd1c25-0486-4241-acee-eb4d437f71c6.jpeg",
        alt: "Personal photo"
      },
      {
        src: "/photography/me/1724085988099.jpg",
        alt: "Personal moment"
      },
      {
        src: "/photography/me/1732370825178.jpg",
        alt: "Personal memory"
      },
      {
        src: "/photography/me/1743432564333.jpg",
        alt: "Personal photo"
      },
      {
        src: "/photography/me/1747577189638.jpg",
        alt: "Personal moment"
      },
      {
        src: "/photography/me/1749613149427.jpg",
        alt: "Personal memory"
      },
      {
        src: "/photography/me/1749805710516.jpg",
        alt: "Personal photo"
      },
      {
        src: "/photography/me/DSCF0462.JPG",
        alt: "Personal photo"
      },
      {
        src: "/photography/me/Screenshot_20220702-144339_Gallery.jpg",
        alt: "Personal screenshot"
      },
    ]
  },
  {
    id: "ntou",
    title: "NTOU",
    description: "Life at National Taiwan Ocean University",
    location: "Keelung, Taiwan",
    photos: [
      {
        src: "/photography/ntou/1700303422224.jpg",
        alt: "NTOU campus"
      },
      {
        src: "/photography/ntou/1743432669074.jpg",
        alt: "NTOU campus view"
      },
      {
        src: "/photography/ntou/20240906_141019.jpg",
        alt: "NTOU campus"
      },
      {
        src: "/photography/ntou/DSCF0349.JPG",
        alt: "NTOU campus photo"
      },
      {
        src: "/photography/ntou/DSCF1034.JPG",
        alt: "NTOU campus view"
      },
      {
        src: "/photography/ntou/IMG_5787.jpg",
        alt: "NTOU campus"
      },
      {
        src: "/photography/ntou/received_1762153534291220.jpeg",
        alt: "NTOU campus"
      },
    ]
  },
  {
    id: "scubadiving",
    title: "Scuba Diving",
    description: "Underwater adventures",
    location: "Various locations",
    photos: [
      {
        src: "/photography/scubadiving/P4020012.JPG",
        alt: "Scuba diving underwater"
      },
      {
        src: "/photography/scubadiving/P4020014.JPG",
        alt: "Scuba diving marine life"
      },
      {
        src: "/photography/scubadiving/P4020039.JPG",
        alt: "Scuba diving underwater scene"
      },
      {
        src: "/photography/scubadiving/P4020043.JPG",
        alt: "Scuba diving adventure"
      },
    ]
  },
  {
    id: "summer_camp",
    title: "Summer Camp",
    description: "Summer camp memories",
    location: "Various locations",
    photos: [
      {
        src: "/photography/summer_camp/1723918503360.jpg",
        alt: "Summer camp activity"
      },
      {
        src: "/photography/summer_camp/mmexport1723943892871.jpg",
        alt: "Summer camp moment"
      },
    ]
  },
  {
    id: "yilan",
    title: "Yilan",
    description: "Scenic views of Yilan",
    location: "Yilan, Taiwan",
    photos: [
      {
        src: "/photography/yilan/old_man_fishing.JPG",
        alt: "Old man fishing in Yilan"
      },
    ]
  },
  {
    id: "california",
    title: "California",
    description: "California adventures",
    location: "California, US",
    photos: [
      {
        src: "/photography/california/IMG_20240618_104921_850.webp",
        alt: "California scenery"
      },
      {
        src: "/photography/california/IMG_20240619_195054_959.webp",
        alt: "California landscape"
      },
      {
        src: "/photography/california/IMG_20240619_195221_385.webp",
        alt: "California view"
      },
    ]
  },
  {
    id: "tokyo",
    title: "Tokyo",
    description: "Exploring Tokyo",
    location: "Tokyo, Japan",
    photos: [
      {
        src: "/photography/tokyo/IMG_20230823_141251_449.webp",
        alt: "Tokyo cityscape"
      },
      {
        src: "/photography/tokyo/IMG_20230823_163514_756.webp",
        alt: "Tokyo street scene"
      },
      {
        src: "/photography/tokyo/IMG_20230825_163046_330.webp",
        alt: "Tokyo view"
      },
      {
        src: "/photography/tokyo/IMG_20230826_132231_077.webp",
        alt: "Tokyo landscape"
      },
      {
        src: "/photography/tokyo/IMG_20230826_132811_615.webp",
        alt: "Tokyo scenery"
      },
      {
        src: "/photography/tokyo/IMG_20230826_164637_713.webp",
        alt: "Tokyo city view"
      },
    ]
  },
];
