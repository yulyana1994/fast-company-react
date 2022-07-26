import React from "react";
import PropTypes from "prop-types";

const GroupList = ({ items, valuePropertry, contentProperty, onItemSelect, selectedItem }) => {
    console.log(Object.keys(items));
    return (
        <ul className="list-group">
            {Object.keys(items).map((item) => (
                <li key = {items[item][valuePropertry]}
                    className={
                        "list-group-item" +
                        (items[item] === selectedItem ? " active" : "")}
                    onClick={() => onItemSelect(items[item])}
                    role="button"
                >
                    {items[item][contentProperty]}
                </li>
            ))}
        </ul>
    );
};

GroupList.defaultProps = {
    valuePropertry: "_id",
    contentProperty: "name"
};

GroupList.propTypes = {
    items: PropTypes.object.isRequired,
    valuePropertry: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object
};

export default GroupList;
