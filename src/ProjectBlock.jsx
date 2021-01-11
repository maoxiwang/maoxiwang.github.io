import React from 'react';
import {Link} from 'react-router-dom';
import "./style.scss";
// className = 
// element html element h1
// prop is a property which is a parameter for a function
// every react component is a function that returns a webpage

// def function(x, y, z):
//   pass

// function(1, 2, 3)

// const Function = ({ x, y }) => {}

// <Function x={1} y={2} ></Function>

const ProjectBlock = ({ title, description, imageSource, height, link }) => {
  return (
    <Link to ={link}>
      <div className ="m-3">
        <img className="w-100 rounded-top" style={{ objectFit: "cover", height}} src={imageSource} alt={title} />
        <div className="bg-dark rounded-bottom">
          <h1 className="px-3 pt-2 m-0 text-white project-header">{title}</h1>
          <div className="px-3 pb-2 m-0 text-light">{description}</div>
        </div>
      </div>
    </Link>
  );
};
ProjectBlock.defaultProps = {
  height:"250px",
};
export default ProjectBlock;