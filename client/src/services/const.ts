const apiUrl: any = {
  Development: 'http://localhost:8081',
};

export enum HTTP {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
};

export const COUNTRY_END_POINT = apiUrl[process.env.NODE_ENV] || apiUrl.Development;

export const MaxReviewFileSize = 50 * 1024 * 1024; // MB

