import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import WhatsappIcon from "@material-ui/icons/WhatsApp";
import GithubIcon from "@material-ui/icons/GitHub";
import '../styles/Home.css';




function Home() {
  return <div className="home">
    <div className="about">
        <h2>Hi,I am Thapelo</h2>
        <div className="prompt"><p>An aspiring software Engineer with a passion for learning and creating.</p>
        
        <a href="https://github.com/ThapeloMusa"><GithubIcon/></a>
        
        </div>
      
    </div>
    <div className="about">
    <div className="about">
        <h2>Why Sovtech</h2>
        <div className="prompt"><p>SovTech helps employees develop soft skills and professionalism, giving graduates the chance to work on real projects that help expand their real skills, SovTech gives employees the opportunity to develop in-house Therefore, I am interested in joining Sovtech as a graduate.</p>
        
        </div>
    </div>
      
    </div>
    
    <div className="skills">
        <h1>Skills</h1>
        <ol className="list"> 
            <li className="item">
                <h2>Front-End</h2>
                <span>ReactJS, HTML, CSS, React Native, NPM, BootStrap, Yarn</span>
            </li>
            <li className="item">
                <h2>Back-End</h2>
                <span> NodeJS, MySQL, MS SQLExpressJS</span>
            </li>
            <li className="item">
                <h2>Programming Langauges</h2>
                <span>JavaScript, Python, C#, TyperScript</span>
            </li>

        </ol>
    </div>
  </div>
}

export default Home;
