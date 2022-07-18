import React from "react";
import { useState } from "react";


const Bookmark = ({ id, onChange, ...props }) => {
    const [checked, setChecked] = useState(props.checked);

    const handleChange = () => {
        const newChecked = !checked;
        
        setChecked(newChecked);

        if (onChange) {
            onChange(newChecked);
        }
    }

    return (
        <>
            <button className="btn btn-outline-primary" onClick={handleChange}  >
                <i className={"bi bi-balloon" + (checked ? "-heart-fill" : "-heart")}></i>
            </button>
        </>
    )
    
}

export default Bookmark;