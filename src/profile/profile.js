import React from 'react'
import PropTypes from "prop-types"

const handleName = (props) => {
    return (
        <div>
            <h1>Welcome {props.name} {props.lastName}</h1>
            <h2>Your current profession: {props.profession}</h2>
            <h2>You are {props.age} old</h2>
            {props.children}
        </div>
    )
}

handleName.defaultProps = {
    age:"18"
};

handleName.propTypes = {
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    age: PropTypes.oneOf([15,18])

}

export default handleName
 
