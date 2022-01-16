import React from "react"
import './Filter.css'

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
export default Filter;