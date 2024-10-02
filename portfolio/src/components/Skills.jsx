//import React from 'react'; 
import {FaReact, FaPython, FaGithub, FaFigma, FaLaravel, FaJava} from "react-icons/fa";
import {DiNodejs, DiJavascript1, DiPostgresql, DiDjango } from "react-icons/di";
import {SiExpress, SiMongodb, SiPostman, SiVercel, SiPrisma} from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";

// eslint-disable-next-line react/prop-types
const Skills = ({skill}) => {
    const icons = {
        HTML: <FaHtml5 />,
        "Tailwind CSS": <RiTailwindCssFill />,
        JavaScript: <DiJavascript1 />,
        React: <FaReact />,
        NodeJS: <DiNodejs />,
        ExpressJS: <SiExpress />,
        MongoDB: <SiMongodb />,
        MySQL: <GrMysql />,
        PostgreSQL: <DiPostgresql />,
        Postman: <SiPostman />,
        Vercel: <SiVercel />,
        Java: <FaJava />,
        Python: <FaPython />,
        "Python Django": <DiDjango />,
        "Prisma ORM": <SiPrisma />,
        "PHP Laravel": <FaLaravel />,
        Github: <FaGithub />,
        Figma: <FaFigma />
    }

    return (
        <div title={skill} className='SkillBox'>
            {icons[skill]}
        </div>
    )
}

export default Skills;