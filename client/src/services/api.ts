import axios from 'axios';
import { HTTP, endPoint, MaxReviewFileSize } from './constants';


const apiCall = async (url: string = '', data: any = null, params: any = null, method: any = HTTP.GET, headers = {}) =>
  axios({
    url: `${endPoint}${url}`,
    data,
    params,
    method,
    headers: {
      ...headers,
    },
    maxContentLength: MaxReviewFileSize,
  })
    .then((p) => p)
    .catch((err) => {
      throw err;
    });

export default apiCall;

//declared the axios here with the configuration. in order to make the readability easier at project