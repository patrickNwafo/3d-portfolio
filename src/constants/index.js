
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    link,
    ama,
    center,
    cara,
    ontheside,

    threejs,
    three,
    amazon,
    dalle
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Flutter Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "CenterBox Solutions",
        icon: center,
        iconBg: "#383E56",
        date: "Dec 2022 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "I've had the opportunity to work on a wide range of projects as an intern all the way up to junior, from e-commerce platforms to real-time chat applications.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "These experiences have not only strengthened my technical skills but also taught me the value of collaboration and effective communication within a development team.",
        ],
    },
    {
        title: "NextJs Developer",
        company_name: "Amazon",
        icon: ama,
        iconBg: "#E6DEDD",
        date: "Freelance",
        points: [
            "Led the development of an Amazon clone, a fully functional e-commerce website designed to mimic the core features and user experience of Amazon. This project aimed to provide a hands-on learning experience in e-commerce website development and showcase the ability to replicate a widely recognized platform.",
            "Leveraged Next.js for the entire project, handling both the frontend and backend aspects to replicate the user interface and design elements of Amazon.",
            "Employed Firebase for efficient data management and user authentication, ensuring a robust database system within the Next.js environment.",
            "Including user authentication, shopping cart, and payment processing with the Stripe API to ensure a secure and seamless shopping experience.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Cara",
        icon: cara,
        iconBg: "#383E56",
        date: "Frelance",
        points: [
            "Cara is an online clothing boutique designed to offer a personalized and delightful shopping experience. Built with HTML, CSS, and JavaScript, Cara provides a user-friendly interface and powerful features to help customers discover their perfect style.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Clean and Modern Design: Cara boasts a sleek and visually appealing interface, making product browsing a pleasure. High-quality product images and clear navigation ensure a seamless user experience.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Ontheside",
        icon: ontheside,
        iconBg: "#E6DEDD",
        date: "Jan 2024 - Present",
        points: [
            "Ontheside is a web application built to foster meaningful mentorship connections. It leverages powerful technologies to create a seamless and secure platform for both mentors and mentees.",
            "Firebase Authentication: Secure and convenient user authentication is facilitated through Firebase. Users can easily sign up as either mentors or mentees, creating a clear distinction within the platform.",
            "Formik for Efficient Form Handling: Formik is implemented to manage user signup forms effectively. This helps streamline the signup process for both mentors and mentees, collecting necessary information for successful connection.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Chinedu proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Chinedu does.",
        name: "Chris Brown",
        designation: "COO",
        company: "Ontheside",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Chinedu optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 CenterBox Solutions",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Threejs Customizer",
        description:
            "A SAAS product where users can design their T-shirt using a 3D-model, apply colors and textures to the model ask AI to help you generate stunning textures and save them to your gallery",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "threeJs",
                color: "blue-text-gradient"
            },
            {
                name: "framer-motion",
                color: "blue-text-gradient"
            },
            {
                name: "maath",
                color: "pink-text-gradient"
            },
            {
                name: "valtio",
                color: "green-text-gradient"
            },
            {
                name: "openai",
                color: "pink-text-gradient"
            },
        ],
        image: three,
        url: "https://threejscustomizer-rt.vercel.app/",
        urlImg: link,
        source_code_link: "https://github.com/patrickNwafo/threejscustomizer",
    },
    {
        name: "Amazon-Clone",
        description:
            "A fully functional e-commerce website designed to mimic the core features and user experience of Amazon. This project aimed to provide a hands-on learning experience in e-commerce website development and showcase the ability to replicate a widely recognized platform.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "webhooks",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "stripe API",
                color: "green-text-gradient",
            },
            {
                name: "Firebase",
                color: "blue-text-gradient",
            },
            {
                name: "nextAuth",
                color: "pink-text-gradient",
            },
        ],
        image: amazon,
        url: "https://amazon-clone-3woo.vercel.app/",
        urlImg: link,
        source_code_link: "https://github.com/patrickNwafo/amazon-app",
    },
    {
        name: "Dall-E",
        description:
            "A Fullstack MERN AI image generation App with modern and minimal design, dynamic image layout, hover effect that showcases a users prompt to generate each ai image, their name and a download button search functionality, the ability to create new ai generated images by clicking the surprise me button or entering any text of your choice, sharing your post with the community and so on..",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "nodejs",
                color: "green-text-gradient",
            },
            {
                name: "express",
                color: "pink-text-gradient",
            },
            {
                name: "mongodb",
                color: "blue-text-gradient",
            },
            {
                name: "openai",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: dalle,
        urlImg: link,
        url: "https://dall-e-rose-ten.vercel.app/",
        source_code_link: "https://github.com/patrickNwafo/dall-e",
    },
];

export { services, technologies, experiences, testimonials, projects };