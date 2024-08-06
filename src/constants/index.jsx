import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Nehal Ingole",
  greet: "Hello there! 👋🏻",
  description:
    " I am a DevOps Engineer and Frontend Developer with expertise in cloud platforms like AWS, Docker orchestration, and cybersecurity. I combine my skills in automation and stylish frontend design to deliver seamless, secure, and engaging user experiences. ",
};

export const PROJECTS = [
  {
    id: 1,
    name: "HLS Adaptive Bitrate Streaming With AWS",
    description:
      "  thrilled to share that he has recently accomplished a significant milestone in his streaming journey by deploying a High-Level Streaming (HLS) solution utilizing Docker and Amazon Web Services (AWS).",
    image: projectImage1,
    githubLink: " https://www.linkedin.com/posts/nehal-ingole_streaming-videostreaming-docker-activity-7207360568955924481--ZGI?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 2,
    name: "Simplifying Docker Management with Portainer CE",
    description:
      " In this project, I explore how Portainer CE simplifies Docker management with its intuitive web interface. From managing containers and images to deploying stacks and monitoring resources, Portainer streamlines workflows for both beginners and experts. Check out the full blog to learn more!",
    image: projectImage2,
    githubLink: "https://learnwithnehal.hashnode.dev/simplifying-docker-management-with-portainer-ce",
  },
  {
    id: 3,
    name: " CI/CD Application on ECR and DOcker",
    description:
      " Excited to announce that I've automated the upload of Docker containers to AWS ECR using GitHub Actions! This new workflow boosts deployment efficiency and eliminates manual headaches.",
    image: projectImage3,
    githubLink: " https://www.linkedin.com/posts/nehal-ingole_githubactions-aws-ecr-activity-7183878521130217474-oS8C?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 4,
    name: "Zoom Clone Replicated ",
    description:
      "Successfully recreated a Zoom clone in just a few hours with focused effort and expert guidance. Challenges are being addressed and will be resolved soon. Cheers to smoother virtual meetings ahead!",
    image: projectImage4,
    githubLink: "https://www.linkedin.com/posts/nehal-ingole_productivity-zoomclone-techinnovation-activity-7179693269772058624-G0Gq?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 5,
    name: "Ansible Server Management Simplified",
    description:
      " Successfully established a robust Ansible setup, including environment configuration, inventory management, playbook creation, and service management. Added bonus automation for deploying web applications. Excited for the streamlined server management ahead!",
    image: projectImage5,
    githubLink: "https://www.linkedin.com/posts/nehal-ingole_document-activity-7178789372949897216-h1FK?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 6,
    name: "Launching My GitHub Repository",
    description:
      "Thrilled to share that I've launched a GitHub repository using AWS and my local machine! Explore my comprehensive blog post for detailed steps and tips on setting up your own repository. Dive in and start building your projects with ease! ",
    image: projectImage6,
    githubLink: "https://www.linkedin.com/posts/nehal-ingole_github-aws-codingjourney-activity-7172914850921148416-9Lue?utm_source=share&utm_medium=member_desktop",
  },
];

export const BIO = [
  "Nehal Ingole graduated from Government College of Engineering, Karad in 2023, establishing a strong foundation in full-stack engineering and DevOps.",
  "With a proven track record in executing projects on AWS and expertise in Docker orchestration and cybersecurity, Nehal Ingole excels in automating and securing cloud-based environments.",
  "Passionate about DevOps methodologies and frontend development, Nehal has authored over 72 insightful blog posts and continuously embraces new technologies to drive innovation and efficiency in tech solutions.",
];


export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Redis",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "Lead Frontend Developer",
    company: "Innovative Tech Solutions",
    duration: "July 2020 - Present",
    description:
      "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },
  {
    title: "Frontend Engineer",
    company: "Digital Creations",
    duration: "February 2016 - June 2020",
    description:
      "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
  },
  {
    title: "Junior Web Developer",
    company: "Bright Future Technologies",
    duration: "August 2014 - January 2016",
    description:
      "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  },
];

export const EDUCATION = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    duration: "September 2012 - June 2014",
    description:
      "Specialized in Human-Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with honors.",
  },
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "University of California, Berkeley",
    duration: "September 2008 - June 2012",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
