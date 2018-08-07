import React, { Component } from 'react';
// import AboutPagePic from'./img/aboutPagePic.jpg';
import teamMember1 from'./img/team/asad.jpeg';
import teamMember2 from'./img/team/nav.png';
import teamMember3 from'./img/team/rod2.png';
import teamMember4 from'./img/team/sam.png';
import teamMember5 from'./img/team/lak2.png';

import {Link} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class AboutPage extends Component {
  constructor() {
    super();
    this.state = {
    };
  }


  render() {
    return (
      <div className="aboutPage">

            <div className="CardHeader">
              <p>About</p>
              <Link to="/HomePage/"><FontAwesomeIcon icon={faTimes} /></Link>
            </div>
            <Card className="aboutMission">
                  <div className="Mission">
                      <h2> Our Mission </h2>
                      <p className="pCenter">. . . Eduvisors match make you with your most compatible educational path in Canada . . .</p>
                  </div>

                  <div class="vid">
                          <video title="video" width="560" height="315" src={require("./img/video/Eduvisors_1-min.mp4?rel=0")} controls allowfullscreen></video>
                  </div>


                  <div className="aboutEduvisors">
                          <h2>Learn About Eduvisors</h2>
                          <div className="LearnAbout">
                          <p> It all began by reflecting a little about all the challenges we all faced as International Students in our path to study in Canada. And we felt we needed to help fellow students by building a hub of information and support services that would facilitate the journey and ease the challenges of this process.</p>

                          <p>In the heart of Eduvisors, we placed an engine that calculates recommendations that will help students narrow their choices and decisions. We are implementing protocols and technology to make sure that all personal data is kept secure and private. And we also provide information on schools and provinces to help students in their research.</p>

                          <p>Eduvisors is also bringing a selection of partner companies that will complement our offering with new information and services that will support students in their journey to study in Canada.</p>

                          <p>And on top of all of that, we are making this free of charge for all students.
                          Welcome to Eduvisors and see you in Canada!
                          </p>
                          </div>
                  </div>
                </Card>

                  <Card className="teamMembersWrapper">

                        <h2> Meet Our Team </h2>

                        <div className="teamMember t1">
                              <a href="https://www.linkedin.com/in/asadaliazam/" target="_blank" rel="noopener noreferrer">
                              <img src={require("./img/linkedin.svg")} alt="linkedin icon" />
                              </a>
                              <img src={teamMember1} alt="Team Member"/>
                              <h3>Asad Azam</h3>
                              <p>Developer & QA Lead</p>
                        </div>

                        <div className="teamMember t2">
                              <a href="https://www.linkedin.com/in/navrose-rikhi/" target="_blank" rel="noopener noreferrer">
                              <img src={require("./img/linkedin.svg")} alt="linkedin icon" />
                              </a>
                              <img src={teamMember2} alt="Team Member"/>
                              <h3>Navorse Sharma</h3>
                              <p>Developer Lead</p>
                        </div>

                        <div className="teamMember t3">
                              <a href="https://www.linkedin.com/in/rodrigoornellas/" target="_blank" rel="noopener noreferrer">
                              <img src={require("./img/linkedin.svg")} alt="linkedin icon" />
                              </a>
                              <img src={teamMember3} alt="Team Member"/>
                              <h3>Rod Ornellas</h3>
                              <p>Developer & Project Manager</p>
                        </div>

                        <div className="teamMember t4">
                              <a href="https://www.linkedin.com/in/samanehhos/" target="_blank" rel="noopener noreferrer">
                              <img src={require("./img/linkedin.svg")} alt="linkedin icon" />
                              </a>
                              <img src={teamMember4} alt="Team Member"/>
                              <h3>Samaneh Hoseini</h3>
                              <p>Developer & UX Lead</p>
                        </div>

                        <div className="teamMember t5">
                              <a href="https://www.linkedin.com/in/lsachdeva/" target="_blank" rel="noopener noreferrer">
                              <img src={require("./img/linkedin.svg")} alt="linkedin icon" />
                              </a>
                              <img src={teamMember5} alt="Team Member"/>
                              <h3>Lakshay Sachdeva</h3>
                              <p>Lead Designer</p>


                        </div>

                </Card>


</div>

    );
  }
}

export default AboutPage;
