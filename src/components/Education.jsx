import './App.css';

const Education = (props) => {
    return(
        <div className="education cv-item">
        <h3>Education</h3>
        <ul>
        <li className="item">School attended: {props.schoolName}</li>
        <li className="item">Course studied: {props.course}</li>
        <li className="item">Years of study: {props.yearOfStudy}</li>
        </ul>
        </div>
    )
}

export default Education;