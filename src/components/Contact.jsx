import './App.css';

const Contact = (props) => {
    return(
        <div className="contact cv-item">
        <h3>Contact info</h3>
        <ul>
        <li className="item">Name: {props.fullName}</li>
        <li className="item">Email address: {props.emailAddress}</li>
        <li className="item">Mobile Number: {props.mobileNumber}</li>
        </ul>
        </div>
    )
}

export default Contact;