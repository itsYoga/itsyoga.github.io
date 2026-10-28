// Everything the About page says about me, kept apart from how it is laid out.
// Edit here; app/about/about-client.tsx only renders it.

export interface Education {
  school: string;
  degree: string;
  location: string;
  period: string;
  logo?: string;
  /** Courses worth naming, grouped as the resume groups them. */
  coursework?: { title: string; courses: string[] }[];
}

export interface Experience {
  company: string;
  role: string;
  department?: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Language {
  name: string;
  level: string;
  note?: string;
}

export interface Award {
  title: string;
  date: string;
  detail: string;
  /** The project the award was for. */
  href: string;
  photos: { src: string; alt: string }[];
}

export interface Certificate {
  title: string;
  detail: string;
  date: string;
  /** Cropped to leave out personal data (date of birth, registration numbers, others' names). */
  image: string;
}

export interface LifePhoto {
  src: string;
  alt: string;
  /** Spans two columns and two rows in the grid. */
  wide?: boolean;
}

export const education: Education[] = [
  {
    school: "National Taiwan Ocean University",
    degree: "B.S. in Computer Science and Engineering",
    location: "Keelung, Taiwan",
    period: "2022 – 2026",
    logo: "/images/schools/ntou.png",
    coursework: [
      {
        title: "Graduate-level coursework (9 courses, 27 credits)",
        courses: [
          "Machine Learning", "Generative AI", "Natural Language Processing", "Data Mining",
          "Information Retrieval", "Advanced Database Systems", "Formal Methods", "Smart IoT Platform",
        ],
      },
      {
        title: "Core courses",
        courses: [
          "Data Structures & Algorithms", "Graph Theory Algorithms", "Operating Systems",
          "Computer Organization", "Computer Networks", "Linear Algebra", "Probability Theory",
        ],
      },
    ],
  },
  {
    school: "Cotter High School",
    degree: "High School Diploma",
    location: "Winona, MN, USA",
    period: "2019 – 2021",
    logo: "/images/schools/cotter.png",
  },
];

export const experience: Experience[] = [
  {
    company: "National Taiwan Ocean University",
    role: "Teaching Assistant — Introduction to iOS Application Development",
    department: "Department of Computer Science and Engineering",
    location: "Keelung, Taiwan",
    period: "Sep. 2026 – Jan. 2027",
    highlights: [],
  },
  {
    company: "ITRI (Industrial Technology Research Institute)",
    role: "AI Image Recognition Intern",
    department: "Electronics and Optoelectronics Research Laboratories",
    location: "Hsinchu, Taiwan",
    period: "Jun. 2025 – Aug. 2025",
    highlights: [
      "Trained YOLOPX, a multi-task panoptic driving perception network doing object detection, drivable-area segmentation and lane segmentation in a single forward pass — reaching 0.972 mIoU (drivable area), 0.793 mIoU (lane) and 0.838 mAP@0.5 over 4 classes after 200 epochs on ITRI's in-house driving dataset",
      "Extended the open-source YOLOPX codebase by ~1,900 lines (6 files rewritten, 5 added) for ITRI's data format, building a YOLO-segmentation loader and a Mosaic/MixUp/Albumentations augmentation pipeline to replace one that handled BDD100K only",
      "Owned the edge deployment path: network pruning, ONNX export, a tool resolving dynamic convolution-bias subgraphs that blocked TensorRT conversion, a TensorRT/PyCUDA engine for NVIDIA Jetson Nano, and image + detection streaming to a desktop PC over Ethernet/ROS at 30 FPS with sub-50ms latency",
      "Delivered a command-line batch-inference tool for ARTC (Automotive Research & Testing Center) running the trained model across image and video datasets including a new rainy-weather set; separately reproduced and benchmarked YOLOP, YOLOPv2, YOLOPX and A-YOLOM to identify deployment-viable designs",
    ],
  },
];

export const languages: Language[] = [
  { name: "Mandarin", level: "Native" },
  { name: "English", level: "Fluent", note: "TOEFL 110 · TOEIC 920" },
  { name: "Japanese", level: "Intermediate", note: "JLPT N3" },
];

export const awards: Award[] = [
  {
    title: "Apple WWDC26 Swift Student Challenge — Winner",
    date: "2026",
    detail:
      "One of 8 winners in Taiwan and 350 worldwide, for RiffNode. Covered by CNA, UDN, Liberty Times, ETtoday and TechNews.",
    href: "/portfolio/riffnode",
    photos: [
      { src: "/images/awards/wwdc26-keynote.jpg", alt: "WWDC26 keynote: the winners' wall with Yu-Jia, Taiwan highlighted" },
      { src: "/images/awards/ssc-certificate.jpg", alt: "Swift Student Challenge 2026 winner certificate" },
      { src: "/images/awards/wwdc26-apple-park.jpg", alt: "The Swift Student Challenge winners' wall at Apple Park" },
    ],
  },
  {
    title: "NTOU CSE Capstone Competition — Silver, Software Development Special Award · Honorable Mention",
    date: "Dec. 2025",
    detail:
      "Two awards for the Volleyball Match Analysis System, built by a three-person team I led.",
    href: "/portfolio/volleyball",
    photos: [
      { src: "/images/awards/capstone-silver.jpg", alt: "Certificate: Silver, Software Development Special Award, 2025 capstone competition" },
      { src: "/images/awards/capstone-honorable.jpg", alt: "Certificate: Honorable Mention, 2025 capstone competition" },
    ],
  },
];

export const lifePhotos: LifePhoto[] = [
  { src: "/images/life/volleyball-spike.jpg", alt: "Spiking for the department volleyball team", wide: true },
  { src: "/images/life/volleyball-serve.jpg", alt: "Serving at a department team match" },
  { src: "/images/life/volleyball-block.jpg", alt: "Blocking at the net" },
  { src: "/images/life/diving.jpg", alt: "Scuba diving" },
  { src: "/images/life/photo-club.jpg", alt: "On a photography club shoot by the sea" },
];

export const certificates: Certificate[] = [
  {
    title: "TOEIC Listening & Reading — 920",
    detail: "Listening 495 · Reading 425",
    date: "May 2026",
    image: "/images/certificates/toeic-920.jpg",
  },
  {
    title: "PADI Open Water Diver",
    detail: "Certified scuba diver",
    date: "Jun. 2023",
    image: "/images/certificates/padi-open-water.jpg",
  },
  {
    title: "Volunteer — Chengdu Research Base of Giant Panda Breeding",
    detail: "16-hour giant panda conservation practicum",
    date: "Aug. 2024",
    image: "/images/certificates/panda-volunteer.jpg",
  },
  {
    title: "10 km Kayak to Keelung Islet",
    detail: "NTOU graduates' kayak challenge, completed",
    date: "May 2026",
    image: "/images/certificates/kayak-keelung-islet.jpg",
  },
];
