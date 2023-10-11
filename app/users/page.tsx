import React from 'react'

interface User {
    id:number,
    name:string
}
const UsersPage = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users : User[] = await response.json();
  return (
    <div>
        <h1>users</h1>
        <p>{new Date().toLocaleTimeString()}</p>
        {users.map((user)=>(<div key={user.id}><h3>{user.name}</h3></div>))}

    </div>
  )
}

export default UsersPage