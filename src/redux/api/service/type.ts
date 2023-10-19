export enum SERVICE_TYPE {
  HOTEL = "hotel",
  FLIGHT = "flight",
  CAB = "cab",
  BUS = "bus",
  TRAIN = "train",
  HOLIDAY = "holiday",
}

export interface IService {
  _id?: string;
  service: SERVICE_TYPE;
  name: string;
  from: string;
  to: string;
  startDate: Date;
  price: number;
  capacity: number;
  location: string;
  time: Date;
  description: string;
  country: string;
  image: string | null;
}

export interface IServiceResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: IService[];
}
