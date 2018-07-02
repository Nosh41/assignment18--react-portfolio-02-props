import React, { Component } from 'react'

class EduTitle extends Component {

_generateEduTitleJsx(){

  const eduTitleArr = this.props.edu.map(function(eduStr, index){
      // console.log(eduStr);
      return  (
        <div className="degree" key={index}>
          <h5 className="degree__institute">{eduStr.institute}</h5>
          <p className="degree__field">{eduStr.fieldOfStudy}</p>
          <p className="degree__dates">{eduStr.dates}</p>
        </div>
      )
    })
      return eduTitleArr
      // console.log(eduTitleArr);

  }

  render() {
    // console.log(this.props.edu)

    return (
      <section>
          <h4>Education</h4>
          <div className="degree-list">
            {this._generateEduTitleJsx()}
          </div>
      </section>
    );
  }
}


export default EduTitle;
