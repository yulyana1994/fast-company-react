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

    const count = users.length;
    const pageSize = 4;
    useEffect(() => {
        API.professions.fetchAll().then((data) => setProfession(data));
    }, []);
    const [currentPage, setCurrentPage] = useState(1);

    const handleProfessionSelect = (params) => {
        console.log(params);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const userCropp = paginate(users, currentPage, pageSize);

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
        <>
            <GroupList item = {professions} onItemSelect ={handleProfessionSelect}/>
            <SearchStatus count={users.length} />
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
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}/>
        </>
    );
};

export default Users;
