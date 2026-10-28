// Photography: only photographs I took. Pictures of me, group photos and
// other people's work belong on About, not here.
//
// width/height are the displayed (EXIF-rotated) pixel size; the justified grid
// uses them to size each row without cropping. Measure a new photo with:
//   node -e "require('sharp')('public/photography/x.jpg').metadata().then(console.log)"
// and swap width/height when orientation is 5–8.

export interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface PhotoCollection {
  id: string;
  title: string;
  description?: string;
  location?: string;
  photos: Photo[];
}

export const photoCollections: PhotoCollection[] = [
  {
    id: "keelung",
    title: "Keelung",
    description: "Harbors, headlands and the coast at night",
    location: "Keelung, Taiwan",
    photos: [
      { src: "/photography/keelung/DSCF1183.JPG", width: 2000, height: 1333, alt: "Zhengbin Harbor's waterfront houses and fishing boats reflected in still water" },
      { src: "/photography/keelung/DSCF1160.JPG", width: 1600, height: 2400, alt: "A white lighthouse on a green headland under a clear sky" },
      { src: "/photography/keelung/DSCF1163.JPG", width: 1600, height: 2400, alt: "A rocky reef running out into the sea off the Keelung coast" },
      { src: "/photography/keelung/DSCF1652.JPG", width: 1600, height: 2400, alt: "A lit bridge reflected in black water at night" },
    ],
  },
  {
    id: "food",
    title: "Food",
    description: "Stalls, cafés and dessert",
    photos: [
      { src: "/photography/foody/DSCF1203.JPG", width: 2400, height: 1600, alt: "Tiramisu and a parfait glass, shot with a shallow depth of field" },
      { src: "/photography/foody/DSCF0176.JPG", width: 1600, height: 2400, alt: "A cook working the grill at a night-market stall" },
      { src: "/photography/foody/DSCF0564.JPG", width: 1600, height: 2400, alt: "Tiramisu and an iced latte on a caf\u00e9 table" },
    ],
  },
  {
    id: "live-music",
    title: "Live Music",
    description: "Concerts and small stages",
    photos: [
      { src: "/photography/concert/gracie_abrams.jpg", width: 1108, height: 1477, alt: "Gracie Abrams at the piano under a single spotlight" },
      { src: "/photography/concert/aimyon-cropped.jpg", width: 1080, height: 726, alt: "Aimyon on stage in orange light" },
      { src: "/photography/concert/gracie_abrams2.jpg", width: 1080, height: 1920, alt: "Gracie Abrams playing guitar on stage" },
      { src: "/photography/music/04bd1c25-0486-4241-acee-eb4d437f71c6.jpeg", width: 1080, height: 1620, alt: "A caj\u00f3n player in low light" },
    ],
  },
  {
    id: "yilan",
    title: "Yilan",
    description: "The east coast",
    location: "Yilan, Taiwan",
    photos: [
      { src: "/photography/yilan/old_man_fishing.JPG", width: 2400, height: 1600, alt: "A man fishing from a pebble beach below green mountains" },
    ],
  },
  {
    id: "kyoto",
    title: "Kyoto",
    description: "Gardens and gates",
    location: "Kyoto, Japan",
    photos: [
      { src: "/photography/kyoto/20241105_093249.jpg", width: 1500, height: 2000, alt: "A red bridge over a garden pond framed by trees" },
      { src: "/photography/kyoto/20241105_102425.jpg", width: 1500, height: 2000, alt: "A stone torii gate over a busy shopping street" },
    ],
  },
  {
    id: "tokyo",
    title: "Tokyo",
    description: "Shrines, streets and summer sky",
    location: "Tokyo, Japan",
    photos: [
      { src: "/photography/tokyo/IMG_20230826_132231_077.webp", width: 1080, height: 1920, alt: "A side street leading toward Tokyo Tower" },
      { src: "/photography/tokyo/IMG_20230823_141251_449.webp", width: 1080, height: 1920, alt: "Mossy stone steps climbing through a shrine forest" },
      { src: "/photography/tokyo/IMG_20230823_163514_756.webp", width: 1080, height: 1920, alt: "A great bronze Buddha beneath a wide blue sky" },
      { src: "/photography/tokyo/IMG_20230826_132811_615.webp", width: 1080, height: 1920, alt: "Towering summer clouds over the city" },
    ],
  },
  {
    id: "sequoia",
    title: "Sequoia National Park",
    description: "Rivers and giant trees",
    location: "California, USA",
    photos: [
      { src: "/photography/california/Sequoia National Park3.webp", width: 1080, height: 1920, alt: "Looking up the trunk of a giant sequoia" },
      { src: "/photography/california/Sequoia National Park.webp", width: 1080, height: 1920, alt: "A clear river running over boulders through the forest" },
      { src: "/photography/california/Sequoia National Park2.webp", width: 1080, height: 1920, alt: "A trail winding between giant trees" },
    ],
  },
  {
    id: "underwater",
    title: "Underwater",
    description: "Sea turtles on a dive",
    photos: [
      { src: "/photography/scubadiving/P4020012.JPG", width: 1500, height: 2000, alt: "A sea turtle gliding above divers in blue water" },
      { src: "/photography/scubadiving/P4020014.JPG", width: 1500, height: 2000, alt: "A sea turtle overhead, divers far below" },
    ],
  },
];
