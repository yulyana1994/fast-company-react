import React, { useState } from "react";
import PropTypes from "prop-types";

const Bookmark = ({ id, onChange, ...props }) => {
    const [checked, setChecked] = useState(props.checked);

    const handleChange = () => {
        const newChecked = !checked;

        setChecked(newChecked);

        if (onChange) {
            onChange(newChecked);
        }
    };

    return (
        <>
            <button className="btn btn-outline-primary" onClick={handleChange}>
                <i
                    className={"bi bi-balloon" + (checked ? "-heart-fill" : "-heart")}
                ></i>
            </button>
        </>
    );
};

Bookmark.propTypes = {
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool
};

export default Bookmark;
