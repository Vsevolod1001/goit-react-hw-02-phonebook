import React from "react"
import './Filter.css'
import PropTypes from "prop-types";

const Filter = ({value, onChange}) => {
    return (
        <label 
        className="filterLabel"> Find contacts by  name
            <input
            
                onChange={onChange}
                className="filtereInp"
                type="text"
                value={value}
            />
        </label>
    );
}
Filter.propTypes = {
value: PropTypes.string.isRequired,
onChange: PropTypes.func.isRequired,
}
export default Filter;