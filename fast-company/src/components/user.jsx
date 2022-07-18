import React from "react";
import Quality from "./quality";
import Bookmark from "./bookmark";

const User = ({ onDelete, onChangeUser, user }) => {
    const handleChange = (bookmark) => {
        const newUser = { ...user, bookmark };

        if (onChangeUser) {
            onChangeUser(newUser);
        }
    }

    return(
        <tr className="table-primary">
            <td className="table-primary">{user.name}</td>
            <td className="table-primary">{user.qualities.map(quality => <Quality key={quality._id} quality={quality}/>)}</td>
            <td className="table-primary">{user.profession.name}</td>
            <td className="table-primary">{user.completedMeetings}</td>
            <td className="table-primary">{user.rate}</td>
            <td className="table-primary">
                <Bookmark checked = {user.bookmark} id = {user._id} onChange={handleChange}/>
            </td>
            <td className="table-primary">
                <button 
                className="btn btn-danger"
                onClick={() => onDelete(user._id)}
                >Удалить</button>
            </td>
            
       </tr>
    )
}

export default User;