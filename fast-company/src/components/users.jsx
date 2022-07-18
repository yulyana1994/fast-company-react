import React, {useState} from "react";
import API from "../API";
import User from "./user";
import SearchStatus from "./searchStatus";


const Users = () => {
    const [users, setUsers] = useState(API.users.fetchAll());

    const deleteUser = (id) => {
        const newUsers = users.filter(user => user._id !== id);

        setUsers(newUsers)
    }

    const onChangeUser = (newUser) => {
        const newUsers = users.map(user => {
            if (user._id === newUser._id) {
                return newUser;
            }

            return user;
        });

        setUsers(newUsers);
    }

    return(
        <>
        <SearchStatus  number ={users.length}/>
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
                {users.map(user => <User key={user._id} user={user} onDelete = {deleteUser} onChangeUser={onChangeUser}/>)}
            </tbody>
        </table>    
        </>
        )
}

export default Users