import "./App.css";

const Skills = (props) => {
    return (
        <div className="skills cv-item">
        <h3>My Skills</h3>
            <ul>
                <li>{props.firstSkill}</li>
                <li>{props.secondSkill}</li>
                <li>{props.thirdSkill}</li>
            </ul>
        </div>
    );
}

export default Skills; 