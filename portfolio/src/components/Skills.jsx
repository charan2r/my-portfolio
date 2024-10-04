//import React from 'react'; 
import {FaReact, FaPython, FaGithub, FaFigma, FaLaravel, FaJava, FaCss3Alt, FaGitAlt} from "react-icons/fa";
import {DiNodejs, DiJavascript1, DiPostgresql, DiDjango } from "react-icons/di";
import {SiExpress, SiMongodb, SiPostman, SiPrisma} from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { BsBootstrapFill } from "react-icons/bs";
import { BiLogoTypescript } from "react-icons/bi";


// eslint-disable-next-line react/prop-types
const Skills = ({skill}) => {
    const icons = {
        HTML5: <FaHtml5 />,
        CSS3: <FaCss3Alt />,
        Bootstrap: <BsBootstrapFill />,
        "Tailwind CSS": <RiTailwindCssFill />,
        JavaScript: <DiJavascript1 />,
        TypeScript: <BiLogoTypescript />,
        React: <FaReact />,
        NextJs: <RiNextjsFill />,
        NodeJs: <DiNodejs />,
        ExpressJs: <SiExpress />,
        MongoDB: <SiMongodb />,
        MySQL: <GrMysql />,
        PostgreSQL: <DiPostgresql />,
        Postman: <SiPostman />,
        Java: <FaJava />,
        Python: <FaPython />,
        Django: <DiDjango />,
        "Prisma ORM": <SiPrisma />,
        Laravel: <FaLaravel />,
        Git: <FaGitAlt />,
        Github: <FaGithub />,
        Figma: <FaFigma />
    }

    return (
        <div className='SkillBox'>
            <div>{icons[skill]}</div>
            <p>{skill}</p>
        </div>
    )
}

export default Skills;