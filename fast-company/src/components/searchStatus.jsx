import React, {useState} from "react";

const SearchStatus = ({number}) => {
    const classes = 'badge m-1 p-3 fs-6 bg-';
    if(number === 0 ){
        return <div className={classes + "danger"}> Никто с тобой не тусанет</div>
    } else if(number > 4 && number < 15) {
        return <div className={classes + "primary"}> {number} человек тусанет с тобой</div>
    } else if(number >=2 && number <= 4){
        return <div className={classes + "primary"}> {number} человекa тусанeт с тобой</div>
    }else{
        return <div className={classes + "primary"}> {number} человек тусанeт с тобой</div> 
    }
}

export default SearchStatus;