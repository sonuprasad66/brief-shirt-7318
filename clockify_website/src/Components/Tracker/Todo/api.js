import axios from "axios";

export const handleGet = () => {
  return axios.get(`http://localhost:3005/todo`);
};

export const handlePost = (data) => {
  console.log(data);
  return axios.post(`http://localhost:3005/todo`, {
    title: data,
    status: false,
  });
};

export const handleDeleteby = (id) => {
  return axios.delete(`http://localhost:3005/todo/${id}`);
};

export const handleTogglestatus = (id, newstatus) => {
  return axios.patch(`http://localhost:3005/todo/${id}`, {
    status: newstatus,
  });
};
