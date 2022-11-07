import React from "react";
import {
  VerticalTimeline, 
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work"

function Experience() {
  return (<div className="experience">
    
    <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement className="vertical-timeline-element--education" date="2013-2017" iconStyle={{background: "#3e497a", color:"#fff"}}
      icon={<SchoolIcon/>}>
        <h3 className="vertical-timeline-element-title">
          Edwared Homu High, Giyani, Limpopo
        </h3>
        <p> <b>Bachelor Certificate </b><br></br><ol>Mathematics, Physical Science, Life Science, Agriculture</ol></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--education" date="2018-2020" iconStyle={{background: "#3e497a", color:"#fff"}}
      icon={<SchoolIcon/>}>
        <h3 className="vertical-timeline-element-title">
          University of Limpopo, Polokwane, Limpopo
        </h3>
        <p> <b>Bachelor Degree in computer & Mathematical Science</b></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--education" date="2021-2021" iconStyle={{background: "#3e497a", color:"#fff"}}
      icon={<SchoolIcon/>}>
        <h3 className="vertical-timeline-element-title">
          University of Limpopo, Polokwane, Limpopo
        </h3>
        <p> <b>Honours Degree in computer Science </b><br></br><ol>Software Engineering, Advanced Databases, Artificial Intelligence, Computer Networks, and a Research in Machine Learning(ML)</ol></p>
      </VerticalTimelineElement>
      
      <VerticalTimelineElement className="vertical-timeline-element--education" date=" Jan 2021-Dec 2021" iconStyle={{background: "#e9d35b", color:"#fff"}}
      icon={<WorkIcon/>}>
        <h3 className="vertical-timeline-element-title">
          University of Limpopo, Polokwane, Limpopo
        </h3>
        <p> <b>Computer Lab Assistance</b></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--education" date=" March 2022-Present" iconStyle={{background: "#e9d35b", color:"#fff"}}
      icon={<WorkIcon/>}>
        <h3 className="vertical-timeline-element-title">
          Nielsen, Rosebank, Johannesburg
        </h3>
        <p> <b>Data Analyst Intern</b></p>
      </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
  ); 
}

export default Experience;
