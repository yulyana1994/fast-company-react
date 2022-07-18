import React, {useState} from "react";

const SearchStatus = ({count}) => {
    const classes = 'badge m-1 p-3 fs-6 bg-';
    if(count === 0 ){
        return <div className={classes + "danger"}> Никто с тобой не тусанет</div>
    } else if(count > 4 && count < 15) {
        return <div className={classes + "primary"}> {count} человек тусанет с тобой</div>
    } else if(count >=2 && count <= 4){
        return <div className={classes + "primary"}> {count} человекa тусанeт с тобой</div>
    }else{
        return <div className={classes + "primary"}> {count} человек тусанeт с тобой</div> 
    }
}

export default SearchStatus;