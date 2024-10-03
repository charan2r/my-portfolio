import Form from '../assets/form.png';
import Healthcare from '../assets/healthcare.jpg';
import Todo from '../assets/todo.jpg';
import Tourist from '../assets/tourist.jpg';
import ProjectInfo from './ProjectInfo';
import Space from '../assets/spacer.png';
import Calculator from '../assets/calculator.png';

const Projects = () => {

    return(
        <div>
            <h1 className='projectHeading'>My <b>Projects</b></h1>
            <div className='project'>
                <ProjectInfo projectphoto={Healthcare} projectname='Healthcare' />
                <ProjectInfo projectphoto={Form} projectname='FormEditor' />
                <ProjectInfo projectphoto={Todo} projectname='ToDo' />
                <ProjectInfo projectphoto={Tourist} projectname='TouristGuide'/>
                <ProjectInfo projectphoto={Space} projectname='Space' />
                <ProjectInfo projectphoto={Calculator} projectname='Calculator' />
            </div>
                
        </div>

    )
}

export default Projects;