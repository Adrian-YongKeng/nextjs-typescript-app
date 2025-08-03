import React from "react";

interface User {
  id: number;
  name: string;
}

const UserPage = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    // { //by default fetch will cache the data(static rendering)
    // to disable cache, data change frequently, to get fresh data
    // cache: "no-store",
    // get data from backend every 10s
    // next: { revalidate: 10 },
    //   }
    { cache: "no-store" }
  );
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UserPage;
