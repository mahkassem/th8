import { ApiResponse } from "./models/response.models";

export const response = (res: ApiResponse): ApiResponse => {
  // Set default status code to 200
  let statusCode = res.statusCode || 200;

  // Set default headers to an empty object
  let headers = res.headers || {};

  // Set default body to an empty string
  let body = JSON.stringify(res.body) || "";

  // Set default content type if exists
  if (res.contentType) {
    headers = {
      ...headers,
      "Content-Type": res.contentType
    }
  }

  // Return the response
  return {
    statusCode,
    headers,
    body,
  };
}

export const jsonResponse = (res: ApiResponse): ApiResponse => {
  let result = response(res);
  // Set default content type to JSON
  if (result.headers)
    result.headers = {
      ...result.headers,
      "Content-Type": "application/json"
    }
  else
    result.headers = {
      "Content-Type": "application/json"
    }

  return result;
}