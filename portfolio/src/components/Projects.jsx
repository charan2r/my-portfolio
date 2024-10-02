import Form from '../assets/form.png';
import Healthcare from '../assets/healthcare.jpg';
import Todo from '../assets/todo.jpg';
import Tourist from '../assets/tourist.jpg';
import ProjectInfo from './ProjectInfo';

const Projects = () => {

    return(
        <div>
            <h1 className='projectHeading'>My <b>Projects</b></h1>
            <div className='project'>
                <ProjectInfo projectphoto={Healthcare} projectname='Healthcare' />
                <ProjectInfo projectphoto={Form} projectname='FormEditor' />
                <ProjectInfo projectphoto={Todo} projectname='ToDo' />
                <ProjectInfo projectphoto={Tourist} projectname='TouristGuide'/>
            </div>
                
        </div>

    )
}

export default Projects;