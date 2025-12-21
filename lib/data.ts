export interface Member {
  name: string;
  designation: string;
  src: string;
}

export const seniorCouncil: Member[] = [
  {
    name: "Utsav Jana",
    designation: "Project Head",
    src: "/senior-council/utsav.jpg",
  },
  {
    name: "Bhoomika Sharma",
    designation: "Head of Operations",
    src: "/senior-council/Bhoomika.jpg",
  },
  {
    name: "Manan Gupta",
    designation: "Head of Logistics",
    src: "/senior-council/manan.jpg",
  },
  {
    name: "Bhumika Garg",
    designation: "Head of Social Media",
    src: "/senior-council/bhumika.jpg",
  },
  {
    name: "Priyanka",
    designation: "Head of Content and Graphic Design",
    src: "/senior-council/priyanka.jpg",
  },
  {
    name: "Hitin Saraswat",
    designation: "Head of Public Relations",
    src: "/senior-council/hitin.jpg",
  },
  {
    name: "Soumya Kumar",
    designation: "Head of Events",
    src: "/senior-council/soumya.jpg",
  },
];

export const juniorCouncil: Member[] = [
  // Project Coordinators
  { name: "Suyash", designation: "Project Coordinator - DSA", src: "/junior-council/suyash.jpg" },
  { name: "Vanya Arora", designation: "Project Coordinator - DSA", src: "/junior-council/vanya.jpg" },
  { name: "Geetika Behl", designation: "Project Coordinator - Web Development", src: "/junior-council/geetika.jpg" },
  { name: "Arush Karnatak", designation: "Project Coordinator - Machine Learning", src: "/junior-council/arush.png" },
  { name: "Kusha Sharma", designation: "Project Coordinator - Machine Learning", src: "/junior-council/kusha.jpg" },
  { name: "Bhoomika Sharma", designation: "Project Coordinator - Robotics", src: "/junior-council/bhoomika.jpg" }
];

export const coordinators: Member[] = [

  // { name: "Sneha", designation: "Design Coordinator", src: "/coordinators/sneha.png" },
  // { name: "Anshika", designation: "Design Coordinator", src: "/coordinators/anshika.png" },
  // { name: "Tanu", designation: "Design Coordinator", src: "/coordinators/tanu.png" },

  // PR Coordinators
  { name: "Anay Jha", designation: "PR Coordinator", src: "/coordinators/anay.jpg" },
  { name: "Shivam Singh Mahar", designation: "PR Coordinator", src: "/coordinators/shivam.jpg" },
  { name: "Deepansh Dutta", designation: "PR Coordinator", src: "/coordinators/deepansh.jpg" },

  // Event Coordinators
  { name: "Shreya Aggarwal", designation: "Event Coordinator", src: "/coordinators/shreya.jpg" },
  // { name: "Avni Bhasin", designation: "Event Coordinator", src: "/coordinators/avni.png" },
  { name: "Simran Kapoor", designation: "Event Coordinator", src: "/coordinators/simran.jpg" },

];


export const MainCouncil: Member[] = [
  { name: "Arpan Basu Sachdeva", designation: "Chairperson - Main Branch", src: "/members/arpan.png" },
  { name: "Aditya", designation: "Vice Chairperson - Main Branch", src: "/members/aditya.jpg" },
  { name: "Sagar Singh", designation: "Treasurer - Main Branch", src: "/members/sagar.jpg" },
  { name: "Swastika Srivastava", designation: "General Secretary - Main Branch", src: "/members/swastika.jpg" },
  { name: "Vishal Belwal", designation: "Web Master - Main Branch", src: "/members/vishal.jpg" },
]

export const WIE: Member[] = [
  { name: "Prakriti Lohumi", designation: "Chairperson - WIE", src: "/wie/prakriti.jpg" },
  { name: "Arpita Guniyal", designation: "Vice Chairperson - WIE", src: "/wie/arpita.jpg" },
  { name: "Lakshay Joshi", designation: "General Secretary - WIE", src: "/wie/lakshay.jpg" },
]

export const COMSOC: Member[] = [
  { name: "Tamanna Verma", designation: "Chairperson - ComSoc", src: "/comsoc/tamanna.jpg" },
  { name: "Avikshit Trivedi", designation: "Vice Chairperson - ComSoc", src: "/comsoc/avikshit.jpg" },
  { name: "Divyanshi Aggarwal", designation: "General Secretary - ComSoc", src: "/comsoc/divyanshi.jpg" },
]

// Faculty & Posts
export interface FacultyPost {
  id: string;
  title: string;
  excerpt: string;
  date: string; 
  image?: string;
  tags?: string[];
  link?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  avatar: string; // image path in public
  bio?: string;
  socials?: { x?: string; linkedin?: string; website?: string };
  posts: FacultyPost[];
}

export const FACULTY: FacultyMember[] = [
  {
    id: "monika",
    name: "Dr. Monika Sharma",
    designation: "Associate Professor",
    department: "Electronics & Communication",
    avatar: "/monika_mam.png",
    bio: "Specializes in Signal Processing, Wireless Networks, and IoT applications.",
    socials: { linkedin: "https://www.linkedin.com", website: "#" },
    posts: [
      {
        id: "monika-iot-workshop",
        title: "Hands-on Workshop: IoT Edge to Cloud",
        excerpt: "Building end-to-end IoT solutions with secure connectivity.",
        date: "2025-04-03",
        image: "/events/robosoccer.png",
        tags: ["IoT", "Edge", "Cloud"],
        link: "#",
      },
      {
        id: "monika-comsoc-webinar",
        title: "ComSoc Webinar: 5G and Beyond",
        excerpt: "Exploring the evolution of wireless standards and applications.",
        date: "2025-03-12",
        image: "/events/webinar_wie.png",
        tags: ["5G", "Networks"],
        link: "#",
      },
    ],
  },
  {
    id: "achal",
    name: "Dr. Achal Kumar",
    designation: "DEAN",
    department: "Computer Science & Engineering",
    avatar: "/achal_sir.png",
    bio: "Research interests in Data Mining, Machine Learning, and High-Performance Computing.",
    socials: { linkedin: "https://www.linkedin.com", website: "#" },
    posts: [
      {
        id: "achal-ml-talk",
        title: "Keynote: Practical ML Pipelines for Real-world Systems",
        excerpt: "A walkthrough of scalable ML pipelines and deployment trade-offs.",
        date: "2025-05-21",
        image: "/events/deeplearning.png",
        tags: ["ML", "Systems", "MLOps"],
        link: "#",
      },
      {
        id: "achal-paper-2025",
        title: "Paper: Efficient Feature Selection under Constraints",
        excerpt: "Proposes a robust method for feature selection balancing accuracy and cost.",
        date: "2025-02-10",
        image: "/events/datadive.png",
        tags: ["Research", "Optimization"],
        link: "#",
      },
    ],
  },
  {
    id: "shweta",
    name: "Dr. Shweta Gupta",
    designation: "Assistant Professor",
    department: "Artificial Intelligence & Data Science",
    avatar: "/shweta_mam.png",
    bio: "Works on Responsible AI, NLP, and Human-centered Machine Learning.",
    socials: { linkedin: "https://www.linkedin.com", website: "#" },
    posts: [
      {
        id: "shweta-nlp-paper",
        title: "Paper: Few-shot Adaptation for Domain-specific NLP",
        excerpt: "New techniques for rapid domain adaptation with minimal labels.",
        date: "2025-06-08",
        image: "/events/masterabroad.png",
        tags: ["NLP", "Few-shot"],
        link: "#",
      },
      {
        id: "shweta-ethics-panel",
        title: "Panel: Ethics in Applied AI",
        excerpt: "A discussion on fairness, transparency, and accountability in AI.",
        date: "2025-01-27",
        image: "/events/datadive.png",
        tags: ["Ethics", "AI"],
        link: "#",
      },
    ],
  },
];