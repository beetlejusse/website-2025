export interface Member {
  name: string;
  designation: string;
  src: string;
}

// Senior Council
export const seniorCouncil: Member[] = [
  {
    name: "Utsav Jana",
    designation: "Project Head",
    src: "/senior-council/utsav.jpg",
  },
  {
    name: "Bhoomika Sharma",
    designation: "Head of Operations",
    src: "/senior-council/bhoomika.jpg",
  },
  {
    name: "Manan Gupta",
    designation: "Head of Logistics",
    src: "/senior-council/manan.jpg",
  },
  {
    name: "Bhumika Garg",
    designation: "Head of Social Media",
    src: "/senior-council/bhumika-g.jpg",
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

// Junior Council
export const juniorCouncil: Member[] = [
  // Project Coordinators
  { name: "Suyash", designation: "Project Coordinator - DSA", src: "/junior-council/suyash.png" },
  { name: "Vanya Arora", designation: "Project Coordinator - DSA", src: "/junior-council/vanya.png" },

  { name: "Geetika Behl", designation: "Project Coordinator - Web Development", src: "/junior-council/geetika.png" },

  { name: "Arush Karnatak", designation: "Project Coordinator - Machine Learning", src: "/junior-council/arush.png" },
  { name: "Kusha Sharma", designation: "Project Coordinator - Machine Learning", src: "/junior-council/kusha.png" },

  { name: "Bhoomika Sharma", designation: "Project Coordinator - Robotics", src: "/junior-council/bhoomika.png" }
];

export const coordinators: Member[] = [

  { name: "Sneha", designation: "Design Coordinator", src: "/coordinators/sneha.png" },
  { name: "Anshika", designation: "Design Coordinator", src: "/coordinators/anshika.png" },
  { name: "Tanu", designation: "Design Coordinator", src: "/coordinators/tanu.png" },

  // PR Coordinators
  { name: "Anay Jha", designation: "PR Coordinator", src: "/coordinators/anay.jpg" },
  { name: "Shivam Singh Mahar", designation: "PR Coordinator", src: "/coordinators/shivam.png" },
  { name: "Deepansh Dutta", designation: "PR Coordinator", src: "/coordinators/deepansh.png" },

  // Event Coordinators
  { name: "Shreya Aggarwal", designation: "Event Coordinator", src: "/coordinators/shreya.png" },
  { name: "Avni Bhasin", designation: "Event Coordinator", src: "/coordinators/avni.png" },
  { name: "Simran Kapoor", designation: "Event Coordinator", src: "/coordinators/simran.png" },

];


export const MainCouncil: Member[] = [
  { name: "Arpan Basu Sachdeva", designation: "Chairperson - Main Branch", src: "/members/arpan.png" },
  { name: "Aditya", designation: "Vice Chairperson - Main Branch", src: "/members/aditya.jpg" },
  { name: "Swastika Srivastava", designation: "General Secretary - Main Branch", src: "/members/swastika.jpg" },
  { name: "Sagar Singh", designation: "Treasurer - Main Branch", src: "/members/sagar.jpg" },
  { name: "Vishal Belwal", designation: "Web Master - Main Branch", src: "/members/vishal.png" },
]

export const WIE: Member[] = [
  { name: "Prakriti Lohumi", designation: "Chairperson - WIE", src: "/wie/prakriti.jpg" },
  { name: "Arpita Guniyal", designation: "Vice Chairperson - WIE", src: "/wie/arpita.jpg" },
  { name: "Lakshay Joshi", designation: "General Secretary - WIE", src: "/wie/lakshay.jpg" },
]

export const COMSOC: Member[] = [
  { name: "Tamanna Verma", designation: "Chairperson - ComSoc", src: "/comsoc/tamannaverma.jpg" },
  { name: "Avikshit Trivedi", designation: "Vice Chairperson - ComSoc", src: "/comsoc/avikshit.jpg" },
  { name: "Divyanshi Aggarwal", designation: "General Secretary - ComSoc", src: "/comsoc/divyanshi.jpg" },
]