import React from 'react';
import { PropTypes } from "prop-types";

function WelcomeAge(props) {
    const {name, age} = props;
    return (
        <>
            <p className="customTitle">Welcome to this super App, {name} !</p>
            <p>You are {age} year old.</p>
        </>
    );
}

WelcomeAge.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
};

WelcomeAge.defaultProps = {
    name: 'Unknown user',
    age: 18
}

export default WelcomeAge;