import React, { Component } from 'react';
// import AboutPagePic from'./img/aboutPagePic.jpg';
import teamMember1 from'./img/team/asad.jpeg';
import teamMember2 from'./img/team/nav.png';
import teamMember3 from'./img/team/rod2.png';
import teamMember4 from'./img/team/sam.png';
import teamMember5 from'./img/team/lak2.png';

class AboutPage extends Component {
  constructor() {
    super();
    this.state = {
    };
  }


  render() {
    return (
      <div className="aboutPage">

        <div className="aboutMission">
          <h2> Our Mission </h2>
          <p className="pCenter"> - Eduvisors match makes students with great recommendations for an educational path in Canada -  </p>
          <embed className="vid" src={require("./img/video/Eduvisors_1-min.mp4")} type="video/mp4" autostart="false" height="260" width="440" />
        </div>

        <div className="aboutEduvisors">
          <h2>About</h2>
          <p> It all began by reflecting a little about all the challenges we all faced as International Students in our path to study in Canada. And we felt we needed to help fellow students by building a hub of information and support services that would facilitate the journey and ease the challenges of this process.</p>

          <p>In the heart of Eduvisors, we placed an engine that calculates recommendations that will help students narrow their choices and decisions. We are implementing protocols and technology to make sure that all personal data is kept secure and private. And we also offering information about the schools and provinces to support the students decision process.</p>

          <p>Eduvisors is also bringing a selection of partner companies that will complement with new information and services that will support you in this journey to Canada.</p>

          <p>And on top of all of that, we are making this free of charge to all students.
          Welcomo to Eduvisors and see you in Canada!
          </p>
        </div>




          <div className="teamMembersWrapper">

            <h2> Meet Our Team </h2>


              <div className="teamMember t1">
                <img src={teamMember1} alt="Team Member"/>
                <h3>Asad Azam</h3>
                <p>Developer & QA Lead</p>
              </div>

              <div className="teamMember t2">
                <img src={teamMember2} alt="Team Member"/>
                <h3>Navorse Sharma</h3>
                <p>Develper Lead</p>
              </div>

              <div className="teamMember t3">
                <img src={teamMember3} alt="Team Member"/>
                <h3>Rod Ornellas</h3>
                <p>Developer & Project Manager</p>
              </div>

              <div className="teamMember t4">
                <img src={teamMember4} alt="Team Member"/>
                <h3>Samaneh Hoseini</h3>
                <p>Developer & UX Lead</p>
              </div>

              <div className="teamMember t5">
                <img src={teamMember5} alt="Team Member"/>
                <h3>Lakshay Sachdeva</h3>
                <p>Lead Designer</p>
              </div>

        </div>

</div>




    );
  }
}

export default AboutPage;
