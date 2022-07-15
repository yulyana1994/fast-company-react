import React, {useState} from "react";
import API from "../API";
import User from "./user";


const Users = () => {
    const [users, setUsers] = useState(API.users.fetchAll());

    const deleteUser = (id) => {
        debugger
        const newUsers = users.filter(user => user._id !== id);

        setUsers(newUsers)
    }

    return(
        <>
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
                {users.map(user => <User key={user._id} user={user} onDelete = {deleteUser}/>)}
            </tbody>
        </table>    
        </>
        )
}

export default Users