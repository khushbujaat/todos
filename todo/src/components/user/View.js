import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, useParams } from "react-router-dom";

const User = () => {
    const [User, setUser] = useState({
        id: "",
       title: "",
       UserId: "",
       completed: "",    

    });
    const { id } = useParams(); 

    useEffect(() => {
        loadUsers();
    }, []);
    const loadUsers = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users/:id");
         setUser(res.data);
   };
    return (
        <div className="container py-4">
      <Link className="btn btn-secondary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {User.id}</li>
        <li className="list-group-item">user name: {User.title}</li>
        <li className="list-group-item">email: {User.UserId}</li>
        <li className="list-group-item">status: {User.completed}</li>
       
      </ul>
    </div>
    )
}
export default User;