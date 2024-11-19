import ProjectInfo from './ProjectInfo';
import Healthcare from '../assets/healthcare.jpg';
import Todo from '../assets/todo.jpg';
import Space from '../assets/space.png';
import Calculator from '../assets/calculator.png';
import ImageToText from '../assets/converter.png';

const Projects = () => {
    const projectList = [
        {
            title: "Healthcare Management System",
            description:
                "A full-stack healthcare management system designed to streamline patient records, doctor schedules, and appointment bookings. Built using HTML, CSS, JavaScript, PHP, and MySQL, this project offers a user-friendly interface for both patients and healthcare providers. It ensures secure data storage and includes features such as dynamic search, real-time updates, and a responsive design optimized for desktops and mobile devices.",
            github: "https://github.com/charan2r/Healthcare-Management.git",
            demo: "",
            photo: Healthcare,
        },
        {
            title: "To-Do App",
            description:
                "A full-stack to-do list application that allows users to manage their tasks efficiently. Developed using HTML5, Tailwind CSS, JavaScript, Node.js, Express, and SQLite, this app integrates essential features like user authentication, CRUD operations, task expiration notifications, and a powerful search function for locating tasks. It also offers a clean, responsive design for seamless use on any device.",
            github: "https://github.com/charan2r/todo.git",
            demo: "",
            photo: Todo,
        },
        {
            title: "Space Website",
            description:
                "A simple landing page for a space exploration website, built using the MERN stack. This project includes features like user authentication, interactive UI components, and a responsive layout designed to engage users. It demonstrates a modern web development approach with full-stack capabilities, integrating React on the frontend and Node.js with MongoDB on the backend.",
            github: "https://github.com/charan2r/authentication.git",
            demo: "",
            photo: Space,
        },
        {
            title: "Calculator App",
            description:
                "A React-based application that combines a simple calculator and an age calculator. The app is designed to provide accurate calculations with an intuitive interface. This project focuses on demonstrating React component structuring, state management, and deployment for quick access online.",
            github: "https://github.com/charan2r/calculator-app.git",
            demo: "https://calculator-app-chi-ruby.vercel.app/",
            photo: Calculator,
        },
        {
            title: "Image to Text Converter",
            description:
                "A React application that utilizes Tesseract.js, an OCR (Optical Character Recognition) library, to extract text from images. The project showcases the power of modern web technologies to solve real-world problems, allowing users to upload an image and instantly receive its textual content in an editable format.",
            github: "https://github.com/charan2r/converter.git",
            demo: "https://image-to-text-converter-liart.vercel.app/",
            photo: ImageToText,
        },
    ];
    

    return (
        <div>
            <h1 className="projectHeading">
                My <b>Projects</b>
            </h1>
            <p className="projectParagraph">Check out some of the projects I have worked on.</p>
            <div className="project">
                {projectList.map((project, index) => (
                    <ProjectInfo key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
