import axios from 'axios';

import { Maybe } from 'src/shared/types';

import { HTTP, COUNTRY_END_POINT, MaxReviewFileSize } from './const';

type CountryApiCallType = {
  url: string,
  data: Maybe<string>,
  params: Maybe<string>,
  method: HTTP,
  headers: any
}

const apiCall = async ({ url = '', data = null, params = null, method = HTTP.GET, headers }: CountryApiCallType) =>
  axios({
    url: `${COUNTRY_END_POINT}${url}`,
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
