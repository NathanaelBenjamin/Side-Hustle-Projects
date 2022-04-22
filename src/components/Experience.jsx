import './App.css';

const Experience = (props) => {
    return(
        <div className="experience cv-item">
        <h3>Experience</h3>
        <ul>
        <li className="item">Company name: {props.companyName}</li>
        <li className="item">Position held: {props.positionTitle}</li>
        <li className="item">Date from and until when you worked for that company: {props.yearOfWork}</li>
        </ul>
        </div>
    )
}

export default Experience;