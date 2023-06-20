import axios from 'axios';

const url = 'http://localhost:8080';

export const login = (username: string, password: string) => {
  let data = JSON.stringify({
    email: username,
    password: password,
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${url}/signin`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };

  return axios.request(config);
};
