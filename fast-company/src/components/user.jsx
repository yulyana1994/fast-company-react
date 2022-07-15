import React from "react";
import Quality from "./quality";
import Bookmark from "./bookmark";

const User = ({user, onDelete}) => {
    

    return(
        <tr className="table-primary">
            <td className="table-primary">{user.name}</td>
            <td className="table-primary">{user.qualities.map(quality => <Quality key={quality._id} quality={quality}/>)}</td>
            <td className="table-primary">{user.profession.name}</td>
            <td className="table-primary">{user.completedMeetings}</td>
            <td className="table-primary">{user.rate}</td>
            <td className="table-primary">{user.bookmark.toString()}</td>
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