import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.2.2:3333/",
});

api.defaults.headers.common[
  "Authorization"
] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjEsInN0dWRlbnROYW1lIjoiTGV0w61jaWEgUGFjaGVjbyIsImlhdCI6MTYxNTIzMjkzNSwiZXhwIjoxNjE1MjM2NTM1fQ.6cTrMpUSw6aDoomFe7TtrStttSQZxtTODIOkcBN4rDk`;

export { api };