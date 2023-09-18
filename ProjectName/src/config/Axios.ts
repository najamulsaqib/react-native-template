import axios from 'axios';
import {ENV} from 'src/config/env';
import {getRedux} from 'src/Redux/function';

interface IAxios {
  method: string;
  url: string;
  data?: Object;
}

class Axios {
  static request({method, url, data = {}}: IAxios) {
    const {state} = getRedux();
    const token = state.auth.token;
    return axios({
      method,
      url: ENV.base_url + url,
      ...(Object.keys(data).length !== 0 && {data: JSON.stringify(data)}),
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        ...(token && {Authorization: `Bearer ${token}`}),
      },
    })
      .then((res: any) => res.data)
      .catch((err: any) => {
        throw err;
      });
  }
  static formRequest({method, url, data = {}}: IAxios) {
    const {state} = getRedux();
    const token = state.auth.token;
    return axios({
      method,
      url: ENV.base_url + url,
      data,
      headers: {
        accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        ...(token && {Authorization: `Bearer ${token}`}),
      },
    })
      .then((res: any) => res.data)
      .catch((err: any) => {
        throw err;
      });
  }
}

export default Axios;
