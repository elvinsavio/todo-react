import axios from 'axios';

const url = 'http://localhost:8080';

const getToken = async () => {
  try {
    return localStorage.getItem('token');
  } catch {
    window.location.reload();
  }
};

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

export const getTodo = async <T>(): Promise<T> => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${url}/todo`,
    headers: {
      Authorization: await getToken(),
    },
  };

  return axios.request(config);
};

export const updateTodo = async <T>(id: number, completed: T): Promise<T> => {
  let data = JSON.stringify({
    completed: completed,
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${url}/todo/update/${id}`,
    headers: {
      Authorization: await getToken(),
      'Content-Type': 'application/json',
    },
    data: data,
  };

  return axios.request(config);
};
