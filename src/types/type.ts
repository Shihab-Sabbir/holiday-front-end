export interface ICustomErrorType {
  status: number;
  data: {
    statusCode: number;
    message: string;
    errorMessages: {
      path: string | number;
      message: string;
    }[];
    success: boolean;
  };
}
