import React, { Component } from 'react';
import logo from './logo.svg';
import Skill from './components/Skill.js'
import EduTitle from './components/EduTitle.js'
import WorkHistory from './components/WorkHistory.js'
import { skills, eduList, jobsList } from './data/datasource.js'




class App extends Component {
  render() {
// console.log(skills);
// console.log(eduList);

    return (
      <div className="App" id="app-container">
         <Skill skill ={skills}/>

         <EduTitle edu ={eduList}/>

         <WorkHistory  wHist = {jobsList}/>
      </div>
    );
  }
}

export default App;
