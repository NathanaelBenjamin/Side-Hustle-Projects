import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skillls';
import Footer from './components/Footer';
import about from './components/about-me';
import './components/App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      <h2>MY CV</h2>
      </header>
      
      <div className='cv-content'>
        {about.map(item => {
         return(
          <Contact 
          fullName = {item.fullName}
          emailAddress = {item.emailAddress}
          mobileNumber = {item.mobileNumber} 
        />
         ) 
        })}

        {about.map(item => {
         return(
        <Education 
          schoolName = {item.schoolName}
          course = {item.course}
          yearOfStudy = {item.yearOfStudy}
        />
        ) 
        })}
          
        {about.map(item => {
         return( 
        <Experience 
          companyName = {item.companyName}
          positionTitle = {item.positionTitle}
          yearOfWork = {item.yearOfWork}
        />
        ) 
        })}

        {about.map(item => {
          return(
            <Skills 
              firstSkill = {item.skills[0]}
              secondSkill = {item.skills[1]}
              thirdSkill = {item.skills[2]}
            />
          )
        })}
      </div>

      <Footer />
    </div>
  );
};

export default App;
