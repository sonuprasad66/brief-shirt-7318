import React from "react";
import {useState} from "react";
import {DisplayBox} from "../DisplayBox";
import {TodoList} from "./TodoList";
import {
  handleGet,
  handlePost,
  handleDeleteby,
  handleTogglestatus,
} from "./api.js";
import {useEffect} from "react";

export const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  let getData = () => {
    setLoading(true);
    setError(false);
    handleGet()
      .then((res) => {
        setTodo(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  };

  let handleAdd = (value) => {
    handlePost(value).then((res) => getData());
  };

  let handleDelete = (id) => {
    handleDeleteby(id).then((res) => getData());
  };

  let handleToggle = (id, newstatus) => {
    handleTogglestatus(id, newstatus)
      .then((res) => {
        console.log(res);
        getData();
      })
      .catch((err) => console.log(err));
  };

  // console.log(todo);
  return (
    <div>
      <h1>TODO STATUS MADE WITH AXIOS</h1>
      <DisplayBox handleAdd={handleAdd} />

      {loading && <h2>Loading...</h2>}
      {error && <h2>Something went wrong</h2>}

      {todo?.map((elem) => (
        <TodoList
          {...elem}
          key={elem.id}
          id={elem.id}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
};
