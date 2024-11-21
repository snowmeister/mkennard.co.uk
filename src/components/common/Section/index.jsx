import PropTypes from 'prop-types';
import React from 'react'

/**
 * This is a React functional component named Section. It takes two props: children and color. The component returns a div element with a dynamic class name that includes the color prop's name and value properties. The children prop is rendered inside the div.
 * 
 * @param {children} param0 `An HTML element that populates the section to be rendered`;
 * @param {color} param1 ` {name: '', value: ''} The name and value of a color to be applied to the section, based on colors from TailwindCSS.`;
 * @returns 
 */


function Section({ children, bgColor }) {






  return (
    <div className={`h-screen w-full ${bgColor} flex flex-col items-start justify-center m-0 p-4`}>{children} </div>
  )
}

// Define the prop types for the Heading component
Section.propTypes = {
  // The background color of the section
  color: PropTypes.shape({ name: PropTypes.string, value: PropTypes.number }).isRequired,
  // The content of the heading
  children: PropTypes.node.isRequired,
};

export default Section

