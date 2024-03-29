import React from "react";
import UsersItem from "./UsersItem";
import "./UsersList.css";

const UsersList=( props) =>{
    if (props.items.length === 0){
        return (
            <div classNane ="center">
                <h2> no user exist</h2>
            </div>
        );
        

    }
           return(
            
            <ul className ="userlist">
                {
                    props.items.map(user=>{
                        return (<UsersItem 
                        key ={user._id }
                        id = {user._id}
                        name ={user.name}
                        pic ={user.pic}
                        locationcount = {user.locationsid.length}
                        />);
                        
                    })}
            </ul>
           );

};

export default UsersList;