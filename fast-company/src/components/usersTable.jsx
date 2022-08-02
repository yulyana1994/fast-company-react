import React from "react";
import User from "./user";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";

const UsersTable = ({ users, deleteUser, onChangeUser, selectedSort, onSort }) => {
    const columns = {
        name: { iter: "name", name: "Имя" },
        qualities: { name: "Качества" },
        professions: { iter: "professions.name", name: "Профессия" },
        completedMeetings: { iter: "completedMeetings", name: "Встретился, раз" },
        rate: { iter: "rate", name: "Оценка" },
        bookmark: { iter: "bookmark", name: "Избранный" }
    };
    return (
        <table className="table">
            <TableHeader {...{ onSort, selectedSort, columns } }/>
            <tbody>
                {users.map((user) => (
                    <User
                        key={user._id}
                        user={user}
                        onDelete={deleteUser}
                        onChangeUser={onChangeUser}/>
                ))}
            </tbody>
        </table>
    );
};

UsersTable.propTypes = {
    users: PropTypes.array.isRequired,
    deleteUser: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired,
    onChangeUser: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired
};

export default UsersTable;
