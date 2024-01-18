import React from "react";

const UsersPage = async () => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // const data = await res.json();

  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  // cache: "no-store" will not store the data in the cache, dynamically fetching the data at every request
  const data = await res.json();

  return (
    <>
      <h1 style={{ color: "red" }}>UsersPage</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
