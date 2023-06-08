export type ApiResponse = {
  statusCode?: number;
  headers?: {
    [key: string]: string;
  };
  body?: any;
  contentType?: string;
};