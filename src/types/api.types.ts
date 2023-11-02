export interface ICustomErrorType {
  status: number;
  data: {
    statusCode: number;
    message?: string;
    errorMessages?: {
      path: string | number;
      message: string;
    }[];
    success: boolean;
  };
}


export interface IApiReponse<T> {
  statusCode: number;
  success: boolean;
  message?: string | null;
  meta?: {
    page: number;
    limit: number;
  };
  data: T;
}