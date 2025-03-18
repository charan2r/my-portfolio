import ProjectInfo from './ProjectInfo';
import Healthcare from '../assets/healthcare.jpg';
import Ecommerce from '../assets/ecommerce.png';
import Logbook from '../assets/logbook.png';
import Forms from '../assets/forms.png';

const Projects = () => {
    const projectList = [
        {
            title: "Aura Store",
            description:
                "Developed an e-commerce website using MERN Stack to provide a seamless shopping experience for customers. The site features a user-friendly interface, product categorization, search functionality, and a secure payment gateway. ",
            github: "https://github.com/charan2r/aura-store.git",
            demo: "",
            photo: Ecommerce,
        },
        {
            title: "Digital Logbook",
            description:
                "Developed a logbook system as a group project to track, review, and grade daily activities for students and mentors. My contributions included implementing a robust testing framework to enhance system reliability, creating a feedback component to improve mentor-student interactions, and building backend functionality for bulk report exports to streamline academic evaluations. ",
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
                "A healthcare management system designed to manage appointment bookings and improve disease awareness among people by giving information about diseases. Built using HTML, CSS, JavaScript, PHP, and MySQL, this project offers a user-friendly interface for both patients and healthcare providers. ",
            github: "https://github.com/charan2r/Healthcare-Management.git",
            demo: "",
            photo: Healthcare,
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
            <div className="projectButton">
                <a href="https://github.com/charan2r" target="_blank" rel="noreferrer">
                    See More...
                </a>
            </div>
        </div>
    );
};

export default Projects;
