/* eslint-disable react/prop-types */
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";


const ProjectInfo = ({ project }) => {
    const { title, description, github, demo, photo } = project;

    return (
        <div className="projectBox">
            <img className="projectPhoto" src={photo} alt={`${title} project`} />
            <div>
                <br />
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="projectLinks">
                    {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer">
                            <button className="projectbtn">
                                <FaGithub /> Github
                            </button>
                        </a>
                    )}
                    {demo && (
                        <a href={demo} target="_blank" rel="noopener noreferrer">
                            <button className="projectbtn">
                                <CgFileDocument /> Demo
                            </button>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectInfo;
