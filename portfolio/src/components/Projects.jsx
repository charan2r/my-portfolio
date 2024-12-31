import ProjectInfo from './ProjectInfo';
import Healthcare from '../assets/healthcare.jpg';
import Todo from '../assets/todo.png';
import Calculator from '../assets/calculator.png';
import ImageToText from '../assets/converter.png';
import Ecommerce from '../assets/ecommerce.png';
import Logbook from '../assets/logbook.png';
import Forms from '../assets/forms.png';

const Projects = () => {
    const projectList = [
        {
            title: "E-commerce Site",
            description:
                "A full-stack healthcare management system designed to manage appointment bookings and improve disease awareness among people by giving information about diseases. Built using HTML, CSS, JavaScript, PHP, and MySQL, this project offers a user-friendly interface for both patients and healthcare providers. ",
            github: "https://github.com/charan2r/e-commerce-site.git",
            demo: "",
            photo: Ecommerce,
        },
        {
            title: "Digital Logbook",
            description:
                "Developed a system as a group project to track, review, and grade daily activities for students and mentors. My contributions included implementing a robust testing framework to enhance system reliability, creating a feedback component to improve mentor-student interactions, and building backend functionality for bulk report exports to streamline academic evaluations. ",
            github: "",
            demo: "",
            photo: Logbook,
        },
        {
            title: "Forms Management System",
            description:
                "Web application developed as a group project for organizations to create and customize form templates, streamlining the digitization of information collection. My contributions included designing customizable template components, building reliable APIs for user, organization, and template management in CRUD operations, and integrating JWT-based authentication to enhance platform security. ",
            github: "",
            demo: "",
            photo: Forms,
        },
        {
            title: "Healthcare Management System",
            description:
                "A full-stack healthcare management system designed to manage appointment bookings and improve disease awareness among people by giving information about diseases. Built using HTML, CSS, JavaScript, PHP, and MySQL, this project offers a user-friendly interface for both patients and healthcare providers. ",
            github: "https://github.com/charan2r/Healthcare-Management.git",
            demo: "",
            photo: Healthcare,
        },
        {
            title: "To-Do App",
            description:
                "A full-stack to-do list application that allows users to manage their tasks efficiently. Developed using HTML5, Tailwind CSS, JavaScript, Node.js, Express, and SQLite, this app integrates essential features like user authentication, CRUD operations, task expiration notifications, and a search function for locating tasks. ",
            github: "https://github.com/charan2r/todo-app.git",
            demo: "",
            photo: Todo,
        },
        {
            title: "Calculator App",
            description:
                "A React-based application that combines a simple calculator and an age calculator. The app is designed to provide accurate calculations with an intuitive interface.",
            github: "https://github.com/charan2r/calculator-app.git",
            demo: "https://calculator-app-chi-ruby.vercel.app/",
            photo: Calculator,
        },
        {
            title: "Image to Text Converter",
            description:
                "A React application that utilizes Tesseract.js, an OCR (Optical Character Recognition) library, to extract text from images. ",
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
