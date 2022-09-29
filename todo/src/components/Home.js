import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import User from "./user/View";

const Home = (props) => {
    const [todos, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
         loadUsers();
    }, []);

    const loadUsers = async () => {
         const result = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setUsers(result.data);

    }           
    return (
        <div className="container">
            <div className="py-4">
                <h1>Todos</h1>  
     <form class="form-inline ">
      <input  class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
     onChange={(event) => {setSearchTerm(event.target.value);
     } }
      />
       <button class="btn btn-outline-secondary my-2 my-sm-0"
        type="submit" onClick={() => User(todos.id)}>Search</button>     
    </form>

    <table class="table border shadow">
  <thead class="thead-dark">
    <tr>
      <th scope="col">ToDo ID</th>
      <th scope="col">Title</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        todos.filter((val)=> {
             if(searchTerm === ""){
                return val
             } else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
             }
        }).map((user, index) => (
            <tr>           
                <td>{user.id}</td>
                <td>{user.title}</td>        
                <td>{user.completed}</td>
                <td>
       <Link class="btn btn-secondary mr-2" to={`/todos/${user.id}`}>View</Link>
                
                </td>
           </tr>
        ))
       
    }
  </tbody>
</table>
     </div> 
        </div>
    )
}
export default Home;