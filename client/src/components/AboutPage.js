import React, { Component } from 'react';
import AboutPagePic from'./img/aboutPagePic.jpg';
import teamMember1 from'./img/teamMember1.png';





class AboutPage extends Component {
  constructor() {
    super();
    this.state = {
    };
  }


  render() {
    return (
      <div className="aboutPage">
        <img src={AboutPagePic} alt="About Page Picture"/>

        <div className="aboutSection">
          <h2> Our Mission </h2>
          <p> -  Lorem ipsum dolor sit amet, consectetur adipiscing elit. -  </p>

          <h2>About</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus a justo sit amet maximus. Praesent in elit sit amet dui gravida pretium ut ut leo. Curabitur tempus iaculis aliquam. Aliquam aliquam iaculis lacus, nec accumsan metus elementum sit amet. Duis magna dui, euismod id ex in, blandit pulvinar libero. Etiam dignissim scelerisque nulla et ullamcorper. Duis nec pharetra eros, sit amet suscipit quam. Nulla massa mi, lobortis eget eros nec, laoreet interdum lorem. Nunc lobortis ut augue id ornare. </p>
        </div>


  <h2> Meet Our Team </h2>
        <div className="teamMembersWrapper">


<div className="teamMember">
  <img src={teamMember1} alt="Team Member"/>
  <h3>Johnny Walker</h3>
  <p>Web Designer</p>
</div>

<div className="teamMember">
  <img src={teamMember1} alt="Team Member"/>
  <h3>Rebecca Flex</h3>
  <p>Support</p>
</div>

<div className="teamMember">
  <img src={teamMember1} alt="Team Member"/>
  <h3>Jan Ringo</h3>
  <p>Boss man</p>
</div>

<div className="teamMember">
  <img src={teamMember1} alt="Team Member"/>
  <h3>Kai Ringo</h3>
  <p>Fixer</p>
</div>

<div className="teamMember">
  <img src={teamMember1} alt="Team Member"/>
  <h3>Kai Ringo</h3>
  <p>Fixer</p>
</div>


</div>


</div>




    );
  }
}

export default AboutPage;
