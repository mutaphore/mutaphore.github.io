'use strict';

const React    = require('react');
const ReactDOM = require('react-dom');

class AboutView extends React.Component {
  render() {
    return (
      <div>
        <div className="well well-md">
          <div className="row">
            <div className="col-xs-3">
              <img data-src="holder.js/100x100" className="img-responsive img-rounded" alt="In Penang Malaysia!" src="./assets/profile.jpg" />
            </div>
            <div className="col-xs-9">
              <h4>[Technology nerd // Engineer of bits and bytes]</h4> <p>In the past life, I was a mechanical engineer and worked on industry projects involving automation/robotics, machine vision software, mechanical prototype design and process engineering. Currently I'm a full stack software engineer for Codiscope, a security startup that can analyze your Nodejs Javascript code on the cloud.</p>
            </div>
          </div>
        </div>
        <div className="well well-md">
          <h4 className="lead">Education</h4>
          <div className="list-group">
            <li className="list-group-item"><img style={{ height: "40px", width: "40px" }} src="./assets/nyu_logo.jpg"/>&nbsp;&nbsp;&nbsp;&nbsp;<span>M.S. Computer Science @ New York University - 2015</span></li>
            <li className="list-group-item"><img style={{ height: "40px", width: "40px" }} src="./assets/ucsd_logo.gif"/>&nbsp;&nbsp;&nbsp;&nbsp;<span>B.S. Mechanical Engineering @ University of California, San Diego - 2009</span></li>
          </div>
          <img src="./assets/win95/calc_SC.ico"/> <a href="#/about" data-toggle="modal" data-target="#classNameListModal">Coursework</a>
          <br/>
        </div>
        <div className="well well-md">
          <h4 className="lead">Professional Experience</h4>
          <div className="list-group">
            <li className="list-group-item"><p><strong>Senior Software Engineer</strong> @ <a href="https://codiscope.com">Codiscope</a></p></li>
            <li className="list-group-item"><p><strong>Software Engineering Intern</strong> @ <a href="http://empirasign.com">Empirasign Strategies</a></p></li>
            <li className="list-group-item"><p><strong>iOS Mobile Application Developer</strong> @ <a href="http://www.mentoredata.com/web/index.php">Mentor E-Data</a></p></li>
            <li className="list-group-item"><p><strong>Mechanical Engineer/Applications Engineer</strong> @ <a href="http://www.nordson.com/en-us/divisions/asymtek">Nordson Asymtek</a></p></li>
          </div>
          <img src="./assets/win95/wordpad_165.ico"/> <a href="./files/chen_resume.pdf">Resume</a><br/>

          <div className="modal fade" id="classNameListModal" tabIndex="-1" role="dialog" aria-labelledby="modalLabel">
            <div className="modal-dialog modal-sm">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 className="modal-title" id="modalLabel">Coursework</h4>
                </div>
                <div className="modal-body">
                  <a className="list-group-item">Distributed Systems</a>
                  <a className="list-group-item">Heuristic Problem Solving</a>
                  <a className="list-group-item">Machine Learning</a>
                  <a className="list-group-item">Realtime Big Data Analytics</a>
                  <a className="list-group-item">Algorithms and Data Structures</a>
                  <a className="list-group-item">Operating Systems</a>
                  <a className="list-group-item">Programming Languages</a>
                  <a className="list-group-item">Database Systems</a>
                  <a className="list-group-item">Data Communications and Networking</a>
                  <a className="list-group-item">Computer Architecture</a>
                  <a className="list-group-item">Discrete Mathematics</a>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = AboutView;