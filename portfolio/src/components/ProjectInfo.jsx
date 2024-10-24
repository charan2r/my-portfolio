import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";

// eslint-disable-next-line react/prop-types
const ProjectInfo = ({projectname, projectphoto}) => {

    const description ={
        Healthcaredescription: "A full-stack healthcare management system developed using HTML, CSS, JavaScript, PHP, and MySQL.",
        Healthcaregithub:"https://github.com/charan2r/Healthcare-Management.git",

        ToDodescription: "This is a full-stack to-do app created using HTML5, Tailwind CSS, JavaScript, Node js, express and sqlite implementing features like crud operations, user authentication,task expiration, and task searching.",
        ToDogithub:"https://github.com/charan2r/todo.git",


        Spacedescription: "This is a simple landing page for a space website with user authentication developed using MERN stack.",
        Spacegithub:"https://github.com/charan2r/authentication.git",

        Calculatordescription: "In this project I have created a simple calculator and a age calculator using React.",
        Calculatorgithub:'https://github.com/charan2r/calculator-app.git',
        Calculatorwebsite:'https://calculator-app-chi-ruby.vercel.app/',

        ImageToTextdescription: "Image to Text converter app developed using React and Tessaract.js.",
        ImageToTextgithub:"https://github.com/charan2r/converter.git",
        ImageToTextwebsite:"https://image-to-text-converter-liart.vercel.app/",
    }

    let show ='';
    if(description[projectname + 'github'] === ''){
        show = 'none';
    }

    return (
        <div className="projectBox">
            <img className="projectPhoto" src={projectphoto}/>
            <div>
                <br/>
                <h3>{projectname}</h3>
                <br/>
                {description[projectname + 'description']}
                <br/>

                <a style={{display:show}} href={description[projectname + 'github']} target='_blank'>
                   <button className='projectbtn'><FaGithub/> Github</button>
                </a>

                <a href={description[projectname + 'website']} target='_blank'>
                   <button className='projectbtn'><CgFileDocument/> Demo</button>
                </a>
            </div>

        </div>
    )

}

export default ProjectInfo;