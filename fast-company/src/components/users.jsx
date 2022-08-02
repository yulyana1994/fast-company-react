import React, { useState, useEffect } from "react";
import API from "../API";
import SearchStatus from "./searchStatus";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import GroupList from "./groupList";
import UsersTable from "./usersTable";
import _ from "lodash";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [professions, setProfession] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });

    const pageSize = 8;

    useEffect(() => {
        API.professions.fetchAll().then((data) => setProfession(data));
        API.users.fetchAll().then((data) => setUsers(data));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handleProfessionSelect = item => {
        setSelectedProf(item);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const filteredUsers = selectedProf
        ? users.filter((user) => user.profession._id === selectedProf._id)
        : users;
    const count = filteredUsers.length;
    const sortedUsers = _.orderBy(filteredUsers, [sortBy.iter], [sortBy.order]);
    const userCropp = paginate(sortedUsers, currentPage, pageSize);
    const clearFilter = () => { setSelectedProf(); };
    const deleteUser = (id) => {
        const newUsers = users.filter((user) => user._id !== id);

        setUsers(newUsers);
    };

    const onChangeUser = (newUser) => {
        const newUsers = users.map((user) => {
            if (user._id === newUser._id) {
                return newUser;
            }
            return user;
        });

        setUsers(newUsers);
    };

    const handleSort = (item) => {
        setSortBy(item);
    };

    return (
        <div className="d-flex">
            <div className="d-flex flex-column flex-shrink-0 p-3">
                { professions && (
                    <>
                        <GroupList
                            selectedItem = {selectedProf}
                            items = {professions}
                            onItemSelect ={handleProfessionSelect}
                        />
                        <button
                            className="btn btn-secondary mt-2"
                            onClick={clearFilter}
                        >
                                Очистить
                        </button>
                    </>
                )}
            </div>
            <div className="d-flex flex-column">
                <SearchStatus count={count} />
                <UsersTable
                    users={userCropp}
                    deleteUser = {deleteUser}
                    onChangeUser = {onChangeUser}
                    selectedSort = {sortBy}
                    onSort = {handleSort}
                />
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}/>
                </div>
            </div>
        </div>
    );
};

export default Users;
