import axios from "axios";

const apiUrl = "http://localhost:3001/v1";

export function addTodo(todo) {
  return axios.post(`${apiUrl}/todo`, todo);
}

export function updateTodo(todo) {
  return axios.put(`${apiUrl}/todo/${todo.id}`, { status: todo.status });
}

export function deleteTodo(id) {
  return axios.delete(`${apiUrl}/todo/${id}`);
}

export function getTododetail(todo) {
  return axios.get(`${apiUrl}/todo/${id}`);
}

export function getTodoList(todo) {
  return axios.get(`${apiUrl}/todo/`);
}
