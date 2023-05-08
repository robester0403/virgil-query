import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getData = async (url) => {
  const { data } = await apiClient.get(url);
  return data;
};
