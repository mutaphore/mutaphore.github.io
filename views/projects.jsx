'use strict';

const React    = require('react');
const ReactDOM = require('react-dom');

class ProjectsView extends React.Component {
  render() {
    return (
      <div>
        <a className="list-group-item" href="https://github.com/mutaphore/docker-dispatch">Dispatch Docker containers from RabbitMQ messages <span className="badge">Go</span></a>
        <a className="list-group-item" href="https://github.com/mutaphore/bigdata_project">Big data analytic on HackerNews/Reddit upvotes using Hadoop Hive and MapReduce<span className="badge">Python / Hadoop</span></a>
        <a className="list-group-item" href="http://mlproject.herokuapp.com">A linear regression plotter using gradient descent to find best fit <span className="badge">Python / Django / Heroku</span></a>
        <a className="list-group-item" href="http://cims.nyu.edu/drecco/games/GravitationalVoronoi/crz.php">Gravitational voronoi game<span className="badge">Javascript / PHP</span></a>
        <a className="list-group-item" href="https://github.com/mutaphore/RTSP-Client-Server">Video streaming between client and server using RTSP and RTP protocols<span className="badge">Java</span></a>
        <a className="list-group-item" href="https://github.com/mutaphore/spring-rest-service">Simple RESTful APIs using Spring and Roo<span className="badge">Java / Postgres / AWS</span></a>
        <a className="list-group-item" href="https://github.com/mutaphore/NYU-JOS">An exokernel operating system called JOS<span className="badge">C</span></a>
        <a className="list-group-item" href="https://github.com/mutaphore/CSC349_knapsack_project">Knapsack problem<span className="badge">Java</span></a> 
        <a className="list-group-item" href="http://mutaphore.github.io/Calculon">Calculon (auto program grader)<span className="badge">C</span></a> 
        <a className="list-group-item" href="http://mutaphore.github.io/LZW-Compressor">LZW Compressor<span className="badge">C</span></a> 
        <a className="list-group-item" href="https://gitlab.com/mutaphore/CSC103_project1/tree/master">Expression converter<span className="badge">Java</span></a> 
        <a className="list-group-item" href="https://gitlab.com/mutaphore/CSC103_project4/tree/master">Student records storage<span className="badge">Java</span></a> 
        <a className="list-group-item" href="https://gitlab.com/mutaphore//CSC103_project5/tree/master">Sorting algorithms<span className="badge">Java</span></a> 
        <a className="list-group-item" href="http://mutaphore.github.io/Linear-Simulator">Linear Simulator<span className="badge">C</span></a>
      </div>
    );
  }
}

module.exports = ProjectsView;