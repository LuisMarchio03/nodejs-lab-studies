import React, { useEffect, useState } from "react";

import api from "./services/api";
import { gql, useMutation, useQuery } from "@apollo/client";

import logo from "./logo.svg";
import "./App.css";

const GET_USERS = gql`
  {
    getUsers {
      name
      age
    }
  }
`;

const GET_USER = gql`
  {
    getUser(name: "Luís") {
      name
    }
  }
`;

const CREATE_USER = gql`
  {
    mutation
    createUser(name: "Luís G Marchió Batista", age: 25) {
      name
    }
  }
`;

function App() {
  //? Hooks
  const { data: users, loading, error } = useQuery(GET_USERS);
  const {
    data: user,
    loading: loadingUser,
    error: errorUser,
  } = useQuery(GET_USER);

  if (loading) return null;
  if (loadingUser) return null;

  console.log(users?.getUsers);
  console.log(user?.getUser);

  // const [
  //   createUser,
  //   {
  //     data: createUserData,
  //     loading: createUserLoading,
  //     error: createUserError,
  //   },
  // ] = useMutation(CREATE_USER);

  // if (createUserLoading) return null;

  // console.log(createUserData);

  //? Forma convencional
  // useEffect(() => {
  //   createUser();
  //   getUsers();
  //   getUser();
  // }, []);

  // async function createUser() {
  //   const {
  //     data: { createUser: data },
  //   } = await api.mutate({
  //     mutation: gql`
  //       mutation {
  //         createUser(name: "Marcos", age: 25) {
  //           name
  //           age
  //         }
  //       }
  //     `,
  //   });

  //   console.log(data);
  // }

  // async function getUsers() {
  //   const {
  //     data: { getUsers: data },
  //   } = await api.query({
  //     query: gql`
  //       query {
  //         getUsers {
  //           name
  //           age
  //         }
  //       }
  //     `,
  //   });

  //   console.log(data);
  // }

  // async function getUser() {
  //   api
  //     .query({
  //       query: gql`
  //         query {
  //           getUser(name: "Luís") {
  //             name
  //           }
  //         }
  //       `,
  //     })
  //     .then((res) => console.log("GetUser", res.data));
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
