import React, { Component } from 'react'

class Skill extends Component {

_generateSkillsJsx(){

  const skillsListArr = this.props.skill.map(function(skillStr, index){
      // console.log(skillStr);
      return <span className="skills-list__single" key={index}>{skillStr}</span>
  })
    return skillsListArr
    // console.log(skillsListArr);
}

  render() {

    return(
      <section>
        <h4>Skills</h4>
        <div className="skills-list">
          {this._generateSkillsJsx()}
        </div>
      </section>
    );
  }
}


export default Skill;
