import axios from "axios";

const api = axios.create({
  baseURL: "https://senai-overflow-api-leticia.herokuapp.com/",
});

// http://10.0.2.2:3333/

api.defaults.headers.common[
  "Authorization"
] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjEsInN0dWRlbnROYW1lIjoiTGV0w61jaWEgUGFjaGVjbyIsImlhdCI6MTYxNTQwMDQ2MiwiZXhwIjoxNjE1NDA0MDYyfQ.Hld4EqwUdh6Tb4jiUu6i-sPOffDtaGEdEAdBrT4OtA4`;

export { api };