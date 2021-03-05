import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.2.2:3333/",
});

api.defaults.headers.common[
  "Authorization"
] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjEsInN0dWRlbnROYW1lIjoiTGV0w61jaWEgUGFjaGVjbyIsImlhdCI6MTYxNDk3Mjk1OCwiZXhwIjoxNjE0OTc2NTU4fQ.Nrtt3bP-lWjHvrBECC1DZlxPOBdHe1tsaNM9T7OQ260`;

export { api };