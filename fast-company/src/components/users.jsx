import React, { useState, useEffect } from "react";
import API from "../API";
import User from "./user";
import SearchStatus from "./searchStatus";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import GroupList from "./groupList";

const Users = () => {
    const [users, setUsers] = useState(API.users.fetchAll());
    const [professions, setProfession] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const pageSize = 2;
    useEffect(() => {
        API.professions.fetchAll().then((data) => setProfession(data));
    }, []);
    const [currentPage, setCurrentPage] = useState(1);

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
        ? users.filter((user) => user.profession === selectedProf)
        : users;
    const count = filteredUsers.length;
    const userCropp = paginate(filteredUsers, currentPage, pageSize);
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
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качество</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранный</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userCropp.map((user) => (
                            <User
                                key={user._id}
                                user={user}
                                onDelete={deleteUser}
                                onChangeUser={onChangeUser}/>
                        ))}
                    </tbody>
                </table>
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
