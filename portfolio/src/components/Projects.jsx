import Healthcare from '../assets/healthcare.jpg';
import Todo from '../assets/todo.jpg';
import ProjectInfo from './ProjectInfo';
import Space from '../assets/spacer.png';
import Calculator from '../assets/calculator.png';

const Projects = () => {

    return(
        <div>
            <h1 className='projectHeading'>My <b>Projects</b></h1>
            <p className='projectParagraph'>Check out some of the projects I have worked on.</p>
            <div className='project'>
                <ProjectInfo projectphoto={Healthcare} projectname='Healthcare' />
                
                <ProjectInfo projectphoto={Todo} projectname='ToDo' />
                
                <ProjectInfo projectphoto={Space} projectname='Space' />
                <ProjectInfo projectphoto={Calculator} projectname='Calculator' />
            </div>
                
        </div>

    )
}

export default Projects;