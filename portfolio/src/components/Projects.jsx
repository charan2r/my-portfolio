import Form from '../assets/form.png';
import Healthcare from '../assets/healthcare.png';
import Todo from '../assets/todo.png';
import Tourist from '../assets/tourist.png';
import ProjectInfo from './ProjectInfo';

const Projects = () => {

    return(
        <div>
            <h1 className='projectHeading'>My Projects</h1>
            <div className='project'>
                <ProjectInfo projectphoto={Healthcare} projectname='Healthcare System' />
                <ProjectInfo projectphoto={Form} projectname='Form Editor' />
                <ProjectInfo projectphoto={Todo} projectname='Todo App' />
                <ProjectInfo projectphoto={Tourist} projectname='Tourist Guide'/>
            </div>
                
        </div>

    )
}

export default Projects;