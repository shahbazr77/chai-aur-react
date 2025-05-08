import React from "react";
import { useParams } from "react-router-dom";

const Users = () => {
    const {id} = useParams();
    return (
        <div>
            <h1 className="text-3xl font-bold text-center bg-gray-200 p-4">Users {id}</h1>
        </div>
    )
}

export default Users;