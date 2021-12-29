const apiUrl: any = {
  Development: 'http://localhost:8081',
  // Test: "https://api.test.mayd.com/",
  // Production: "https://api.mayd.com/",
};

export const HTTP = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

export const endPoint = apiUrl[process.env.NODE_ENV] || apiUrl.Development;

export const MaxReviewFileSize = 50 * 1024 * 1024; // MB


//declared the constants here. in order to set global variables for the project
