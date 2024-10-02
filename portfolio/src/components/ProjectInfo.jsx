import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";

// eslint-disable-next-line react/prop-types
const ProjectInfo = ({projectname, projectphoto}) => {

    const description ={
        Healthcaredescription: "This is a full-stack healthcare management system developed using HTML, CSS, JavaScript, PHP, and MySQL.",
        Healthcaregithub:"https://github.com/charan2r/Healthcare-Management.git",

        ToDodescription: "This is a full-stack to-do app created using HTML5, Tailwind CSS and JavaScript implementing features like crud operations, user authentication,task expiration, and task searching.",
        ToDogithub:"https://github.com/charan2r/todo.git",

        FormEditordescription: "This is a landing page for a form editor developed using react.",
        FormEditorgithub:"https://github.com/charan2r/form-editor.git",
        FormEditorwebsite:"https://form-editor-ui.vercel.app/",

        TouristGuidedescription: "This is a simple tourist guide website developed using HTML, CSS, and JavaScript.",
        TouristGuidegithub:"https://github.com/charan2r/Travel-Website.git",

        Spacedescription: "This is a simple landing page for a space website developed using next js.",
        Spacegithub:"https://github.com/charan2r/space-page.git",
        Spacewebsite:"https://space-page-rust.vercel.app/",
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