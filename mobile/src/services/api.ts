import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.68.64:3333",
});

function getRandomDelay(min = 0, max = 3000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

api.interceptors.request.use(async (config) => {
  const delay = getRandomDelay();
  await new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
  return config;
});
