import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.iter === item) {
            onSort({ ...selectedSort, order: selectedSort.order === "asc" ? "desc" : "asc" });
        } else {
            onSort({ iter: item, order: "asc" });
        }
    };
    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={
                            columns[column].iter
                                ? () => handleSort(columns[column].iter)
                                : undefined}
                        {...{ role: columns[column].iter && "button" } }
                        scope="col"
                    >
                        {columns[column].name}
                    </th>
                ))}
                {/* <th scope="col">Качество</th>
                <th onClick={() => handleSort("profession.name")} scope="col">Профессия</th>
                <th onClick={() => handleSort("completedMeetings")} scope="col">Встретился, раз</th>
                <th onClick={() => handleSort("rate")} scope="col">Оценка</th>
                <th onClick={() => handleSort("bookmark")} scope="col">Избранный</th> */}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    columns: PropTypes.object.isRequired,
    selectedSort: PropTypes.object.isRequired
};

export default TableHeader;
