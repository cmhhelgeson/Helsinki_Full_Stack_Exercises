import axios from "axios"
const url = 'http://localhost:3001/persons'

const getAll = () => {
  const promise = axios.get(url);
  return promise.then(response => response.data);
}

const create = new_obj => {
  const promise = axios.post(url, new_obj);
  return promise.then(response => response.data);
}

const update = (id, newObj) => {
  const promise = axios.put(`${url}/${id}`, newObj);
  return promise.then(response => response.data);
}

const deleteObj = id => {
  const promise = axios.delete(`${url}/${id}`);
  return promise.then();
}

const Services = {
  getAll, create, update, deleteObj
};

export default Services;