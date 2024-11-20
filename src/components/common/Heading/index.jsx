import React from 'react';
import PropTypes from 'prop-types';

// Define an object that maps heading sizes to their corresponding HTML tags
const headingTags = {
    1: 'h1',
    2: 'h2',
    3: 'h3',
    4: 'h4',
    5: 'h5',
    6: 'h6',
};
const classNames = {
    1: 'text-6xl',
    2: 'text-5xl',
    3: 'text-4xl',
    4: 'text-3xl',
    5: 'text-2xl',
    6: 'text-xl',
};

// Define the Heading component
const Heading = ({ size, children }) => {
    // Get the corresponding HTML tag for the given heading size
    const HeadingTag = headingTags[size];
    const ClassName = classNames[size];

    // If the heading size is invalid, throw an error
    if (!HeadingTag) {
        throw new Error(`Invalid heading size: ${size}`);
    }

    // Render the heading element with the given content
    return <HeadingTag className={ClassName}>{children}</HeadingTag>;
};

// Define the prop types for the Heading component
Heading.propTypes = {
    // The size of the heading (1-6)
    size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
    // The content of the heading
    children: PropTypes.node.isRequired,
};

// Export the Heading component
export default Heading;