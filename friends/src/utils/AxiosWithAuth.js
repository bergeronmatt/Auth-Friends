import axios from 'axios'

export const AxiosWithAuth = () => {
    const token = JSON.parse(localStorage.getItem('token'));

    return axios.create({
        baseURL: 'http://localhost:5000',
        headers: {
          Authorization: token
        }
      });
}