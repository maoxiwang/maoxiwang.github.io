import React from 'react';

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
    <a href={link}>
      <div className ="m-3">
        <img className="w-100 rounded-top" style={{ objectFit: "cover", height}} src={imageSource} alt={title} />
        <div className="bg-dark rounded-bottom">
          <h4 className="px-3 pt-2 m-0 text-white">{title}</h4>
          <div className="px-3 pb-2 m-0 text-light">{description}</div>
        </div>
      </div>
    </a>
  );
};
ProjectBlock.defaultProps = {
  height:"250px",
};
export default ProjectBlock;