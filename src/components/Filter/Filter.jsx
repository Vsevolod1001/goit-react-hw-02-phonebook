import React from "react"

const Filter = ({value, onChange}) => {
    return (
        <label> Find contacts by  name
            <input
                onChange={onChange}
                type="text"
                value={value}
            />
        </label>
    );
}
export default Filter;